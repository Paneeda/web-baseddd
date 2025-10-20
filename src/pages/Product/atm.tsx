import React, { useState, useEffect } from "react";
import { fetchATMLocation } from "../../services/fetchcontent";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
interface AtmPost {
  location_id: string;
  location_name: {
    en: string;
    lo: string;
    zh: string;
  };
  location_address: {
    en: string;
    lo: string;
    zh: string;
  };
  group_id: string;
  phone: {
    tel1: string;
    tel2: string;
  }[];
  email: {
    email1: string;
    email2: string;
  }[];
  latitude: string;
  longitude: string;
  operating_hours: string;
  created_at: string;
  updated_at: string;
}

const Atm: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [atmLocation, setAtmLocation] = useState<AtmPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getAtmLocations = async () => {
      setLoading(true);
      try {
        const rawData = await fetchATMLocation(i18n.language);
        const list = rawData?.data?.locations || [];

        const data: AtmPost[] = list.map((atmLocation: any) => ({
          location_id: atmLocation.location_id,
          location_name: atmLocation.location_name,
          location_address: atmLocation.location_address,
          group_id: atmLocation.group_id,
          phone: atmLocation.phone,
          email: atmLocation.email,
          latitude: atmLocation.latitude,
          longitude: atmLocation.longitude,
          operating_hours: atmLocation.operating_hours,
          created_at: atmLocation.created_at,
          updated_at: atmLocation.updated_at,
        }));

        setAtmLocation(data);
      } catch (error) {
        console.error("Error fetching ATM locations:", error);
      } finally {
        setLoading(false);
      }
    };

    getAtmLocations();
  }, [i18n.language]);

  // filtering based on location_name and location_address
  const filteredATMs = atmLocation.filter((atm) => {
  const searchLower = search.toLowerCase();

  const nameMatches = Object.values(atm.location_name || {}).some((name) =>
    name.toLowerCase().includes(searchLower)
  );

  const addressMatches = Object.values(atm.location_address || {}).some(
    (addr) => addr.toLowerCase().includes(searchLower)
  );

  return nameMatches || addressMatches;
});


  return (
    <div className="pt-20 px-4 flex flex-col items-center">
      <input
        type="text"
        placeholder={t("Search ATMs...")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200"
      />

      {loading ? (
        <p className="text-gray-500">{t("Loading...")}</p>
      ) : filteredATMs.length === 0 ? (
        <p className="text-gray-500">{t("No ATMs found.")}</p>
      ) : (
        <div className="w-full max-w-4xl">

          <div className="hidden md:block">
            <table className="w-full bg-white text-center shadow-md rounded-lg border border-gray-200 overflow-hidden">
              <thead>
                <tr className="border-b h-12 bg-bic-navy">
                  <th className="text-white font-semibold text-sm w-6 p-3">No</th>
                  <th className="text-white font-semibold text-sm w-24">
                    {t("ATMName")}
                  </th>
                  <th className="text-white font-semibold text-sm">
                    {t("ATMLocation")}
                  </th>
                  <th className="text-white font-semibold text-sm w-24">{t("Map")}</th>
                </tr>
              </thead>
              <tbody>
                {filteredATMs.map((atm, index) => (
                  <tr key={atm.location_id} className="border-b text-sm hover:bg-gray-50">
                    <td className="p-3">{index + 1}</td>
                    <td>{atm.location_address.en}</td>
                    <td className="text-left px-2">{atm.location_name.en}</td>
                    <td>
                      <a
                        href={`https://www.google.com/maps?q=${atm.latitude},${atm.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:underline"
                      >
                        {t("Map")}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <div className="block md:hidden space-y-4">
            {filteredATMs.map((atm) => (
              <div
                key={atm.location_id}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
              <p className="font-semibold text-gray-700">{atm.location_name.en}  </p>
                <p className="text-sm text-gray-500">{atm.location_address.en}</p>
                <a
                  href={`https://www.google.com/maps?q=${atm.latitude},${atm.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-blue-500 text-sm font-medium hover:underline"
                >
                  {t("View on Map")}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Atm;
