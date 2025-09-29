import Executiveteam from '../../components/aboutus/Executiveteam';
import History from '../../components/aboutus/History';
import Orgchart from '../../components/aboutus/Orgchart';
import AnnualReport from '../../components/aboutus/Annualreport';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const AboutUs: React.FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<"bankhistory" | "executiveteam" | "chart" | "annualreport" | null>(null);

    return (
        <div className="pt-16">
            {/* Header */}
            <div className="bg-white border-b border-gray-300 sticky top-0 z-40">
                <h1 className="p-10 text-3xl text-bic-navy text-center">{t('Aboutus')}</h1>

                {/* Tabs */}
                <ul className="md:flex gap-7 justify-center text-cyan-950 pb-3">
                    <li
                        className={`cursor-pointer border-b-2 ${activeTab === "bankhistory" ? "border-bic-navy" : "border-transparent"} hover:text-gray-400`}
                        onClick={() => setActiveTab("bankhistory")}
                    >
                        {t('BankHistory')}
                    </li>
                    <li
                        className={`cursor-pointer border-b-2 ${activeTab === "executiveteam" ? "border-bic-navy" : "border-transparent"} hover:text-gray-400`}
                        onClick={() => setActiveTab("executiveteam")}
                    >
                        {t('ExecutiveTeam')}
                    </li>
                    <li
                        className={`cursor-pointer border-b-2 ${activeTab === "chart" ? "border-bic-navy" : "border-transparent"} hover:text-gray-400`}
                        onClick={() => setActiveTab("chart")}
                    >
                        {t('Charts')}
                    </li>
                    <li
                        className={`cursor-pointer border-b-2 ${activeTab === "annualreport" ? "border-bic-navy" : "border-transparent"} hover:text-gray-400`}
                        onClick={() => setActiveTab("annualreport")}
                    >
                        {t('AnnualReport')}
                    </li>
                </ul>
            </div>

            {/* Tab Content */}
            <div className="p-5">
                {/* Show all by default */}
                {activeTab === null && (
                    <>
                        <History />
                        <Executiveteam />
                        <Orgchart />
                        <AnnualReport />
                    </>
                )}

                {/* Show only selected tab */}
                {activeTab === "bankhistory" && <History />}
                {activeTab === "executiveteam" && <Executiveteam />}
                {activeTab === "chart" && <Orgchart />}
                {activeTab === "annualreport" && <AnnualReport />}
            </div>
        </div>
    );
};

export default AboutUs;
