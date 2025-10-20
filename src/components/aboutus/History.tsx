import { useTranslation } from 'react-i18next';
import Logo from "/lg/bic_1_2.png";



function History() {
    const { t } = useTranslation();
    return (
        <div className="">

            <div className="p-10 lg:flex gap-20  border-gray-300">
                <div className="p-20"> <img className="max-w-24" src={Logo} alt="" /></div>

                <div><h1 className="p-7 text-3xl border-l-8  border-bic-navy ">{t('Aboutus')} <span className="text-bic-navy">BIC</span> <span className="text-bic-red">Bank</span></h1>
                    <p className="text-justify">BIC Bank Lao Co., LTD, a commercial bank incorporated in the Lao People’s Democratic Republic (Lao PDR), is entirely owned by Electricite Du Laos (EDL) and Asia Investment and Financial Services Sole Co., Ltd. (AIFS),
                        with share distributions of 30% and 70% respectively. The bank, initially known as International Commercial Bank Lao Limited (ICB) since its inception in 2008, transitioned to BIC Bank Lao on June 22, 2017.
                        This transition was facilitated under the Investment Licence No.0554/ERO, granted by the Ministry of Industry and Commerce, and the Banking Business Licence No. 23/BOL, issued on November 8, 2017, by the Bank of Lao P.D.R (BOL). The bank’s primary operations encompass the provision of comprehensive banking and ancillary financial services within the Lao PDR. The corporate headquarters of the bank is situated at Kaysone Phomvihane Road, Phonsaat Village, Xaysetha District, Vientiane Capital, Lao PDR.
                        Additionally, BIC Bank maintains a presence in various other regions within the Lao PDR.</p></div>

            </div>

            <div className=" lg:flex p-15 gap-20 ">


                {/*Vision */}
                <div className="text-center basis-sm ">
                    <h1 className=" p-7 text-bic-navy text-xl ">{t('Vision')}</h1>
                    <p>Driven by the nation’s ambitions to provide purpose to your banking.</p>
                </div>

                {/*Mission*/}
                <div className="text-center basis-sm">
                    <h1 className=" p-7 text-bic-navy text-xl ">{t('Mission')}</h1>
                    <p>BIC Bank’s mission is to serve with care by;</p>
                    <ul className="">
                        <li>Providing service with sincerity.</li>
                        <li>Providing fair pricing and terms.</li>
                        <li>Being purposeful with a sustainable relationship.</li>
                        <li>Being at the heart of the nation.</li>
                    </ul>
                </div>

                {/*Core values*/}
                <div className=" basis-sm">
                    <h1 className="text-center p-7 text-bic-navy text-xl ">{t('coreValue')}</h1>
                    <h6 className="font-semibold text-justify text-bic-navy">{t('businessOriented')}<span className="font-thin">{t('businessOriented1')}</span></h6>
                      <h6 className="font-semibold text-justify text-bic-navy">{t('Interactions')}<span className="font-thin">{t('Interactions1')}</span></h6>
                    <h6 className="font-semibold text-justify text-bic-navy">{t('CultureExcellence')}<span className="font-thin">{t('CultureExcellence1')}</span></h6>
                    <h6 className="font-semibold text-justify text-bic-navy">{t('Collaboration')} <span className="font-thin">   {t('Collaboration1')}</span></h6>
                    <h6 className="font-semibold text-justify text-bic-navy">{t('Agility')} <span className="font-thin ">{t('Agility1')}</span></h6>
                    <h6 className="font-semibold text-justify text-bic-navy">{t('Respect')} <span className="font-thin ">{t('Respect1')} </span></h6>
                    <h6 className="font-semibold text-justify text-bic-navy">{t('Ethics')} <span className="font-thin">{t('Ethics1')}</span></h6>
                </div>

            </div>






        </div>
    );

}


export default History