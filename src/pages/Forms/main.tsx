import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DownloadIcon from "../../assets/icons/download.svg";
import fileicon from "/lg/file-icon.png";
import { fetchForm } from "../../services/fetchcontent";
import ReactMarkdown from "react-markdown";

const baseUrl = import.meta.env.VITE_API_SERVE_STATIC || "";

interface FormPost {
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

const Forms: React.FC = () => {
  const { t,i18n } = useTranslation();
  const [forms, setForms] = useState<FormPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadForms = async () => {
      try {
        const response = await fetchForm('', 'application');
        const data = response?.data?.forms || response?.forms || [];
        setForms(data);
      } catch (error) {
        console.error("Failed to load forms:", error);
      } finally {
        setLoading(false);
      }
    };
    loadForms();
  }, [i18n.language]);

  const handleDownload = (filePath: string) => {
    const fullUrl =`${baseUrl}${filePath}`;
    const link = document.createElement("a");
    link.href = fullUrl;
    link.target = "_blank";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <div className="text-center py-10">{t("Loading...")}</div>;
  }


  const renderGroup = (title: string, filterFn: (f: FormPost) => boolean) => {
    const filtered = forms.filter(filterFn);
    if (filtered.length === 0) return null;

    return (
      <div className="rounded-lg shadow mb-10 overflow-hidden">
        <h3 className="text-white bg-bic-navy p-3 font-semibold text-xl">
          {title}
        </h3>
        <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((form) => (
            <div
              key={form.form_id}
              className="bg-white shadow-sm border border-slate-200 rounded-lg p-4 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <img src={fileicon} alt="" className="h-6 w-6" />
                  <h5 className="ml-3 text-slate-800 text-lg font-medium">
                    <ReactMarkdown
                      components={{
                        p: ({ node, ...props }) => <span {...props} />,
                      }}
                    >
                      {form.title}
                    </ReactMarkdown>
                  </h5>
                </div>
                <button
                  onClick={() => handleDownload(form.file_url)}
                  className="hover:opacity-80"
                >
                  <img src={DownloadIcon} alt="Download" className="h-5 w-5" />
                </button>
              </div>
              <p className="text-gray-500 text-sm">{form.file_year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="pt-10">
      <h2 className="text-2xl font-semibold text-start my-10 border-l-4 border-bic-navy pl-3">
        {t("DownloadResources")}
      </h2>

      {renderGroup(t('ApplicationForms'), (f) => f.group_id === "application")}
      {renderGroup(t('I_Banking_Form'), (f) => f.group_id === "ibanking")}
      {renderGroup(t('otherForm'), (f) => f.group_id === "other")}
    </div>
  );
};

export default Forms;
