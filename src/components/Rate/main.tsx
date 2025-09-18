
import { useState } from "react";
import ExchangeRate from "./exchangerate";
import DepositRate from "./depositrate";


function Rates() {
  const [activeTab, setActiveTab] = useState<"exchange" | "interest">("exchange");

  return (
    <div className="rounded-t-lg">
      <div>
        <h3 className="p-2 text-white rounded-t-lg text-xl  font-semibold bg-bic-navy">
          Bank Rates
        </h3>
      </div>

      {/* Tabs */}
      <div className="p-3 flex justify-center w-full gap-6 ">
        <button
          onClick={() => setActiveTab("exchange")}
          className={`px-3 py-2 text-sm font-medium  ${
            activeTab === "exchange"
              ? "text-bic-navy-light border-b-2 border-bic-navy"
              : "text-bic-navy-dark hover:text-bic-navy-light"
          }`}
        >
          Exchange Rate
        </button>

        <button
          onClick={() => setActiveTab("interest")}
          className={`px-3 py-2  text-sm font-medium ${
            activeTab === "interest"
              ? "text-bic-navy-light border-b-2 border-bic-navy"
              : "text-bic-navy-dark hover:text-bic-navy-light"
          }`}
        >
          Interest Rate
        </button>
      </div>

      <div className="p-4">
        {activeTab === "exchange" && <ExchangeRate />}
        {activeTab === "interest" && (
          <div>
            <DepositRate/>
        
          </div>
        )}
      </div>
    </div>
  );
}

export default Rates;









  