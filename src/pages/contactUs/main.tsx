import addIcon from "../../assets/icons/mapmarker.svg"
import phonesIcon from "../../assets/icons/phonecall.svg"
import emailIcon from "../../assets/icons/envelope.svg"

function Contactus() {
    return (
        <div className="pt-16">

            <div>
                <div className="bg-bic-navy h-40 text-white text-center ">
                    <h1 className="text-white text-2xl font-bold text-center p-5 pt-10">Contact Us</h1>
                    <p className="text-white  ">we welcome all feedback and suggestions. Contact us through the channels below</p>
                </div>



                <div className=" flex flex-row pl-35 gap-5  p-15">

                    <div className="text-center rounded-lg shadow-md h-43 w-xs p-2">
                        <div className=" p-3 justify-items-center  ">
                            <img src={addIcon} className="max-w-18  " alt="" />
                        </div>
                        <div>
                            <h4 className="text-lg text-bic-navy">Office Address</h4>
                            <p className="text-gray-700 text-sm"> Phonsaart, Xaysettha, Vientiane, Lao PDR.</p>
                        </div>

                    </div>


                    <div className="text-center shadow-md rounded-lg w-xs p-2">
                        <div className=" p-3 justify-items-center">
                            <img src={phonesIcon} className="max-w-16 " alt="" />
                        </div>
                        <div>
                            <h4 className=" text-bic-navy text-lg">Phone Numbers</h4>
                            <p className="text-gray-700 text-sm">Head Office: +85620 8850 8080</p>
                            <p className="text-gray-700 text-sm">Customer Service: +85620 8850 7070</p>
                        </div>

                    </div>

                    <div className="text-center rounded-lg shadow-md w-xs p-2">
                        <div className="p-3 justify-items-center ">
                            <img src={emailIcon} className="max-w-20" alt="" />
                        </div>
                        <div>
                            <h4 className=" text-bic-navy text-lg">Email </h4>
                            <p className="text-gray-700 text-sm">General Information: enquiry@biclaos.com</p>
                        </div>

                    </div>



                </div>

            </div>


            <div className="p-1  pt-5  flex flex-row gap-3">

                <div className=" p-1 shadow-md rounded-md w-full ">
                    <h2 className="text-bic-navy font-medium text-2xl p-1 rounded-lg text-center">Send Us a Message</h2>

                    <div className="flex flex-row p-2 px-23">

                        <div className="flex flex-col">

                            <div className="p-2">
                                <label htmlFor="full-name">Full Name</label>
                                <input type="text"
                                    className="w-full h-10 pl-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200
                             rounded-lg px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                    placeholder="Full Name" />
                            </div>


                            <div className="p-2">
                                <label htmlFor="full-name">Phone Number</label>
                                <input type="text"
                                    className="w-full h-10 pl-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200
                             rounded-lg px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                    placeholder="" />
                            </div>

                        </div>

                        <div className="flex flex-col">
                            <div className="p-2">
                                <label htmlFor="full-name">Email</label>
                                <input type="text"
                                    className="w-full h-10 pl-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 
                            rounded-lg px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                    placeholder="" />
                            </div>


                            <div className="p-2">
                                <label htmlFor="full-name">Subject</label>
                                <input type="text"
                                    className="w-full h-10 pl-3 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 
                            rounded-lg px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                                    placeholder="" />


                            </div>
                        </div>


                    </div>
                    <div className="p-2 px-23">
                        <label htmlFor="full-name">Message</label>
                        <textarea name="message" id="" className="block w-139 h-40 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:shadow-md"></textarea>
                    </div>

                    <div className="p-5 ">
                        <a href="#" className="">
                            <button className="bg-bic-navy text-white rounded-lg px-4 py-3  hover:bg-bic-navylight ">Send Message</button>
                        </a>
                    </div>




                </div>


                <div className="p-1 shadow rounded-md w-full">
                    <div className="bg-bic-navy h-35 rounded-t-lg">
                        <h2 className="text-white text-center text-xl p-4 pt-5">Our Location</h2>
                        <p className="text-slate-300 text-center">Our headquarters is located in the heart of Vientiane, easily accesible from all routes </p>
                    </div>
                    <div className="p-10">Map</div>

                </div>




            </div>

        
   






















        </div>
    );
}


export default Contactus