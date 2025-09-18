
import addIcon from "../../assets/icons/mapmarker.svg"
import phonesIcon from "../../assets/icons/phonecall.svg"
import emailIcon from "../../assets/icons/envelope.svg"
import HqImg from "/lg/hq.png"
import Unit1 from "/lg/hatsady-unit.png"
function ServiceUnits () {
    return (
        <div className="pt-16">





               <h2 className="text-2xl md:text-3xl pl-2 my-10 border-l-100  border-bic-navy  dark:text-gray-200">Coporate Office, Branches and Service Units </h2>





            {/*branche 1*/}
            <div className="grid grid-cols-3 p-3 pl-5 gap-5 justify-center items-center bg-white min-h-screen">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full ">
                    <img src={HqImg} alt="Mountain" className="w-full h-full object-cover" />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">HeadQuaters</h2>

                        <div className="flex flex-row p-2 gap-3 ">
                            <div className="pt-7 w-12">
                                <img src={addIcon} className=" h-5 " alt="" />
                            </div>

                            <div>
                                <p className="text-gray-700 leading-right ">Kaisonephomvihan Road, Phonsaart Village, Xaysettha District, Vientiane Capital, Lao PDR.
                                    Working Hour : Monday - Friday 8:30 - 15:30</p>
                            </div>

                        </div>

                        <div className="flex flex-row p-2 gap-3 ">

                            <div className="pt-6">
                                <img src={phonesIcon} className="h-5  " alt="" />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-gray-700 leading-right ">Tel: +856 21 618 222,</p>
                                <p className="text-gray-700 leading-right ">Tel: +856 21 618 333,</p>
                                <p className="text-gray-700 leading-right ">Tel: +856 20 8850 7070</p>
                            </div>

                        </div>

                        <div className="flex flex-row p-2 gap-3 ">


                            <div className="pt-3.5">
                                <img src={emailIcon} className="h-5  " alt="" />
                            </div>



                            <div className="flex flex-col">
                                <p className="text-gray-700 leading-right ">enquiry@biclaos.com</p>
                                <p className="text-gray-700 leading-right ">sales_marketing@biclaos.com</p>
                            </div>

                        </div>


                        <div className="flex justify-between items-center">
                            <div className="flex items-center">

                            </div>

                        </div>
                    </div>
                </div>


                {/*Branche 2 */}


                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full ">
                    <img src={Unit1} alt="Mountain" className="w-full h-full" />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Hatsady Branch</h2>

                        <div className="flex flex-row p-2 gap-3 ">
                            <div className="pt-7 w-12">
                                <img src={addIcon} className=" h-5 " alt="" />
                            </div>

                            <div>
                                <p className="text-gray-700 leading-right ">Hatsady Road, Hatsady Village, Chanthabuly District, Vientiane Capital, Lao PDR.
                                    Working Hour : Monday - Friday 8:30 - 15:30</p>
                            </div>

                        </div>

                        <div className="flex flex-row p-2 gap-3 ">

                            <div className="pt-6">
                                <img src={phonesIcon} className="h-5  " alt="" />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-gray-700 leading-right ">Tel: +856 21 250 388,</p>
                                <p className="text-gray-700 leading-right ">Tel: +856 21 250 420</p>

                            </div>

                        </div>

                        <div className="flex flex-row p-2 gap-3 ">

                            <div className="pt-3.5">
                                <img src={emailIcon} className="h-5  " alt="" />
                            </div>



                            <div className="flex flex-col">
                                <p className="text-gray-700 leading-right ">enquiry@biclaos.com</p>
                                <p className="text-gray-700 leading-right ">sales_marketing@biclaos.com</p>
                            </div>


                        </div>


                        <div className="flex justify-between items-center">
                            <div className="flex items-center">

                            </div>

                        </div>
                    </div>
                </div>


                {/*Branche 3 */}


                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full ">
                    <img src={HqImg} alt="Mountain" className="w-full h-full object-cover" />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">HeadQuaters</h2>

                        <div className="flex flex-row p-2 gap-3 ">
                            <div className="pt-7 w-12">
                                <img src={addIcon} className=" h-5 " alt="" />
                            </div>

                            <div>
                                <p className="text-gray-700 leading-right ">Kaisonephomvihan Road, Phonsaart Village, Xaysettha District, Vientiane Capital, Lao PDR.
                                    Working Hour : Monday - Friday 8:30 - 15:30</p>
                            </div>

                        </div>

                        <div className="flex flex-row p-2 gap-3 ">

                            <div className="pt-6">
                                <img src={phonesIcon} className="h-5  " alt="" />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-gray-700 leading-right ">Tel: +856 21 618 222,</p>
                                <p className="text-gray-700 leading-right ">Tel: +856 21 618 333,</p>
                                <p className="text-gray-700 leading-right ">Tel: +856 20 8850 7070</p>
                            </div>

                        </div>

                        <div className="flex flex-row p-2 gap-3 ">


                            <div className="pt-3.5">
                                <img src={emailIcon} className="h-5  " alt="" />
                            </div>



                            <div className="flex flex-col">
                                <p className="text-gray-700 leading-right ">enquiry@biclaos.com</p>
                                <p className="text-gray-700 leading-right ">sales_marketing@biclaos.com</p>
                            </div>

                        </div>


                        <div className="flex justify-between items-center">
                            <div className="flex items-center">

                            </div>

                        </div>
                    </div>
                </div>

                {/*Branche 4 */}


                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full ">
                    <img src={HqImg} alt="Mountain" className="w-full h-full object-cover" />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">HeadQuaters</h2>

                        <div className="flex flex-row p-2 gap-3 ">
                            <div className="pt-7 w-12">
                                <img src={addIcon} className=" h-5 " alt="" />
                            </div>

                            <div>
                                <p className="text-gray-700 leading-right ">Kaisonephomvihan Road, Phonsaart Village, Xaysettha District, Vientiane Capital, Lao PDR.
                                    Working Hour : Monday - Friday 8:30 - 15:30</p>
                            </div>

                        </div>

                        <div className="flex flex-row p-2 gap-3 ">

                            <div className="pt-6">
                                <img src={phonesIcon} className="h-5  " alt="" />
                            </div>

                            <div className="flex flex-col">
                                <p className="text-gray-700 leading-right ">Tel: +856 21 618 222,</p>
                                <p className="text-gray-700 leading-right ">Tel: +856 21 618 333,</p>
                                <p className="text-gray-700 leading-right ">Tel: +856 20 8850 7070</p>
                            </div>

                        </div>

                        <div className="flex flex-row p-2 gap-3 ">


                            <div className="pt-3.5">
                                <img src={emailIcon} className="h-5  " alt="" />
                            </div>



                            <div className="flex flex-col">
                                <p className="text-gray-700 leading-right ">enquiry@biclaos.com</p>
                                <p className="text-gray-700 leading-right ">sales_marketing@biclaos.com</p>
                            </div>

                        </div>


                        <div className="flex justify-between items-center">
                            <div className="flex items-center">

                            </div>

                        </div>
                    </div>
                </div>















            </div>
        </div>
    );
}

export default ServiceUnits