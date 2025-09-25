import Ibanner from "/lg/bic-care-1.png"
import Imgsec from "/lg/bic-care-2.png"

function BicCare () {
    return(
        <div className="pt-18">

            <div className="">
                <section className="flex">
                    <img src={Ibanner} alt="" />

                </section>
                         <h2 className="text-2xl md:text-3xl  my-10 border-l-100  border-bic-navy">BIC Care</h2>

                <section className="lg:flex lg:flex-row p-5 gap-10 ">
                    <div className="columns-1">
                        <h3 className="font-bold"> Product Objective</h3>
                        <p className="text-justify">BIC Care is mobile banking application to support customer to perform financial transaction and using some online banking services..</p>
                         <h3 className="font-bold">Benefit for customer</h3>
                         <ul className="list-disc ml-5 text-justify mb-4">
                            <li>Easy to make payment anytime anywhere via mobile phone such as top up card, payment for utilities, making payment via QR code.</li>
                            <li> Making domestic fund transfer via account or via QR code to all banks under LAP net network.</li>
                            <li> Making fund transfer for foreign currencies (USD & THB) to BCEL account easily..</li>
                            <li>Be able to get access to use Electronic Wallet.</li>
                            <li>Be able to see daily exchange rate and interest rate of the bank.</li>
                         </ul>
                         <h3 className="font-bold">Condition of the Service:</h3>
                         <ul className="list-disc ml-5 text-justify mb-4"> 
                            <li>Customers must have saving account or current account before getting access for mobile banking.</li>
                            <li>The mobile banking application “BIC Care” can be downloaded from App Store, Google Play Store and App Gallery.</li>
                            <li>Before using the services, the user should accept terms and conditions and also complete the application form with reliable information.</li>
                            <li>A power of attorney letter is required, if an account holder cannot register/apply by himself/herself while valid ID cards 
                                must be provided by both an account holder and his/her representative</li>
                         </ul>
                    </div>
                   
                    <div className="max-w-sm columns-1  ml-9" >
                            <img src={Imgsec} alt="" />
                            <img src={Imgsec} className="pt-3" alt="" />
                      
                    </div> 
                </section>
                </div>





        </div>
    );
}

export default BicCare