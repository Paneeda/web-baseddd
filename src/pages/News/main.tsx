import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchNewsPosts } from '../../services/fetchRates';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const News: React.FC = () => {
  const { t, i18n } = useTranslation();

  interface NewsPost {
    news_id: string | number;
    news_title: string;
    news_content: string;
    h_img: string;
    status: string;
    created_at: string;
  }

  const [newsPost, setNewsPost] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNewsPosts = async () => {
      setLoading(true);
      try {
        const rawData = await fetchNewsPosts(i18n.language);
        const list = rawData.data?.news || rawData;
        const data = list.map((news: any) => ({
          news_id: news.news_id,
          news_title: news.title_text,
          news_content: news.content,
          h_img: "http://10.10.9.60:8080" + news.h_img,
          status: news.status,
          created_at: news.updated_at,
        }));
        setNewsPost(data);
      } catch (error) {
        console.error('Error fetching news posts:', error);
      } finally {
        setLoading(false);
      }
    };
    getNewsPosts();
  }, [i18n.language]);

  return (
    <div className="lg:pt-16">
      <div className="mb-8">
        {loading && <div className="text-center py-8">Loading...</div>}
        {!loading && newsPost.length === 0 && (
          <div className="text-center py-8 opacity-70">No news found.</div>
        )}

        {!loading && newsPost.length > 0 && (
          <div className="mx-auto p-4 grid lg:grid-cols-4 gap-6">
            {newsPost.map((post) => (
              <div key={post.news_id} className="border-gray-400 max-w-sm ml-9 rounded-lg shadow-md bg-white dark:bg-gray-800">
                <div className="h-fit w-full mb-4 rounded border-b border-gray-300">
                  <img src={post.h_img} alt={post.news_title} className="rounded-t-lg" />
                </div>

                <p className="text-right text-gray-400 text-xs hover:text-gray-500">
                  {post.created_at}
                </p>

                <p className="text-sm font-semibold mb-2"><ReactMarkdown>{post.news_title}</ReactMarkdown></p>

              
                <Link
                  to={`/news/${post.news_id}`}
                  className="inline-block bg-bic-navy px-3 py-2 rounded-lg text-white text-xs hover:bg-bic-navy-light"
                >
                  {t('ReadMore')}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
