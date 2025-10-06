import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { fetchOrgChart } from "../../services/fetchcontent";


interface orgsPost {
    org_id: string | number;
    org_name: string;
    org_description: string;
    image_url: string;
    usage_status: string;
    created_at: string;
    updated_at: string;
}



function Orgchart() {
     const { t, i18n } = useTranslation();
    const [orgPost, setOrgPost] = useState<orgsPost[]>([]);
    const [loading, setLoading] = useState(false);

    const baseUrl = import.meta.env.VITE_API_SERVE_STATIC || "";

useEffect (() => {
         const getorgsPost = async () => {
            setLoading(true);
            try {
                const rawData = await fetchOrgChart(i18n.language);
                console.log(" result:", rawData);

                // safe access to  array
                const list = rawData?.data?.org_charts || [];

                // map data and fix image URLs
                const data = list.map((org: any) => ({
                    org_id: org.org_id,
                   image_url: org.image_url.startsWith("http")
                        ? org.image_url
                        : `${baseUrl}${org.image_url}`,
                    
                }));

                setOrgPost(data);
            } catch (error) {
                console.error("Error fetching  posts:", error);
            } finally {
                setLoading(false);
            }
        };

        getorgsPost();
        }, [i18n.language]);

    return (




        <div>
            <h1 className="p-3 text-center text-bic-navy text-3xl font-semibold uppercase ">{t('OrganizeChart')}</h1>
        

       <div className="">
            {loading && <div className="text-center py-8">Loading...</div>}

            {!loading && orgPost.length === 0 && (
                <div className="text-center py-8 opacity-70">
                    Not found.
                </div>
            )}

            {!loading && orgPost.length > 0 && (
                <div className="">
                    {orgPost.map((post) => (
                        <div
                            key={post.org_id}
                            className=""
                        >
                            <img
                                src={post.image_url}
                                className="w-full "
                            />
                         
                        </div>
                    ))}
                </div>
            )}
        </div>

        </div>
    );
}

export default Orgchart