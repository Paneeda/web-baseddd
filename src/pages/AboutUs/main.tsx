import Executiveteam from '../../components/aboutus/Executiveteam';
import History from '../../components/aboutus/History';

import { useTranslation } from 'react-i18next';
import Orgchart from '../../components/aboutus/Orgchart';
import AnnualReport from '../../components/aboutus/Annualreport';

const AboutUs: React.FC = () => {
    const { t } = useTranslation();



    return (
        <div className="pt-16">
            <div className="bg-white   border-b border-gray-300 sticky top-0 z-40">


                <div>
                    <h1 className=" p-10  text-3xl text-bic-navy text-center decoration-blue-500  "> {t('Aboutus')}</h1>
                </div>


                <div className="justify-items-center  pt-3  ">
                    <ul className=" md:flex gap-7 text-cyan-950  ">

                        <a href="#Header" className='cursor-pointer hover:text-gray-400 '>Bank History</a>
                        <a href="#Header" className='cursor-pointer hover:text-gray-400 '>Executive Team</a>
                        <a href="#Header" className='cursor-pointer hover:text-gray-400 '>Charts</a>
                        <a href="#Header" className='cursor-pointer hover:text-gray-400 '>Annual Report</a>

                    </ul>
                </div>



            </div>

            <div>
                <History />
            </div>

            <div>
                <Executiveteam />
            </div>

            <div>
                <Orgchart />
            </div>
            <div>
                <AnnualReport />
            </div>
        


        </div>
    )
}
export default AboutUs;