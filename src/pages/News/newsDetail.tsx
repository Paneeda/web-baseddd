import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNewsPosts } from '../../services/fetchRates';
import ReactMarkdown from 'react-markdown';

interface NewsPost {
    news_id: string | number;
    news_title: string;
    news_slug_text: string;
    news_content: string;
    h_img: string;
    c_img: string;
    status: string;
    created_at: string;
}

const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<NewsPost | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const rawData = await fetchNewsPosts('en'); // or i18n.language if needed
                const list = rawData.data?.news || rawData;
                const found = list.find((item: any) => String(item.news_id) === id);
                if (found) {
                    setPost({
                        news_id: found.news_id,
                        news_title: found.title_text,
                        news_slug_text: found.slug_text,
                        news_content: found.content_text,
                        h_img: "http://10.10.9.60:8080" + found.h_img,
                        c_img: "http://10.10.9.60:8080" + found.c_img,
                        status: found.status,
                        created_at: found.updated_at,
                    });
                }
            } catch (err) {
                console.error('Error loading news:', err);
            }
        };
        fetchPost();
    }, [id]);

    if (!post) return <div className="text-center py-10">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            <img
                src={post.h_img}
                alt={post.news_title}
                className="rounded-lg mb-6 w-full max-h-[400px] object-cover"
            />
           <ReactMarkdown>{post.news_title}</ReactMarkdown>


            <div className="">
                <ReactMarkdown>{post.news_content}</ReactMarkdown>
         

          
            </div>
        </div>
    );
};

export default NewsDetail;
