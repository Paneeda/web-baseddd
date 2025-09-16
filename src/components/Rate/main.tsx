import ExchangeRate from "./exchangerate"


function Rates() {





  return (

    <div className=" rounded-t-lg ">

      <div>
        <h3 className="p-2 text-white rounded-t-lg text-xl font-semibold bg-bic-navy  "> Bank Rates</h3>
      </div>

      <div>
        <div className="p-3 flex justify-center  w-full  gap-15 border-b">
          <div className="relative">
            <a href="/exchangerate" className="px-3 py-3 rounded-md text-sm leading-5 font-medium text-bic-navy-dark hover:text-bic-navy-light ">Exchange Rate </a>
          </div>
          <div className="relative">
            <a href="/exchangerate" className="px-3 py-3 rounded-md text-sm leading-5 font-medium text-bic-navy-dark hover:text-bic-navy-light">Interest Rate </a>
          </div>
        </div>

        <ExchangeRate />

      </div>







    </div>

  )
}

export default Rates