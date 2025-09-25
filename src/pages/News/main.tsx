import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { fetchNewsPosts } from '../../services/fetchRates';

const News: React.FC = () => {

  interface NewsPost {
    news_id: string | number;
    news_title: string;
    h_img: string;
    status: string;
    created_at: string;
  };

  const { i18n } = useTranslation();
  const [newsPost, setNewsPost] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getNewsPosts = async () => {
      setLoading(true);
      try {
        const rawData = await fetchNewsPosts(i18n.language);
        // Assuming API shape: { data: [...] }
        const list = rawData.data || rawData; // fallback if API returns array directly
        const data = list.map((news: any) => ({
          news_id: news.news_id,
          news_title: news.title_text,
          h_img: news.h_img,
          status: news.status,
          created_at: news.created_at
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
        <div>
          {loading && (
            <div className="text-center py-8">Loading...</div>
          )}
          {!loading && newsPost.length === 0 && (
            <div className="text-center py-8 opacity-70">No news found.</div>
          )}
          {!loading && newsPost.length > 0 && (
            <div className="max-w-4xl mx-auto p-4 grid gap-6">
              {newsPost.map((post) => (
                <div key={post.news_id} className="border rounded-lg shadow-md">
                  <img src={post.h_img} alt={post.news_title} className="w-full h-auto mb-4 rounded" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default News;