import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchPromotionPost } from "../../services/fetchRates";
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
interface PromotionPost {
    promo_id: string | number;
    title_text: string;
    h_img: string;
    updated_at: string;
}

const Promotions: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [prosPost, setPromotionPost] = useState<PromotionPost[]>([]);
    const [loading, setLoading] = useState(false);

    // Base URL from .env for images
    const baseUrl = import.meta.env.VITE_API_SERVE_STATIC || "";

    useEffect(() => {
        const getPromotionPost = async () => {
            setLoading(true);
            try {
                const rawData = await fetchPromotionPost(i18n.language);
                console.log("Promotion API result:", rawData);

                // safe access to promos array
                const list = rawData?.data?.promos || [];

                // map data and fix image URLs
                const data = list.map((promo: any) => ({
                    promo_id: promo.promo_id,
                    title_text: promo.title_text || promo.content_text || "No title",
                    h_img: promo.h_img.startsWith("http")
                        ? promo.h_img
                        : `${baseUrl}${promo.h_img}`,
                    updated_at: promo.updated_at,
                }));

                setPromotionPost(data);
            } catch (error) {
                console.error("Error fetching promos posts:", error);
            } finally {
                setLoading(false);
            }
        };

        getPromotionPost();
    }, [i18n.language]);

    return (

        <div className="">
            {loading && <div className="text-center py-8">Loading...</div>}

            {!loading && prosPost.length === 0 && (
                <div className="text-center py-8 opacity-70">
                    No Promotions found.
                </div>
            )}

            {!loading && prosPost.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {prosPost.map((post) => (
                        <div
                            key={post.promo_id}
                            className="rounded-lg shadow-md border border-gray-200 overflow-hidden"
                        >
                            <img
                                src={post.h_img}
                                alt={post.title_text}
                                className="w-full "
                            />
                            <div className="p-4">
                                <p className="text-right text-gray-400 text-xs mb-2">
                                    {post.updated_at}
                                </p>
                                <p className="text-sm mb-3"><ReactMarkdown>{post.title_text}</ReactMarkdown></p>

                                <Link
                                    to={`/promo/${post.promo_id}`}
                                    className="inline-block bg-bic-navy px-3 py-2 rounded-lg text-white text-xs hover:bg-bic-navy-light"
                                >
                                    {t('ReadMore')}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>


    );
};

export default Promotions;
