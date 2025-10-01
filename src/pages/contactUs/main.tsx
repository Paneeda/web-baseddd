import addIcon from "../../assets/icons/mapmarker.svg";
import phonesIcon from "../../assets/icons/phonecall.svg";
import emailIcon from "../../assets/icons/envelope.svg";
import { useTranslation } from "react-i18next";

function Contactus() {
  const { t } = useTranslation();
  return (
    <div className="pt-16 px-4 md:px-10">
      {/* Header */}
      <div className="bg-bic-navy h-40 text-white flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-2xl md:text-3xl font-bold">{t("ContactUs")}</h1>
        <p className="mt-2 text-sm md:text-base max-w-2xl">
          We welcome all feedback and suggestions. Contact us through the
          channels below
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        <div className="text-center rounded-lg shadow-md p-5 bg-white">
          <div className="flex justify-center mb-3">
            <img src={addIcon} className="h-12" alt="" />
          </div>
          <h4 className="text-lg font-semibold text-bic-navy">
            {t("OfficeAddress")}
          </h4>
          <p className="text-gray-700 text-sm mt-2">
            Phonsaart, Xaysettha, Vientiane, Lao PDR.
          </p>
        </div>

        <div className="text-center rounded-lg shadow-md p-5 bg-white">
          <div className="flex justify-center mb-3">
            <img src={phonesIcon} className="h-12" alt="" />
          </div>
          <h4 className="text-lg font-semibold text-bic-navy">
            {t("PhoneNumbers")}
          </h4>
          <p className="text-gray-700 text-sm">Head Office: +85620 8850 8080</p>
          <p className="text-gray-700 text-sm">
            Customer Service: +85620 8850 7070
          </p>
        </div>

        <div className="text-center rounded-lg shadow-md p-5 bg-white">
          <div className="flex justify-center mb-3">
            <img src={emailIcon} className="h-12" alt="" />
          </div>
          <h4 className="text-lg font-semibold text-bic-navy">Email</h4>
          <p className="text-gray-700 text-sm">
            General Information: enquiry@biclaos.com
          </p>
        </div>
      </div>

  
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Form */}
        <div className="w-full shadow-md rounded-md bg-white p-5">
          <h2 className="text-bic-navy font-medium text-xl md:text-2xl text-center mb-4">
            {t("SendMessage")}
          </h2>

          {/* Inputs Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">{t("FullName")}</label>
              <input
                type="text"
                className="w-full h-10 pl-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-400 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">{t("PhoneNumbers")}</label>
              <input
                type="text"
                className="w-full h-10 pl-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-400 shadow-sm"
              />
            </div>
          </div>

          {/* Inputs Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="text"
                className="w-full h-10 pl-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-400 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">{t("Subject")}</label>
              <input
                type="text"
                className="w-full h-10 pl-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-400 shadow-sm"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mt-4">
            <label className="block text-sm mb-1">{t("Message")}</label>
            <textarea
              className="w-full h-32 border border-slate-200 rounded-lg text-sm p-3 focus:outline-none focus:border-slate-400 shadow-sm"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="mt-5 text-center">
            <button className="bg-bic-navy text-white rounded-lg px-6 py-2 hover:bg-bic-navylight transition">
              {t("SendMessage")}
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full shadow-md rounded-md bg-white">
          <div className="bg-bic-navy rounded-t-md p-5">
            <h2 className="text-white text-lg md:text-xl text-center">
              {t("OurLocation")}
            </h2>
            <p className="text-slate-300 text-center text-sm mt-1">
              Our headquarters is located in the heart of Vientiane, easily
              accessible from all routes.
            </p>
          </div>
          <div className="p-5 text-center text-gray-500">Map</div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
