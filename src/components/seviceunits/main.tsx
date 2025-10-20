import addIcon from "../../assets/icons/mapmarker.svg";
import phonesIcon from "../../assets/icons/phonecall.svg";
import emailIcon from "../../assets/icons/envelope.svg";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { fetchBranchLocation } from "../../services/fetchcontent";

interface BranchPost {
    location_id: string;
    location_name: {
        en: string;
        lo: string;
        zh: string;
    };
    location_address: {
        en: string;
        lo: string;
        zh: string;
    };
    group_id: string;
    phone: {
        tel1: string;
        tel2: string;
    };
    email: {
        email1: string;
        email2: string;
    };
    latitude: string;
    longitude: string;
    operating_hours: string;
    created_at: string;
    updated_at: string;
}

function ServiceUnits() {
    const { t, i18n } = useTranslation();
    const [branch, setBranch] = useState<BranchPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBranchData = async () => {
            setLoading(true);
            try {
                const rawData = await fetchBranchLocation(i18n.language);
                const list = rawData?.data?.locations || [];
                console.log("Fetched branch data:", rawData?.data?.locations);
                const data: BranchPost[] = list.map((branchLocation: any) => ({
                    location_id: branchLocation.location_id,
                    location_name: branchLocation.location_name,
                    location_address: branchLocation.location_address,
                    group_id: branchLocation.group_id,
                    phone: branchLocation.phone,
                    email: branchLocation.email,
                    latitude: branchLocation.latitude,
                    longitude: branchLocation.longitude,
                    operating_hours: branchLocation.operating_hours,
                    created_at: branchLocation.created_at,
                    updated_at: branchLocation.updated_at,
                }));

                setBranch(data);
            } catch (error) {
                console.error("Error fetching branch locations:", error);
            } finally {
                setLoading(false);
            }
        };

        getBranchData();
    }, [i18n.language]);

    const currentLang = i18n.language as "en" | "lo" | "zh";

    if (loading) {
        return <div className="text-center py-10">{t("Loading...")}</div>;
    }

    return (
        <div className="pt-16">
            <h2 className="text-2xl md:text-3xl pl-2 my-10 border-l-4 border-bic-navy text-start dark:text-gray-200">
                {t("ServiceUnitss")}
            </h2>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {branch.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">{t("Not found.")}</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {branch.map((post) => (
                            <div
                                key={post.location_id}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden group p-6"
                            >
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <p className="text-right text-gray-400 text-xs mb-2">
                                            {new Date(post.updated_at).toLocaleDateString()}
                                        </p>
                                        <h3 className="text-lg text-bic-navy font-semibold mb-3">
                                            <ReactMarkdown>{post.location_name?.[currentLang] || post.location_name.en}</ReactMarkdown>

                                        </h3>

                                        <div className="flex items-start text-left space-x-2 mb-2">
                                            <img src={addIcon} alt="address" className="w-4 h-4 mt-1" />
                                            <ReactMarkdown >
                                                {post.location_address?.[currentLang] || post.location_address.en}
                                            </ReactMarkdown>
                                        </div>

                                       {post.phone && (
                                            <div className="flex text-left  space-x-2 mt-2">
                                                <img src={phonesIcon} alt="" className="w-4 h-4 mt-1" />
                                                <div  className="text-sm text-gray-700 dark:text-gray-300">
                                                    {post.phone.tel1 && <p>{post.phone.tel1}</p>}
                                                    {post.phone.tel2 && <p>{post.phone.tel2}</p>}
                                                </div>
                                            </div>
                                       )}

                                        {post.email && (
                                            <div className="flex items-start text-left space-x-2 mt-2">
                                                <img src={emailIcon} alt="email" className="w-4 h-4 mt-1 " />
                                                <div className="text-sm text-gray-700 dark:text-gray-300">
                                                    {post.email.email1 && <p className="">{post.email.email1}</p>}
                                                    {post.email.email2 && <p>{post.email.email2}</p>}
                                                </div>
                                            </div>
                                        )}



                                    </div>

                                    <p className="text-xs text-gray-700 mt-4">
                                        {t("OperatingHours")}: {post.operating_hours || t("N/A")}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ServiceUnits;
