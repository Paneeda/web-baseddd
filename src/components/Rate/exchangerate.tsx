import { useState } from "react";

function ExchangeRate() {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("LAK");
  const [result, setResult] = useState<number | null>(null);

  
  const rates: Record<string, Record<string, number>> = {
    USD: { EUR: 0.85, CNY: 7.12, THB: 31.90, LAK: 21682.61 },
    EUR: { USD: 1.17, CNY: 8.36, THB: 37.45, LAK: 25443.00 },
    CNY: { USD: 0.14, EUR: 0.12, THB: 4.48, LAK: 3043.60 },
    THB: { USD: 0.031, EUR: 0.027, CNY: 0.22, LAK: 679.40},
    LAK: { USD: 0.000046, EUR: 0.000039, CNY: 0.00033, THB: 0.0015 },
  };

  const currencyOptions = ["USD", "EUR", "CNY", "THB", "LAK"];

  // Convert amount
  const convert = (amount: number, from: string, to: string) => {
    if (from === to) return amount;
    return rates[from][to] ? amount * rates[from][to] : 0;
  };

  const handleAmountChange = (value: number) => {
    setAmount(value);
    setResult(convert(value, fromCurrency, toCurrency));
  };

  const handleFromChange = (value: string) => {
    setFromCurrency(value);
    setResult(convert(amount, value, toCurrency));
  };

  const handleToChange = (value: string) => {
    setToCurrency(value);
    setResult(convert(amount, fromCurrency, value));
  };

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setResult(convert(amount, toCurrency, fromCurrency));
  };

  return (
    <div className="w-full justify-center">
    
      <div className="p-5">
        <table className="w-full">
          <tbody>
            <tr className="text-bic-navy border-b border-gray-300">
              <td className="px-6 py-4 text-left font-medium">Currency</td>
              <td className="px-6 py-4 text-left font-medium">Code</td>
              <td className="px-6 py-4 text-left font-medium">Buy</td>
              <td className="px-6 py-4 text-left font-medium">Sell</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-6 py-4">CNY</td>
              <td className="px-6 py-4">CNY</td>
              <td className="px-6 py-4 text-bic-red">3,021</td>
              <td className="px-6 py-4">3,056</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-6 py-4">USD</td>
              <td className="px-6 py-4">USD</td>
              <td className="px-6 py-4 text-bic-red">3,021</td>
              <td className="px-6 py-4">3,056</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-6 py-4">EUR</td>
              <td className="px-6 py-4">EUR</td>
              <td className="px-6 py-4 text-bic-red">3,021</td>
              <td className="px-6 py-4">3,056</td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="px-6 py-4">THB</td>
              <td className="px-6 py-4">THB</td>
              <td className="px-6 py-4 text-bic-red">3,021</td>
              <td className="px-6 py-4">3,056</td>
            </tr>
            <tr>
              <td className="px-6 py-4">LAK</td>
              <td className="px-6 py-4">LAK</td>
              <td className="px-6 py-4 text-bic-red">19,000</td>
              <td className="px-6 py-4">19,200</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Converter */}
      <div className="w-full max-w-xl mx-auto m-4">
        <p className="text-bic-navy text-xs font-bold text-center border-b p-3">
          Currency Converter
        </p>


        

        <div className="flex flex-col items-center">
          {/* From */}
          <div className="w-full max-w-xs mt-4">
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => handleAmountChange(Number(e.target.value))}
                className="w-full h-10 pl-3 border border-gray-300 rounded shadow-sm"
                placeholder="Enter amount"
              />
              <select
                value={fromCurrency}
                onChange={(e) => handleFromChange(e.target.value)}
                className="absolute  right-2 p-2   rounded "
              >
                {currencyOptions.map((cur) => (
                  <option key={cur} value={cur}>
                    {cur}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Swap */}
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={handleSwap}
              className="p-2 rounded-full border border-slate-300  bg-white hover:bg-slate-100 shadow-sm"
            >
               <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-5 h-5 text-slate-600"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
            </button>
          </div>

        

          {/* To */}
          <div className="w-full max-w-xs mt-4">
            <div className="relative">
              <input
                type="text"
                readOnly
                value={result !== null ? result.toFixed(2) : ""}
                className="w-full h-10 pl-3 border border-gray-300 rounded shadow-sm"
                placeholder=""
              />
              <select
                value={toCurrency}
                onChange={(e) => handleToChange(e.target.value)}
                className="absolute top-1 right-2 rounded p-1"
              >
                {currencyOptions.map((cur) => (
                  <option key={cur} value={cur}>
                    {cur}
                  </option>
                ))}
              </select>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default ExchangeRate;
