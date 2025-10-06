
import Rates from '../../components/Rate/main';

import NewsImg from "/lg/news-1.png"
import NewsImg2 from "/lg/news-2.png"
import { useTranslation } from 'react-i18next';



import ImgSliderr from '../../components/Carousel/imgslider';

import CardList from "../../components/Card/main"
import News from '../News/main';
import Promotions from '../promotion/main';



const Home: React.FC = () => {

    const { t } = useTranslation();




    return (
        <div className=''>
            <div className='pt-10'>

                <ImgSliderr />


            </div>






            <h2 className="text-2xl  text-start my-10 border-l-100 border-bic-navy ">{t('Promotions')}</h2>


            <div className="lg:flex  gap-3 justify-items-center ">

                {/*promotion*/}
                <div className=" flex flex-row gap-10 lg:pl-3">
                    <Promotions />
                </div>

                <div className='w-full lg:w-auto mt-5 lg:mt-0'>
                    <Rates />

                </div>

            </div>


            {/*event and annoucement*/}

            <h2 className="text-2xl  text-start my-10 border-l-100  border-bic-navy ">{t('Event&Annoucement')}</h2>


            <div className='lg:col-span-1 justify-items-center'>

                <News />



            </div>












        </div>

    )
}
export default Home;