import DownloadIcon from "../../assets/icons/download.svg";
import fileicon from "/lg/file-icon.png";
import { useTranslation } from "react-i18next";

const Career: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-10 px-4 md:px-10">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl my-6 text-bic-navy-light border-l-10 text-left border-bic-navy pl-3 font-bold">
        {t("Career")}
      </h2>

      {/* Job Application Form */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-8">
        <h3 className="font-medium text-xl lg:text-2xl">
          Job Application Form:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:pl-6">
          <div className="bg-white shadow-sm border border-slate-200 rounded-lg w-full p-3">
            <div className="flex items-center">
              <img src={fileicon} alt="" className="h-6 w-6" />
              <h5 className="ml-3 text-slate-800 text-lg font-semibold flex-1">
                Job Application Form
              </h5>
              <a
                href="https://biclaos.com/wp-content/uploads/2024/06/Job-Application-Form.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={DownloadIcon} alt="" className="ml-2 h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-500 mt-1 text-sm">2024</p>
          </div>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 hidden md:table">
          <thead className="text-xs text-white bg-bic-navy">
            <tr>
              <th scope="col" className="px-6 py-3">No</th>
              <th scope="col" className="px-6 py-3">Position</th>
              <th scope="col" className="px-6 py-3">Post</th>
              <th scope="col" className="px-6 py-3">Location</th>
              <th scope="col" className="px-6 py-3">Deadline</th>
              <th scope="col" className="px-6 py-3">Apply</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 4 }).map((_, i) => (
              <tr key={i} className="bg-white border-b border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-500 whitespace-nowrap">
                  {i + 1}
                </th>
                <td className="px-6 py-4">Customer Service</td>
                <td className="px-6 py-4">01</td>
                <td className="px-6 py-4">HQ</td>
                <td className="px-6 py-4">May 16 2024</td>
                <td className="px-6 py-4">
                  <a href="#">
                    <button className="bg-bic-navy text-white px-4 py-2 rounded-md text-sm hover:bg-bic-navy/90">
                      Apply Now
                    </button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Card View */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <p className="text-gray-500 text-sm">#{i + 1}</p>
              <h4 className="text-lg font-semibold text-gray-800">
                Customer Service
              </h4>
              <p className="text-sm text-gray-600">Post: 01</p>
              <p className="text-sm text-gray-600">Location: HQ</p>
              <p className="text-sm text-gray-600">Deadline: May 16 2024</p>
              <a href="#">
                <button className="mt-3 w-full bg-bic-navy text-white px-4 py-2 rounded-md text-sm hover:bg-bic-navy/90">
                  Apply Now
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
