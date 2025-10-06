import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchExecutiveTeam } from "../../services/fetchcontent";

interface ExceTeamPost {
    "mgnt_id": string;
    "mgnt_name": string;
    "mgnt_type": string;
    "position": string;
    "image_url": string;
    "start_date": string;
    "end_date": string;
}

function Executiveteam() {
        const { t, i18n } = useTranslation();
        const [ExePost, setExePost] = useState<ExceTeamPost[]>([]);
        const [loading, setLoading] = useState(false);

        const baseUrl = import.meta.env.VITE_API_SERVE_STATIC || "";

            useEffect(() => {
        const getExecuPost = async () => {
            setLoading(true);
            try {
                const rawData = await fetchExecutiveTeam(i18n.language);
                console.log("API result:", rawData);

                // safe access to promos array
                const list = rawData?.data?.members || [];

                // map data and fix image URLs
                const data = list.map((executive: any) => ({
                    mgnt_id: executive.mgnt_id,
                    mgnt_name: executive.mgnt_name ,
            
                    image_url: executive.image_url.startsWith("http")
                        ? executive.image_url
                        : `${baseUrl}${executive.image_url}`,
                 
                }));

                setExePost(data);
            } catch (error) {
                console.error("Error fetching promos posts:", error);
            } finally {
                setLoading(false);
            }
        };

        getExecuPost();
    }, [i18n.language]);

    return (
        <div>

              {loading && <div className="text-center py-8">Loading...</div>}

            {!loading && ExePost.length === 0 && (
                <div className="text-center py-8 opacity-70">
                    Not found.
                </div>
            )}

                  {!loading && ExePost.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ExePost.map((post) => (
                        <div
                            key={post.mgnt_id}
                            className="rounded-lg shadow-md border border-gray-200 overflow-hidden"
                        >
                            <img
                                src={post.image_url}
                                className="w-full "
                            />
                            <div className="p-4">
                                <p className="text-right text-gray-400 text-xs mb-2">
                                    {post.mgnt_name}
                                </p>
                                <p className="text-sm mb-3">{post.position}</p>
                                <button className="bg-bic-navy px-3 py-2 rounded-lg text-white text-xs hover:bg-bic-navy-light">
                                    {t("ReadMore")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <h1 className=" p-5 text-center text-bic-navy text-3xl font-semibold uppercase ">{t('BoardOfDirector')}</h1>

            <section className=" py-10 ">
                <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">

                    {/*Team member 1*/}
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center ">

                       
                        <h3 className="text-xl text-sell-rate font-semibold mb-2">Mr. Rithikone PHOUMMASACK Ph.D</h3>
                        <p className="text-gray-700 p-4">Chairman</p>
                    </div>





                </div>

            </section>

            <h1 className=" p-5 text-center text-bic-navy text-3xl font-semibold uppercase ">{t('ExecutiveTeam')}</h1>

            <section className=" py-10">
                <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">



                    {/*Team member 1*/}
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">

                 
                        <h3 className="text-xl text-sell-rate font-semibold mb-2 p-4">Mr. Lim Wai Hoong</h3>
                        <p className="text-gray-700 p-4">Member</p>
                    </div>

                    {/*Team member 2*/}
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">

   
                        <h3 className="text-xl text-sell-rate font-semibold mb-2 p-4">Mr. Felix Desmond Francis</h3>
                        <p className="text-gray-700 p-4">General Manager – Banking Operations</p>
                    </div>



                </div>

            </section>














        </div>
    );
}


export default Executiveteam