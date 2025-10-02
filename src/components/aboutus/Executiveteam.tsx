import Logo from "/lg/bic_1_2.png"
import { useTranslation } from 'react-i18next'; 

function Executiveteam() {
        const { t, i18n } = useTranslation(); 
    return (
        <div>

            <h1 className=" p-5 text-center text-bic-navy text-3xl font-semibold uppercase ">{t('BoardOfDirector')}</h1>

            <section className=" py-10 ">
                <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">

                    {/*Team member 1*/}
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center ">

                        <img src={Logo} alt="chairman" className="w-full mb-4 " />
                        <h3 className="text-xl text-sell-rate font-semibold mb-2">Mr. Rithikone PHOUMMASACK Ph.D</h3>
                        <p className="text-gray-700 p-4">Chairman</p>
                    </div>

                    {/*Team member 2*/}
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">

                        <img src={Logo} alt="bod-member" className="w-full mb-4" />
                        <h3 className="text-xl text-sell-rate font-semibold mb-2 p4">Mdm. Kingphongeun PHOUMMASACK</h3>
                        <p className="text-gray-700 p-4">Member</p>
                    </div>

                    {/*Team member 3*/}
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">

                        <img src={Logo} alt="bod-member" className="w-full mb-4" />
                        <h3 className="text-xl text-sell-rate font-semibold mb-2 p-4">Mr. Lim Wai Hoong</h3>
                        <p className="text-gray-700 p-4">Member</p>
                    </div>





                </div>

            </section>

            <h1 className=" p-5 text-center text-bic-navy text-3xl font-semibold uppercase ">{t('ExecutiveTeam')}</h1>

            <section className=" py-10">
                <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">



                    {/*Team member 1*/}
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">

                        <img src={Logo} alt="bod-member" className="w-full mb-4" />
                        <h3 className="text-xl text-sell-rate font-semibold mb-2 p-4">Mr. Lim Wai Hoong</h3>
                        <p className="text-gray-700 p-4">Member</p>
                    </div>

                    {/*Team member 2*/}
                    <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">

                        <img src={Logo} alt="bod-member" className="w-full mb-4" />
                        <h3 className="text-xl text-sell-rate font-semibold mb-2 p-4">Mr. Felix Desmond Francis</h3>
                        <p className="text-gray-700 p-4">General Manager – Banking Operations</p>
                    </div>



                </div>

            </section>














        </div>
    );
}


export default Executiveteam