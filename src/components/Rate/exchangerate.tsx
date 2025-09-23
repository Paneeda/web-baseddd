import { useEffect, useState } from "react";
import { t } from "i18next";
import { fetchExchangeRate } from "../../services/fetchRates";
import { formatCurrency, formatFlag, formatThousand } from "../../utils/formatter";

function ExchangeRate() {

  interface ExchangeRateObj {
    date: string;
    last_update: string;
    rates: {
      fx_type: string;
      sbprice: number;
      ssprice: number;
    }[];
  }

  const [exchangeRate, setExchangeRate] = useState<ExchangeRateObj>({
    date: "",
    last_update: "",
    rates: []
  });

  // Converter states
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("LAK"); // fixed LAK per UI
  const [result, setResult] = useState<number | null>(null);

  const GetExchangeRate = async () => {
    const rawData = await fetchExchangeRate();
    
    if (rawData?.data?.rates) {
      const ratesWithDate = rawData.data.rates.map((rate: any) => ({
        ...rate,
      }));
      setExchangeRate({
        date: rawData.data.date,
        last_update: rawData.data.last_updated,
        rates: ratesWithDate
      });
    }
  }

  useEffect(() => {
    GetExchangeRate();
  }, []);

  // When rates fetched, ensure defaults exist and compute initial conversion
  useEffect(() => {
    if (!exchangeRate.rates || exchangeRate.rates.length === 0) return;

    // If current fromCurrency not in the list, default to first available
    const availableCodes = exchangeRate.rates.map((r) => formatCurrency(r.fx_type));
    const nextFrom = availableCodes.includes(fromCurrency)
      ? fromCurrency
      : availableCodes[0];
    if (nextFrom !== fromCurrency) setFromCurrency(nextFrom);

    computeConversion(amount, nextFrom);
  }, [exchangeRate.rates]);

  const computeConversion = (amt: number, from: string) => {
    const rate = exchangeRate.rates.find(
      (r) => formatCurrency(r.fx_type) === from
    );
    if (!rate) {
      setResult(null);
      return;
    }
    const multiplier = Number(rate.sbprice) || 0;
    setResult(amt * multiplier);
  };

  const handleAmountChange = (val: number) => {
    setAmount(val);
    computeConversion(val, fromCurrency);
  };

  const handleFromChange = (val: string) => {
    setFromCurrency(val);
    computeConversion(amount, val);
  };

  const handleToChange = (_val: string) => {
    // To currency is fixed to LAK; keep for API symmetry
    setToCurrency("LAK");
  };

  return (
    <div className="">

      <div className=" p-1 justify-center ">
        <table className="w-full">
          <tbody>
            <tr className="text-bic-navy border-b border-gray-300">
              {/* <td className="px-6 py-4 text-left font-medium">{t("Country")}</td> */}
              <td className=" py-4   font-medium">{t("Currency")}</td>
              <td className=" py-4 font-medium">{t("Buy")}</td>
              <td className=" py-4  font-medium">{t("Sell")}</td>
            </tr>
            {exchangeRate.rates.map((rate) => (
              <tr key={rate.fx_type} className="border-b border-gray-300  hover:bg-gray-100">
                {/* <td className="px-6 py-4 text-left">{formatFlag(rate.fx_type)}</td> */}
                <td className="flex  items-center">
                  <span className=" p-1 lg:w-10 ">{formatFlag(rate.fx_type)}</span>
                  <span className="px-2">{formatCurrency(rate.fx_type)}</span>
                </td>
                <td className="px-6 py-4 text-bic-navy">{formatThousand(rate.sbprice)}</td>
                <td className="px-6 py-4  text-bic-red">{formatThousand(rate.ssprice)}</td>
              </tr>
            ))}
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
                className="absolute  right-2 p-2   "
              >
                {exchangeRate.rates.map((cur) => (
                  <option key={cur.fx_type} value={formatCurrency(cur.fx_type)}>
                    {formatCurrency(cur.fx_type)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Rate display for selected ccy */}

          <label htmlFor="rate-display" className="block text-sm font-medium text-gray-700">
            {t("Exchange Rate")}
          </label>

          {/* To */}
          <div className="w-full max-w-xs mt-4">
            <div className="relative">
              <input
                type="text"
                readOnly
                value={result !== null ? `${formatThousand(result.toFixed(2))} LAK` : ""}
                className="w-full h-10 pl-3 border border-gray-300 rounded shadow-sm"
                placeholder=""
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default ExchangeRate;
