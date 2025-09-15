import Logo from "/lg/bic_1_1.png"
import IconWa from "../../assets/icons/whatsapp.svg"
import IconYou from "../../assets/icons/youtube.svg"
import IconIg from "../../assets/icons/instagram.svg"
import IconFb from "../../assets/icons/facebook.svg"
import IconAdd from "../../assets/icons/mapmarker.svg"
import IconPhone from "../../assets/icons/phonecall.svg"
import IconMail from "../../assets/icons/envelope.svg"
import IconApp from "../../assets/icons/applestore.svg"
import IconPl from "../../assets/icons/ggplaystore.svg"
import IconHu from "../../assets/icons/huawei.svg"
function Footer() {

    return (
        <div>


            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6  py-3 max-sm:max-w-sm max-sm:mx-auto  border-t border-gray-300">


                <div className="col-span-full   lg:col-span-2 lg:mb-0">

                    <a className="" href="/">
                        <img className="h-12 p-1 pl-30  " src={Logo} alt="Logo" />
                    </a>



                    <div className="flex pt-2 pr-7 space-x-4 sm:justify-center lg:mt-0  ">
                        <a href="javascript:;" className="w-5 h-5 rounded-full bg-bic-bg flex justify-center items-center hover:bg-bic-navy-dark">
                            <img className="w-3 h-3" src={IconFb} alt="" />

                        </a>
                        <a href="javascript:;" className="w-5 h-5 rounded-full bg-bic-bg flex justify-center items-center hover:bg-bic-navy-dark">
                            <img className="w-3 h-3 text-white" src={IconIg} />


                        </a>

                        <a href="javascript:;" className="w-5 h-5 rounded-full bg-bic-bg flex justify-center items-center hover:bg-bic-navy-dark">
                            <img className="w-3 h-3 text-white" src={IconYou} />


                        </a>

                        <a href="javascript:;" className="w-5 h-5 rounded-full bg-bic-bg flex justify-center items-center ">
                            <img className="w-2 h-2" src={IconWa}>

                            </img>
                        </a>
                    </div>

                </div>
                {/*info */}

                <div className="lg:mx-auto text-center ">
                    <h6 className="text-sm text-gray-900 font-medium mb-4">Quick Links</h6>
                    <ul className="text-xs  transition-all duration-500">
                        <li className="mb-3"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                        <li className="mb-3"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Product & Services</a></li>
                        <li className="mb-3"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">News & Updates</a></li>
                        <li className="mb-3"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Online Forms</a></li>

                    </ul>
                </div>

                <div className="lg:mx-auto text-center ">
                    <h6 className="text-sm text-gray-900 font-medium mb-4">Banking Services</h6>
                    <ul className="text-xs  transition-all duration-500">
                        <li className="mb-3"><a href="javascript:;" className=" text-gray-600 hover:text-gray-900">Loans & Financing</a></li>
                        <li className="mb-3"><a href="javascript:;" className="text-gray-600 hover:text-gray-900">Foreign Exchange</a></li>

                    </ul>
                </div>

                <div className="lg:mx-auto text-center">
                    <h6 className="text-sm text-gray-900 font-medium mb-4">Contact Us</h6>
                    <ul className="text-xs ">
                        <li> <a href="javascript:;" className="text-gray-600 text-right mb-3 hover:text-gray-900 flex flex-row items-center gap-2">

                            <img src={IconAdd} className=" h-2 w-2 " alt="" />
                            BIC Headquaters</a>
                        </li>
                        <li className="mb-3"> <a href="javascript:;" className="text-gray-600 text-right mb-3 hover:text-gray-900 flex flex-row items-center gap-2">
                            <img src={IconPhone} className=" h-2 w-2 " alt="" />
                            Tel: +856 21 213 111</a></li>
                        <li className="mb-3"> <a href="javascript:;" className="text-gray-600 text-right mb-3 hover:text-gray-900 flex flex-row items-center gap-2">
                            <img src={IconMail} className=" h-3 w-3 " alt="" />
                            enquiry@biclaos.com</a></li>

                    </ul>
                </div>







            </div>

            {/*info2 */}
            <div className="border-t border-gray-300  flex flex-row gap-10 justify-center">
                <div className="p-4">
                    <p className="text-xs text-gray-900 font-medium "> Banking Hours</p>
                    <ul className="text-xs  transition-all duration-500">
                        <li className=""><a href="javascript:;" className="text-gray-600 text-xs hover:text-gray-900">Monday - Friday: 8:30 - 3:00 </a></li>
                        <li className=""><a href="javascript:;" className="text-gray-600 text-xs hover:text-gray-900">Saturday & Sunday: Closed</a></li>


                    </ul>



                </div>

                <div className="p-4">
                    <p className="text-xs text-gray-900 font-medium "> ATM Location</p>
                    <ul className="text-xs  transition-all duration-500">
                        <li className=""><a href="javascript:;" className="text-gray-600 text-xs hover:text-gray-900">Our ATMs are available nationwide</a></li>
                        <li className=""><a href="javascript:;" className="text-gray-600 text-xs hover:text-gray-900">Find nearest ATMs </a></li>


                    </ul>



                </div>
                <div className="p-4">
                    <p className="text-xs text-gray-900 font-medium "> Mobile Banking</p>
                    <p className=""><a href="javascript:;" className="text-gray-600 text-xs hover:text-gray-900">Dowload Our App for Easy Banking</a></p>

                    <div className="flex justify-center space-x-3 lg:mt-0   ">
                        <a href="javascript:;" className="w-5 h-5 rounded-sm bg-bic-bg flex justify-center items-center hover:bg-bic-navy-dark">
                            <img className="w-3 h-3" src={IconApp} alt="" />

                        </a>
                        <a href="javascript:;" className="w-5 h-5 rounded-sm bg-bic-bg flex justify-center items-center hover:bg-bic-navy-dark">
                            <img className="w-3 h-3 " src={IconPl} />


                        </a>

                        <a href="javascript:;" className="w-5 h-5 rounded-sm bg-bic-bg flex justify-center items-center hover:bg-bic-navy-dark">
                            <img className="w-3 h-3 " src={IconHu} />


                        </a>


                    </div>



                </div>
                <div className="p-4">
                    <p className="text-xs text-gray-900 font-medium  "> Customer Service</p>
                    <p className=""><a href="javascript:;" className="text-gray-600 text-xs hover:text-gray-900 ">24/7 Customer Support</a></p>
                    <p className=""><a href="javascript:;" className="text-bic-red text-xs hover:text-bic-red-light ">020 8850 7070; 020 8850 8080 </a></p>



                </div>






            </div>






            {/*foooot */}
            <div className="py-3 border-t bg-bic-bg border-gray-200">
                <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                    <span className="text-xs text-gray-500 ">Copyright © 2025 BIC Bank Lao Co.,Ltd.</span>
                    <div className="gap-5 flex flex-row">
                        <a href="" className="text-xs text-gray-500 ">Privacy Policy</a>
                        <a href="" className="text-xs text-gray-500 ">Terms of Use</a>

                    </div>

                </div>
            </div>



        </div>
    );
}

export default Footer