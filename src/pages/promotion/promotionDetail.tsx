import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPromotionDePost } from "../../services/fetchRates";
import ReactMarkdown from 'react-markdown';

interface PromotionData {
    promo_id: string;
    title_text: string;
    slug_text: string;
    content_text: string;
    h_img: string;
    c_img: {
        images: string;
    };
    tags: string;
    created_at: string;
    updated_at: string;
    status: string;
}

const PromoDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<PromotionData | null>(null);


    const baseUrl = import.meta.env.VITE_API_SERVE_STATIC || "";

    useEffect(() => {
        const fetchPost = async () => {
            try {
                if (!id) return;
                const rawData = await fetchPromotionDePost(id);
                const found = rawData.data || rawData;

                setPost({
                    promo_id: found.promo_id,
                    title_text: found.title_text,
                    slug_text: found.slug_text,
                    content_text: found.content_text,
                    h_img: found.h_img.startsWith("http") ? found.h_img : `${baseUrl}${found.h_img}`,
                    c_img: {
                        images: Array.isArray(found.c_img?.images)
                            ? found.c_img.images.map((img: string) =>
                                img.startsWith("http") ? img : `${baseUrl}${img}`
                            )
                            : [],
                    },

                    tags: found.tags,
                    created_at: found.created_at,
                    updated_at: found.updated_at,
                    status: found.status,
                });
            } catch (err) {
                console.error('Error loading promo:', err);
            }
        };

        fetchPost();
    }, [id]);

    if (!post) return <div className="text-center py-10">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto p-6">
            {post.h_img && (
                <img
                    src={post.h_img}
                    alt={post.title_text}
                    className="rounded-lg mb-6 w-full max-h-[400px] object-cover"
                />
            )}

            <h1 className="text-2xl font-semibold mb-4">
                <ReactMarkdown>{post.title_text}</ReactMarkdown>
            </h1>

            <div className="prose max-w-none dark:prose-invert">
                <ReactMarkdown>{post.content_text}</ReactMarkdown>


                {post.c_img?.images?.[0] && (
                    <img
                        src={post.c_img.images[0]}
                        alt={post.title_text}
                        className="rounded-lg mb-6 w-full max-h-[400px] object-cover"
                    />
                )}


            </div>
        </div>
    );
};

export default PromoDetail;
