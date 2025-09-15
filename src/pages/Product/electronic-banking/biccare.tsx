import Ibanner from "/lg/bic-care-1.png"
import Imgsec from "/lg/bic-care-2.png"

function BicCare () {
    return(
        <div>

            <div className="">
                <section className="flex">
                    <img src={Ibanner} alt="" />

                </section>
                         <h2 className="text-2xl md:text-3xl pl-2 my-10 border-l-100  border-bic-navy  dark:text-gray-200">I-Banking</h2>

                <section className="flex flex-row p-5 gap-10 ">
                    <div className="columns-1">
                        <h3 className="font-bold"> Product Objective</h3>
                        <p>The Internet Banking Service is a tool to facilitate customers to access their
                         bank accounts and manage their money online from different locations in anytime that they want.</p>
                         <h3 className="font-bold">Benefit for User</h3>
                         <ul>
                            <li> Can perform financial transaction within BIC Accounts faster as it can be accessed anywhere and anytime.</li>
                            <li> The customer can make amendment on their transaction as they are allowed to have Admin User as well.</li>
                            <li> Customers can set auto process transaction (recurrence) or set payment transaction in advance.</li>
                            <li>The business customer can process payroll transactions for staff by their own without paying any fees to the bank.</li>
                            <li> Easy to monitor usage of transactions or review bank statement.</li>
                         </ul>
                         <h3 className="font-bold">Specific Conditions:</h3>
                         <ul> 
                            <li>The user must have current account with BIC Bank.</li>
                            <li>Only an account holder or a person, who has been entitled by an account holder, can register for the service.</li>
                            <li>Before using the services, the user should accept terms and conditions and also complete the application form with reliable information.</li>
                            <li>A power of attorney letter is required, if an account holder cannot register/apply by himself/herself while valid ID cards 
                                must be provided by both an account holder and his/her representative</li>
                         </ul>
                    </div>
                   
                    <div className="max-w-sm columns-1  " >
                            <img src={Imgsec} alt="" />
                            <img src={Imgsec} className="pt-3" alt="" />
                      
                    </div> 
                </section>
                </div>





        </div>
    );
}

export default BicCare