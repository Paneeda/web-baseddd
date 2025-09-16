import Logo from "/lg/bic_1_1.png";
import IconWa from "../../assets/icons/whatsapp.svg";
import IconYou from "../../assets/icons/youtube.svg";
import IconIg from "../../assets/icons/instagram.svg";
import IconFb from "../../assets/icons/facebook.svg";
import IconAdd from "../../assets/icons/mapmarker.svg";
import IconPhone from "../../assets/icons/phonecall.svg";
import IconMail from "../../assets/icons/envelope.svg";
import IconApp from "../../assets/icons/applestore.svg";
import IconPl from "../../assets/icons/ggplaystore.svg";
import IconHu from "../../assets/icons/huawei.svg";
import { useTranslation } from "react-i18next";



function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-bic-bg border-t border-gray-200">
            {/* Top section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-8 gap-x-8">
                    {/* Brand + social */}
                    <div className="sm:col-span-2">
                        <a href="/" aria-label="BIC Bank homepage">
                            <img className="h-10 w-auto" src={Logo} alt="BIC Bank" />
                        </a>
                        <div className="flex pt-4 space-x-3 sm:justify-start">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="w-6 h-6 rounded-full bg-bic-bg flex justify-center items-center hover:bg-bic-navy transition-colors"
                            >
                                <img className="w-4 h-4" src={IconFb} alt="Facebook" />
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="w-6 h-6 rounded-full bg-bic-bg flex justify-center items-center hover:bg-bic-navy transition-colors"
                            >
                                <img className="w-4 h-4" src={IconIg} alt="Instagram" />
                            </a>
                            <a
                                href="#"
                                aria-label="YouTube"
                                className="w-6 h-6 rounded-full bg-bic-bg flex justify-center items-center hover:bg-bic-navy transition-colors"
                            >
                                <img className="w-4 h-4" src={IconYou} alt="YouTube" />
                            </a>
                            <a
                                href="#"
                                aria-label="WhatsApp"
                                className="w-6 h-6 rounded-full bg-bic-bg flex justify-center items-center hover:bg-bic-navy transition-colors"
                            >
                                <img className="w-4 h-4" src={IconWa} alt="WhatsApp" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h6 className="text-sm text-gray-900 font-medium mb-4">{t("QuickLinks")}</h6>
                        <ul className="text-xs space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    {t("Aboutus")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    {t("Product&Service")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    {t("News")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    {t("OnlineForms")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Banking Services */}
                    <div className="text-center sm:text-left">
                        <h6 className="text-sm text-gray-900 font-medium mb-4">{t("BankingServices")}</h6>
                        <ul className="text-xs space-y-3">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    {t("Loan")}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900">
                                    {t("ForeignExchange")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="text-center sm:text-left">
                        <h6 className="text-sm text-gray-900 font-medium mb-4">{t("ContactUs")}</h6>
                        <ul className="text-xs space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-gray-900 flex items-center justify-center sm:justify-start gap-2"
                                >
                                    <img src={IconAdd} className="h-3 w-3" alt="Address" />
                                    {t("BICHQ")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+85621213111"
                                    className="text-gray-600 hover:text-gray-900 flex items-center justify-center sm:justify-start gap-2"
                                >
                                    <img src={IconPhone} className="h-3 w-3" alt="Phone" />
                                    {t("PhoneEnquiry")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:enquiry@biclaos.com"
                                    className="text-gray-600 hover:text-gray-900 flex items-center justify-center sm:justify-start gap-2"
                                >
                                    <img src={IconMail} className="h-3 w-3" alt="Email" />
                                    {t("EmailEnquiry")}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Middle information row */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div>
                            <p className="text-xs text-gray-900 font-medium">{t("BankingHours")}</p>
                            <ul className="text-xs mt-2 space-y-1">
                                <li>
                                    <span className="text-gray-600">{t("BankOpenTime")}</span>
                                </li>
                                <li>
                                    <span className="text-gray-600">{t("BankCloseTime")}</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-xs text-gray-900 font-medium">{t("ATMLocation")}</p>
                            <ul className="text-xs mt-2 space-y-1">
                                <li>
                                    <span className="text-gray-600">{t("FindATMLocation")}</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-xs text-gray-900 font-medium">{t("MobileBanking")}</p>
                            <p className="text-xs text-gray-600 mt-2">{t("DownloadOurApp")}</p>
                            <div className="flex justify-center sm:justify-center space-x-3 mt-3">
                                <a
                                    href="#"
                                    aria-label="Download on the App Store"
                                    className="w-7 h-7 rounded bg-bic-bg flex justify-center items-center hover:bg-bic-navy-dark transition-colors"
                                >
                                    <img className="w-4 h-4" src={IconApp} alt="App Store" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Get it on Google Play"
                                    className="w-7 h-7 rounded bg-bic-bg flex justify-center items-center hover:bg-bic-navy-dark transition-colors"
                                >
                                    <img className="w-4 h-4" src={IconPl} alt="Google Play" />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Download on Huawei AppGallery"
                                    className="w-7 h-7 rounded bg-bic-bg flex justify-center items-center hover:bg-bic-navy-dark transition-colors"
                                >
                                    <img className="w-4 h-4" src={IconHu} alt="Huawei AppGallery" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="text-xs text-gray-900 font-medium">{t("CustomerService")}</p>
                            <p className="text-xs text-gray-600 mt-2">{t("SupportTime")}</p>
                            <p className="text-xs text-bic-red mt-1">{t("Hotline")}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="py-3 border-t bg-bic-bg border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-col gap-2 md:flex-row md:justify-between">
                    <span className="text-xs text-gray-500">{t("Copyright")}</span>
                    <div className="gap-5 flex flex-row">
                        <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
                            {t("PrivacyPolicy")}
                        </a>
                        <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
                            {t("TermsOfService")}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;