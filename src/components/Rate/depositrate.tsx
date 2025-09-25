import { fetchInterestRate } from "../../services/fetchRates";
import { useEffect, useState } from "react";



function DepositRate() {

  interface InterestRateObj {
    interest_type: string;
    lak_ccy: number;
    thb_ccy: number;
    usd_ccy: number;
  }



  const [InterestRates, setInterestRates] = useState<InterestRateObj[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const loadRates = async () => {
      try {
        const data = await fetchInterestRate();
        setInterestRates(data.data);
      } catch {
        setError("Failed to fetch deposit rates");
      } finally {
        setLoading(false);
      }
    };

    loadRates();
  }, []);

  if (loading) return <p>Loading deposit rates...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;


  return (

  <div className="">
      <table className="w-full ">
        <tbody>
          <tr className="text-bic-navy border-b border-gray-300 uppercase">
            <td className="text-xs text-left font-medium">Account Type</td>
            <td className="text-xs text-center font-medium">LAK</td>
            <td className="text-xs text-center font-medium">USD</td>
            <td className="text-xs text-center font-medium">THB</td>
          </tr>

          {InterestRates.map((rate, idx) => (
            <tr key={idx} className="border-b border-gray-300">
              <td className="text-xs text-left font-medium px-2 py-4">
                {rate.interest_type}
              </td>
              <td className="text-xs text-center lg:px-2 px-6 py-4 font-medium">
                {rate.lak_ccy}%
              </td>
              <td className="text-xs text-center lg:px-2  px-6 py-4 font-medium">
                {rate.usd_ccy}%
              </td>
              <td className="text-xs text-center lg:px-2 px-6 py-4 font-medium">
                {rate.thb_ccy}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DepositRate