
import Rates from '../../components/Rate/main';

import NewsImg from "/lg/news-1.png"
import NewsImg2 from "/lg/news-2.png"
import { useTranslation } from 'react-i18next';


import SlideImg1 from "/lg/home-page-01-scaled.jpg";
import SliderImg2 from "/lg/deposit-1.png";
import SliderImg3 from "/lg/bic-care-1.png";
import ImgSliderr from '../../components/Carousel/imgslider';

import CardList from "../../components/Card/main"

const IMAGES = [SlideImg1, SliderImg2, SliderImg3]

const Home: React.FC = () => {
    const { t } = useTranslation();




    return (
        <div className=''>
            <div className='pt-16'>
                
            <ImgSliderr imageUrls={IMAGES} />

  
            </div>

  
 



            <h2 className="text-2xl  text-start my-10 border-l-100 border-bic-navy ">{t('Product&Service')}</h2>


            <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center gap-5 ">

                {/*product and service section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 lg:col-span-3 pl-2">
                    {/*Items */}
                    <div className="max-w-2xs max-h-fit bg-white border border-gray-200  rounded-lg shadow-xs">
                        <a href="#">
                            <img className="rounded-t-lg" src={NewsImg2} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h4 className="mb-2 text-xl max-w-50 tracking-tight text-gray-900 dark:text-white truncate">Innovating Cross-Border Payments First Time in Laos for ggggggggggggVisa B2B</h4>
                            </a>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bic-navy rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-2xs max-h-fit bg-white border border-gray-200 rounded-lg shadow-xs">
                        <a href="#">
                            <img className="rounded-t-lg" src={NewsImg2} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h4 className="mb-2 text-xl max-w-50 tracking-tight text-gray-900 dark:text-white truncate">Innovating Cross-Border Payments First Time in Laos for ggggggggggggVisa B2B</h4>
                            </a>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bic-navy rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-2xs max-h-fit bg-white border border-gray-200 rounded-lg shadow-xs">
                        <a href="#">
                            <img className="rounded-t-lg p11" src={NewsImg2} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-xl max-w-50 tracking-tight text-gray-900 dark:text-white truncate">ໂປຣໂມຊັ່ນເປີດບັນຊີໃໝ່dddddddddddddddd</h5>
                            </a>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bic-navy rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="max-w-2xs max-h-fit bg-white border border-gray-200 rounded-lg shadow-xs">
                        <a href="#">
                            <img className="rounded-t-lg p=1" src={NewsImg} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-xl max-w-50 tracking-tight text-gray-900 dark:text-white truncate">ໂປຣໂມຊັ່ນເປີດບັນຊີໃໝ່ …ddddddddddddddddd</h5>
                            </a>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bic-navy rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>




                </div>

                <div className='w-full'>
                    <Rates />

                </div>

            </div>


            {/*event and annoucement*/}

            <h2 className="text-2xl  text-start my-10 border-l-100  border-bic-navy ">{t('Event&Annoucement')}</h2>


            <div className='lg:col-span-1 justify-items-center'>

                <CardList />



            </div>












        </div>

    )
}
export default Home;