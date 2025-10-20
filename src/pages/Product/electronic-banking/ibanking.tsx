import Ibanner from "/lg/i-banking-1.png";
import Imgsec from "/lg/img-sec-ibank.png";
import DownloadIcon from "../../../assets/icons/download.svg";
import FileIcon from "/lg/file-icon.png";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const forms = [
  {
    title: "BIC I-Banking Application Form Corporate (ENG)",
    year: 2025,
    link: "https://biclaos.com/wp-content/uploads/2024/05/BIC-I-banking-Application-form-Corporate-Eng-Version.pdf",
  },
  {
    title: "BIC I-Banking Maintenance Coporate Form Corporate (LA)",
    year: 2025,
    link: "https://biclaos.com/wp-content/uploads/2024/05/BIC-I-banking-Maintenance-form-Corporate-Eng-Version.pdf",
  },
  {
    title: "Terms & Conditions of Internet Banking (ENG)",
    year: 2025,
    link: "https://biclaos.com/wp-content/uploads/2024/05/BIC-I-banking-TC-Eng-version.pdf",
  },
  {
    title: "BIC I-Banking Letter of Authorisation Indemnity",
    year: 2025,
    link: "https://biclaos.com/wp-content/uploads/2024/05/BIC-I-banking-Letter-of-Authorisation_Indemnity.pdf",
  },
  {
    title: "BIC I-Banking Application Form Individual (ENG)",
    year: 2025,
    link: "https://biclaos.com/wp-content/uploads/2024/05/BIC-I-banking-Application-Form-Individual-Eng-Version.pdf",
  },
  {
    title: "BIC I-Banking Transaction Discrepancy",
    year: 2025,
    link: "https://biclaos.com/wp-content/uploads/2024/05/I-Banking-TRANSACTION-DISCREPANCY-FORM-1.pdf",
  },
  {
    title: "BIC I-Banking Maintenance Form (Personal / Retail)",
    year: 2025,
    link: "https://biclaos.com/wp-content/uploads/2024/05/BIC-I-banking-Maintenance-form-Retail_Personal-Eng-Version.pdf",
  },
  {
    title: "I-banking Services Fees and Transaction Limits(Retail)",
    year: 2025,
    Link: "https://biclaos.com/wp-content/uploads/2024/05/BIC-I-banking-Retail-Fee-Limits-Website.pdf"
  },
  {
    title: "I-banking Services Fees and Transaction Limits(Corporate)",
    year: 2025,
    Link: "https://biclaos.com/wp-content/uploads/2024/05/BIC-I-banking-Corporate-Fee-Limits-Website-.pdf"
  },
];

function Ibanking() {

  const { t } = useTranslation();
  return (
    <div className=" bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

      <section className="relative w-full">
        <img
          src={Ibanner}
          alt="I-Banking Banner"
          className="w-full object-cover max-h-[400px] rounded-b-2xl shadow-md"
        />
        <div className="absolute inset-0  flex items-center justify-center">

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold border-l-4 border-bic-navy text-left pl-4 mb-8">
          I-Banking
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">{t('ProductObj')}</h3>
              <p className="leading-relaxed text-justify">
                {t('ProductObjCon')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">{t('BenefitForUser')}</h3>
              <ul className="list-disc ml-5 space-y-2 text-justify">
                <li>
                  {t('BenefitForUser1')}
                </li>
                <li>
                  {t('BenefitForUser2')}
                </li>
                <li>
                  {t('BenefitForUser3')}
                </li>
                <li>
                  {t('BenefitForUser4')}
                </li>
                <li>
                  {t('BenefitForUser5')}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                {t('SpecificCon')}
              </h3>
              <ul className="list-disc ml-5 space-y-2 text-justify">
                <li> {t('SpecificCon1')}</li>
                <li>
                  {t('SpecificCon2')}
                </li>
                <li>
                  {t('SpecificCon3')}
                </li>

              </ul>
            </div>
          </div>

          {/* Images */}
          <div className="flex-1 flex flex-col gap-4 justify-center">
            <img
              src={Imgsec}
              alt="Internet Banking"
              className="rounded-xl shadow-md hover:scale-105 transition-transform"
            />

          </div>
        </div>
      </div>

      {/* Forms Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold border-l-4 border-bic-navy pl-4 mb-8">
          I-Banking Forms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((form, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition-shadow p-5"
            >
              <div className="flex items-start gap-3">
                <img
                  src={FileIcon}
                  alt=""
                  className="h-8 w-8 opacity-80 flex-shrink-0"
                />
                <div className="flex-1">
                  <h5 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">
                    {form.title}
                  </h5>
                  <p className="text-sm text-gray-500 mb-3">{form.year}</p>
                  <a
                    href={form.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-bic-navy hover:text-bic-red font-medium"
                  >
                    <img
                      src={DownloadIcon}
                      alt="Download"
                      className="h-4 w-4"
                    />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ibanking;
