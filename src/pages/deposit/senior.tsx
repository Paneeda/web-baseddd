import Dep1 from "/lg/seniordeposit.png";
import DepSe from "/icons/senior-woman.svg";
import Sicon from "/icons/senior.svg";
import Piggy from "/icons/piggy.svg";

function Senior() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
  
      <div className="relative">
        <img
          className="w-full h-[400px] object-cover rounded-b-3xl shadow-lg"
          src={Dep1}
          alt=""
        />
   
      </div>

      {/* Section 1 */}
      <section className="py-20 px-6 lg:px-20">
        <div className="grid max-w-screen-xl mx-auto gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-bic-navy">
              Enjoy your retirement age without worrying about finances.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Interest credited to account on a monthly basis based on account balance.
            </p>
           
          </div>

          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-bic-navy-light blur-xl opacity-70"></div>
            <img className="w-64 lg:w-80 relative z-10" src={Sicon} alt="senior icon" />
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
        src={DepSe}
        alt="senior family"
      />
    </div>

    {/* Text on right */}
    <div className="lg:col-span-7 text-left space-y-6">
      <h2 className="text-3xl md:text-5xl font-extrabold text-bic-navy dark:text-white">
        Invest in your <span className="text-bic-red-dark">golden years</span> with your family by your side.
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
        Create wealth that not only supports your lifestyle but also helps
        your children and grandchildren thrive together.
      </p>
   
    </div>

  </div>
</section>



      <div className="w-full border-t-4 border-bic-red-dark"></div>


<section className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900">
  <div className="grid max-w-screen-xl mx-auto gap-12 lg:grid-cols-12 items-center">
  
    <div className="lg:col-span-7 text-left space-y-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-bic-navy dark:text-white">
        From{" "}
        <span className="text-bic-red-dark">1.75% p.a.</span> to{" "}
        <span className="text-bic-red-dark">2.50% p.a.</span>
      </h2>

      <p className="text-lg text-gray-600 dark:text-gray-400">
     The more you save the higher interest will be paid.
      </p>

      <div className="flex justify-start">
        <div className="h-1 w-24 bg-bic-red-dark rounded-full"></div>
      </div>
    </div>

   
    <div className="lg:col-span-5 flex justify-center relative">
      <div className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full bg-bic-red-dark/20 blur-xl opacity-50"></div>
      <img
        className="w-64 lg:w-80 relative z-10"
        src={Piggy}
        alt="senior family"
      />
    </div>
  </div>
</section>

<section className="py-20 px-6 lg:px-20 bg-white dark:bg-gray-900">
  <div className="max-w-screen-xl mx-auto space-y-12">

    {/* Section Title */}
    <div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-bic-navy dark:text-white">
        Open an Account
      </h2>
      <p className="text-lg text-bic-navy dark:text-gray-400 mt-2">
        Senior Saving Deposit
      </p>
    </div>

    {/* Key Numbers / Highlights */}
    <div className="grid gap-6 md:grid-cols-3">
      <div className="p-6 border-2 border-bic-navy rounded-lg text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-2">Minimum Balance</p>
        <p className="text-2xl font-bold text-bic-red-dark">9,000 Baht</p>
      </div>
      <div className="p-6 border-2 border-bic-navy rounded-lg text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-2">Maximum Balance</p>
        <p className="text-2xl font-bold text-bic-red-dark">1,000,000 Baht</p>
      </div>
      <div className="p-6 border-2 border-bic-navy rounded-lg text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-2">Age Coverage</p>
        <p className="text-2xl font-bold text-bic-red-dark">16 - 70 Years</p>
      </div>
    </div>

    {/* Details with icon bullets */}
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-bic-red-dark mb-2">Qualifications</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-bic-red-dark">✔</span>
            lorem
          </li>
          <li className="flex items-start gap-2">
            <span className="text-bic-red-dark">✔</span>
          lorem
          </li>
          <li className="flex items-start gap-2">
            <span className="text-bic-red-dark">✔</span>
           lorem
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-bic-red-dark mb-2">Required Documents</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-bic-red-dark">📄</span>
            Laos Individuals: National ID or Smart Card, plus supporting documents.
          </li>
         
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-bic-red-dark mb-2">Notes</h3>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>Hello World</li>
         
        </ul>
      </div>
    </div>


    <div className="mt-6 flex justify-center">
      <button className="px-8 py-3 bg-bic-navy text-white rounded-lg font-medium font-lao hover:bg-bic-red-dark transition-colors">
        Locate Us
      </button>
    </div>

  </div>
</section>






    </div>
  );
}

export default Senior;
