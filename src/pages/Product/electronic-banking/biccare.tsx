import Ibanner from "/lg/bic-care-1.png";
import Sicon from "/icons/service.svg";
import Imgsec from "/lg/bic-care-2.png";
import Bsvg from "/icons/benefit.svg";
import Gsvg from "/icons/goal.svg";

function BicCare() {
    return (
        <div className="dark:bg-gray-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full ">
                <img
                    src={Ibanner}
                    alt="BIC Care Banner"
                    className="w-full h-[500px] md:h-[500px] object-cover rounded-b-3xl "
                />




            </section>

            <section className="py-20 px-6 lg:px-20">
                <div className="grid max-w-screen-xl mx-auto gap-12 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-bic-navy">
                            Product Objective
                        </h2>
                        <p className="text-lg text-gray-800 dark:text-gray-400">
                            BIC Care is mobile banking application to support customer to perform financial transaction and using some online banking services.
                        </p>

                    </div>

                    <div className="lg:col-span-5 flex justify-center relative">
                        <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-bic-navy-light blur-xl opacity-70"></div>
                        <img className="w-64 lg:w-80 relative z-10" src={Gsvg} alt="senior icon" />
                    </div>
                </div>
            </section>

            <div className="w-full border-t-4 border-bic-red-dark"></div>


            {/* Section 2 */}
            <section className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl mx-auto gap-12 lg:grid-cols-12 items-center">

                    {/* Image on left */}
                    <div className="lg:col-span-5 flex justify-center">
                        <img
                            className="w-64 lg:w-80 rounded-lg"
                            src={Bsvg}
                            alt="senior family"
                        />
                    </div>


                    <div className="lg:col-span-7 text-left space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-bic-navy dark:text-white">
                            Benefit for  <span className="text-bic-red-dark">Customers</span>
                        </h2>
                        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed mb-6">
                            <li>
                                Make payments anytime via mobile phone — including top-ups, utility bills, and QR code payments.
                            </li>
                            <li>
                                Transfer funds domestically via account number or QR code to all banks under the LAP Net network.
                            </li>
                            <li>
                                Send foreign currency (USD & THB) to BCEL accounts easily.
                            </li>
                            <li>Access and use the Electronic Wallet feature.</li>
                            <li>Check daily exchange rates and bank interest rates.</li>
                        </ul>

                    </div>

                </div>
            </section>

            <div className="w-full border-t-4 border-bic-navy"></div>

            {/* Section 3 */}
            <section className="py-20 px-6 lg:px-20">
                <div className="grid max-w-screen-xl mx-auto gap-12 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-7 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-bic-navy">
                            Conditions of Service
                        </h2>
                        <ul className="list-disc ml-6 text-left text-gray-700 dark:text-gray-300 space-y-2 leading-relaxed mb-6">
                            <li>
                                Customers must have a savings or current account before using
                                mobile banking.
                            </li>
                            <li>
                                The “BIC Care” mobile app is available on App Store, Google Play,
                                and App Gallery.
                            </li>
                            <li>
                                Users must accept terms and conditions and complete an application
                                form with accurate information.
                            </li>
                            <li>
                                A power of attorney letter is required if the account holder
                                cannot register in person. Both the account holder and
                                representative must present valid ID cards.
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-5 flex justify-center relative">
                        <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-bic-navy-light blur-xl opacity-70"></div>
                        <img className="w-64 lg:w-80 relative z-10" src={Sicon} alt="senior icon" />
                    </div>
                </div>
            </section>


        </div>
    );
}

export default BicCare;
