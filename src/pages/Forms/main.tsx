import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DownloadIcon from "../../assets/icons/download.svg";
import fileicon from "/lg/file-icon.png";
import { fetchForm } from "../../services/fetchcontent";

const baseUrl = import.meta.env.VITE_API_SERVE_STATIC || "";

interface FormItem {
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
  const { t } = useTranslation();
  const [forms, setForms] = useState<FormItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadForms = async () => {
      try {
        const response = await fetchForm();
        const data = response?.data?.forms || response?.forms || []; 
        setForms(data);
      } catch (error) {
        console.error("Failed to load forms:", error);
      } finally {
        setLoading(false);
      }
    };
    loadForms();
  }, []);

  const handleDownload = (filePath: string) => {
    const fullUrl = filePath.startsWith("http") ? filePath : `${baseUrl}${filePath}`;
    const link = document.createElement("a");
    link.href = fullUrl;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <div className="text-center py-10">{t("Loading...")}</div>;
  }

  return (
    <div className="pt-15">
      <h2 className="text-2xl text-start my-10 border-l-100 border-bic-navy">
        {t("DownloadResources")}
      </h2>

      <div className="rounded-lg shadow mb-10">
        <h3 className="text-white bg-bic-navy border-t rounded-t-lg h-15 p-2 font-medium text-2xl">
          {t("Application Forms")}
        </h3>

        <div className="p-10 grid grid-cols-1 lg:grid-cols-3">
          {forms.map((form) => (
            <div
              key={form.form_id}
              className="relative my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
            >
              <div className="flex items-center mb-4 p-2">
                <img src={fileicon} alt="" className="h-6 w-6 text-slate-600" />
                <h5 className="ml-3 text-slate-800 text-xl font-semibold">
                  {form.title}
                </h5>
                <button
                  onClick={() => handleDownload(form.file_url)}
                  className="ml-4"
                >
                  <img src={DownloadIcon} alt="Download" className="h-4 w-4" />
                </button>
              </div>
              <p className="text-gray-500 p-2">{form.file_year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forms;
