import { useTranslation } from 'react-i18next';
import Logo from "/lg/bic_1_2.png";



function History() {
    const { t } = useTranslation();
    return (
        <div className="">

            <div className="p-30 flex gap-20  border-gray-300">
                <div className="p-20"> <img className="max-w-24" src={Logo} alt="" /></div>

                <div><h1 className="p-7 text-3xl border-l-8  border-bic-navy ">{t('Aboutus')} <span className="text-bic-navy">BIC</span> <span className="text-bic-red">Bank</span></h1>
                    <p className="text-justify">BIC Bank Lao Co., LTD, a commercial bank incorporated in the Lao People’s Democratic Republic (Lao PDR), is entirely owned by Electricite Du Laos (EDL) and Asia Investment and Financial Services Sole Co., Ltd. (AIFS),
                        with share distributions of 30% and 70% respectively. The bank, initially known as International Commercial Bank Lao Limited (ICB) since its inception in 2008, transitioned to BIC Bank Lao on June 22, 2017.
                        This transition was facilitated under the Investment Licence No.0554/ERO, granted by the Ministry of Industry and Commerce, and the Banking Business Licence No. 23/BOL, issued on November 8, 2017, by the Bank of Lao P.D.R (BOL). The bank’s primary operations encompass the provision of comprehensive banking and ancillary financial services within the Lao PDR. The corporate headquarters of the bank is situated at Kaysone Phomvihane Road, Phonsaat Village, Xaysetha District, Vientiane Capital, Lao PDR.
                        Additionally, BIC Bank maintains a presence in various other regions within the Lao PDR.</p></div>

            </div>

            <div className=" flex p-15 ps-32 gap-20 ">


                {/*Vision */}
                <div className="text-center basis-sm ">
                    <h1 className=" p-7 text-bic-navy text-xl ">Our Vision</h1>
                    <p>Driven by the nation’s ambitions to provide purpose to your banking.</p>
                </div>

                {/*Mission*/}
                <div className="text-center basis-sm">
                    <h1 className=" p-7 text-bic-navy text-xl ">Our Mission</h1>
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
                    <h1 className="text-center p-7 text-bic-navy text-xl ">BIC Core Values – BIC Care</h1>
                    <h6 className="font-semibold text-justify text-bic-navy">Business Oriented <span className="font-thin">Good corporate governance and value-based solutions to succeed.</span></h6>
                    <h6 className="font-semibold text-justify text-bic-navy">Culture Excellence <span className="font-thin"> Setting high standards and strive to exceed them with dedication, efficiency and productivity. We recognise and reward superior results.</span></h6>
                    <h6 className="font-semibold text-justify text-bic-navy">Collaboration <span className="font-thin">    Working and thinking cohesively to create efforts for a sustainable outcome for all stakeholders.</span></h6>
                    <h6 className="font-semibold text-justify text-bic-navy">Agility <span className="font-thin "> Being fast and flexible, dynamic and adaptive in delivering pragmatic solutions.</span></h6>
                    <h6 className="font-semibold text-justify text-bic-navy">Respect <span className="font-thin "> An intrinsic trait to the foundational qualities of the Bank. Nonnegotiable value which is the main ingredient that provides momentum for an optimal results.</span></h6>
                    <h6 className="font-semibold text-justify text-bic-navy">Ethics <span className="font-thin">Conducting ourselves with integrity and conforming to the highest level of ethical standards where services offered will be honest, fair and impartial.</span></h6>
                </div>

            </div>






        </div>
    );

}


export default History