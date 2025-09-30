import DepImg from "/lg/deposit-1.png"
import Logo from "/lg/bic_1_2.png"
import { useTranslation } from 'react-i18next';

import Dep2 from "/lg/deposit-2.png";
import Dep3 from "/lg/retirement-de.png";
import Dep4 from "/lg/fixed-de.png";
import Dep5 from "/lg/deposit-3.png";

function Deposit() {
    const { t } = useTranslation();
    return (
        <div className="pt-15">
            <div className="bg-violet-600  ">
                <img src={DepImg} alt="" />
            </div>

            <div className=" p-5">

                <div className="p-10 ">




                    <section>
                        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3  gap-10 ">


                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xs">
                                <a href="#">
                                    <img className="rounded-t-lg p-1 h-fit lg:max-w-3xs" src={Dep2} alt="" />
                                </a>

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-25">Senior Savings Deposit</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="/senior" className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-bic-navy rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        {t('ReadMore')}
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>

                            </div>

                            <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow-xs">
                                <a href="#">
                                    <img className="rounded-t-lg p-1 lg:max-w-3xs max-h-fit " src={Dep3} alt="" />
                                </a>

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-25">Retirement Savings Deposit </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bic-navy rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                        {t('ReadMore')}
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>

                            </div>


                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xs">
                                <a href="#">
                                    <img className="rounded-t-lg p-1 lg:max-w-3xs" src={Dep4} alt="" />
                                </a>

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-25">Fixed Deposits – Upfront Interesst Payment</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-bic-navy rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        {t('ReadMore')}
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div></div>


                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xs">                                             <a href="#">
                                <img className="rounded-t-lg p-1 lg:max-w-3xs" src={Dep5} alt="" />
                            </a>

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-25">Fixed Term Deposits</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bic-navy rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        {t('ReadMore')}
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div></div>


                            <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow-xs">                                             <a href="#">
                                <img className="rounded-t-lg p-1 lg:max-w-3xs" src={Dep4} alt="" />
                            </a>

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-25">Current Account Deposit</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bic-navy rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        {t('ReadMore')}
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div></div>


                            <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow-xs">
                                <a href="#">
                                    <img className="rounded-t-lg p-1 lg:max-w-3xs " src={Dep2} alt="" />
                                </a>

                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-25">List Of Documents For Opening Of Account</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bic-navy rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        {t('ReadMore')}
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
            </div>


            <div>

            </div>






        </div>
    );
}


export default Deposit