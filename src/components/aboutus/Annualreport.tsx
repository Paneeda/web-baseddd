import DownloadIcon from "../../assets/icons/download.svg"
import fileicon from "/lg/file-icon.png"
import { useTranslation } from 'react-i18next';
import { fetchForm } from "../../services/fetchcontent";
import { useState, useEffect } from "react";


const baseUrl = import.meta.env.VITE_API_SERVE_STATIC || "";

interface AnnualPost {
    form_id: number;
    title: string;
    description: string;
    group_id: string;
    file_url: string;
    file_type: string;
    file_order: number;
    file_year: number;
    created_at: string;
    status: string;
}


const AnnualReport: React.FC = () => {

    const [AnnualReport, setAnnualReport] = useState<AnnualPost[]>([]);
    const [loading, setLoading] = useState(true);
    const { t, i18n } = useTranslation();


    useEffect(() => {
        const loadForms = async () => {
            try {
                const response = await fetchForm('', 'report');
                const data = response?.data?.forms || response?.forms || [];
                setAnnualReport(data);
            } catch (error) {
                console.error("Failed to load forms:", error);
            } finally {
                setLoading(false);
            }
        };
        loadForms();
    }, [i18n.language]);

    const handleDownload = (filePath: string) => {
        const fullUrl = `${baseUrl}${filePath}`;
        const link = document.createElement("a");
        link.href = fullUrl;
        link.target = "_blank";
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>

            <h1 className=" p-5 text-center text-bic-navy text-3xl font-semibold uppercase ">{t('AnnualReport')}</h1>

            <h2 className="text-white text-center text-xl p-4 h-15 font-semibold  bg-bic-navy rounded-t-lg">{t('AnnualReport')}</h2>

            <div className="w-full px-4 py-6 border border-slate-200  shadow-md rounded-b-lg">
                {loading && (
                    <div className="text-center py-8 text-gray-500">Loading...</div>
                )}

                {!loading && AnnualReport.length === 0 && (
                    <div className="text-center py-8 opacity-70 text-gray-400">
                        Not found.
                    </div>
                )}

                {!loading && AnnualReport.length > 0 && (
                    <div
                        className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 place-items-center "
                    >
                        {AnnualReport.map((post) => (
                            <div
                                key={post.form_id}
                                className=" w-full bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/50">
                                    <div className="flex items-center ">
                                        <img src={fileicon} alt="File Icon" className="h-6 w-6 opacity-80" />
                                        <h5 className="ml-3 text-slate-800 text-sm font-semibold ">
                                            {post.title}
                                        </h5>
                                    </div>
                                    <button
                                        onClick={() => handleDownload(post.file_url)}
                                        className="p-2 rounded-md hover:bg-slate-100 transition"
                                        title="Download"
                                    >
                                        <img src={DownloadIcon} alt="Download" className="h-4 w-4" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <p className="text-gray-500 text-sm">{post.file_year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>






           











        </div>





    );
}

export default AnnualReport