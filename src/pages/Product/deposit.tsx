import DepImg from "/lg/deposit-1.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { fetchProduct } from "../../services/fetchcontent";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

interface DepositPost {
    product_id: string | number;
    title_text: string;
    content_text?: string;
    h_img: string;
    updated_at: string;
}

function Deposit() {
    const { t, i18n } = useTranslation();
    const [depPost, setDepPost] = useState<DepositPost[]>([]);
    const [loading, setLoading] = useState(false);

    const baseUrl = import.meta.env.VITE_API_SERVE_STATIC || "";

    useEffect(() => {
        const getDepositPost = async () => {
            setLoading(true);
            try {
                const rawData = await fetchProduct(i18n.language);
                const list = rawData?.data?.products || [];

                const data = list.map((product: any) => ({
                    product_id: product.product_id,
                    title_text: product.title_text || "Untitled Product",
                    h_img: product.h_img?.startsWith("http")
                        ? product.h_img
                        : `${baseUrl}${product.h_img}`,
                    updated_at: product.updated_at,
                }));

                setDepPost(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        getDepositPost();
    }, [i18n.language]);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Header Banner */}
            <div className="relative">
                <img
                    className="w-full h-[400px] object-cover rounded-b-2xl shadow-md"
                    src={DepImg}
                    alt="Deposit Banner"
                />
               
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {loading && (
                    <div className="flex justify-center py-12">
                        <div className="animate-spin rounded-full h-10 w-10 border-4 border-bic-navy border-t-transparent"></div>
                    </div>
                )}

                {!loading && depPost.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        {t("No promotions found.")}
                    </div>
                )}

                {!loading && depPost.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {depPost.map((post) => (
                            <div
                                key={post.product_id}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                            >
                                <div className="overflow-hidden ">
                                    <img
                                        src={post.h_img}
                                        alt={post.title_text}
                                        className="w-full h-45 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-5 flex flex-col justify-between h-[200px]">
                                    <div>
                                        <p className="text-right text-gray-400 text-xs mb-2">
                                            {new Date(post.updated_at).toLocaleDateString()}
                                        </p>
                                        <h3 className="text-lg text-bic-navy font-medium  mb-3 line-clamp-2">
                                            <ReactMarkdown>{post.title_text}</ReactMarkdown>
                                        </h3>
                                    </div>
                                    <Link
                                        to={`/productDe/${post.product_id}`}
                                        className="inline-block bg-bic-navy left px-4 py-2 rounded-lg text-white text-xs hover:bg-bic-navy-light"
                                    >
                                        {t("ReadMore")}
                                    </Link>


                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Deposit;
