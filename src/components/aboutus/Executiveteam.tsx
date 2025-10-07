import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { fetchExecutiveTeam } from "../../services/fetchcontent";

interface ExceTeamPost {
    mgnt_id: string;
    mgnt_name: string;
    mgnt_type: string;
    position: string;
    image_url: string;
    start_date: string;
    end_date: string;
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
                //console.log("API result:", rawData);

                const list = rawData?.data?.members || [];

                const data = list.map((executive: any) => ({
                    mgnt_id: executive.mgnt_id,
                    mgnt_name: executive.mgnt_name,
                    mgnt_type: executive.mgnt_type,
                    position: executive.position,
                    image_url: executive.image_url.startsWith("http")
                        ? executive.image_url
                        : `${baseUrl}${executive.image_url}`,
                }));

                setExePost(data);
            } catch (error) {
                console.error("Error fetching executive team:", error);
            } finally {
                setLoading(false);
            }
        };

        getExecuPost();
    }, [i18n.language]);


    const boardOfDirectors = ExePost.filter((post) =>
        post.mgnt_type.toLowerCase().includes("board")
    );

    const executiveTeam = ExePost.filter((post) =>
        post.mgnt_type.toLowerCase().includes("executive")
    );


    const renderCards = (posts: ExceTeamPost[]) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <div
                    key={post.mgnt_id}
                    className="rounded-lg shadow-md border border-gray-200 overflow-hidden"
                >
                    <img src={post.image_url} alt={post.mgnt_name} className="w-full" />
                    <div className="p-4">
                        <p className="text-right text-gray-400 text-xs mb-2">
                            {post.mgnt_name}
                        </p>
                        <p className="">{post.position}</p>
                        <button className="bg-bic-navy px-3 py-2 rounded-lg text-white text-xs hover:bg-bic-navy-light">
                            {t("ReadMore")}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <h1 className="p-5 text-center text-bic-navy text-3xl font-semibold uppercase">
                {t("BoardOfDirector")}
            </h1>

            <section className="py-10">
                {loading && <div className="text-center py-8">Loading...</div>}

                {!loading && boardOfDirectors.length === 0 && (
                    <div className="text-center py-8 opacity-70">Not found.</div>
                )}

                {!loading && boardOfDirectors.length > 0 && renderCards(boardOfDirectors)}
            </section>


            <h1 className="p-5 text-center text-bic-navy text-3xl font-semibold uppercase">
                {t("ExecutiveTeam")}
            </h1>

            <section className="py-10">
                {loading && <div className="text-center py-8">Loading...</div>}

                {!loading && executiveTeam.length === 0 && (
                    <div className="text-center py-8 opacity-70">Not found.</div>
                )}

                {!loading && executiveTeam.length > 0 && renderCards(executiveTeam)}
            </section>
        </div>
    );
}

export default Executiveteam;
