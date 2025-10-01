import React, { useState } from "react";

interface ATM {
  id: number;
  name: string;
  location: string;
  mapUrl: string;
}

const atmData: ATM[] = [
  { id: 1, name: "ATMA9011", location: "Hatsady ATM Room", mapUrl: "https://maps.google.com/?q=Hatsady ATM Room" },
  { id: 2, name: "ATMA9012", location: "Pakse ATM Room", mapUrl: "https://maps.google.com/?q=Pakse ATM Room" },
  { id: 3, name: "ATMA9013", location: "ITECC Service Unit ATM Room", mapUrl: "https://maps.google.com/?q=ITECC Service Unit ATM Room" },
  { id: 4, name: "ATMA9014", location: "Hatsady ATM Room", mapUrl: "https://maps.google.com/?q=Hatsady ATM Room" },
  { id: 5, name: "ATMA9015", location: "PTT Naxay", mapUrl: "https://maps.google.com/?q=PTT Naxay" },
  { id: 6, name: "ATMA9016", location: "Savannakhet ATM Room", mapUrl: "https://maps.google.com/?q=Savannakhet ATM Room" },
  { id: 7, name: "ATMA9017", location: "Savannakhet ATM Room", mapUrl: "https://maps.google.com/?q=Savannakhet ATM Room" },
  { id: 8, name: "ATMA9018", location: "EDL ATM Room", mapUrl: "https://maps.google.com/?q=EDL ATM Room" },
  { id: 9, name: "ATMA9019", location: "LuangPrabang ATM Room", mapUrl: "https://maps.google.com/?q=LuangPrabang ATM Room" },
  { id: 10, name: "ATMA9020", location: "BIC Bank HQ ATM Room", mapUrl: "https://maps.google.com/?q=BIC Bank HQ ATM Room" },
  { id: 11, name: "ATMA9021", location: "BIC Bank HQ ATM Room", mapUrl: "https://maps.google.com/?q=BIC Bank HQ ATM Room" },
];

const Atm: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredATMs = atmData.filter(
    (atm) =>
      atm.name.toLowerCase().includes(search.toLowerCase()) ||
      atm.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pt-20 px-4 flex flex-col items-center">
   
      <input
        type="text"
        placeholder="Search ATMs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200"
      />

      <div className="w-full max-w-4xl">
     
        <div className="hidden md:block">
          <table className="w-full bg-white text-center shadow-md rounded-lg border border-gray-200 overflow-hidden">
            <thead>
              <tr className="border-b h-12 bg-bic-navy">
                <th className="text-white font-semibold text-sm w-6 p-3">No</th>
                <th className="text-white font-semibold text-sm w-24">ATM Name</th>
                <th className="text-white font-semibold text-sm">ATM Location</th>
                <th className="text-white font-semibold text-sm w-24">Map</th>
              </tr>
            </thead>
            <tbody>
              {filteredATMs.map((atm) => (
                <tr key={atm.id} className="border-b text-sm hover:bg-gray-50">
                  <td className="p-3">{atm.id}</td>
                  <td>{atm.name}</td>
                  <td className="text-left px-2">{atm.location}</td>
                  <td>
                    <a
                      href={atm.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:underline"
                    >
                      Map
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
              key={atm.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <p className="font-semibold text-gray-700">{atm.name}</p>
              <p className="text-sm text-gray-500">{atm.location}</p>
              <a
                href={atm.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-500 text-sm font-medium hover:underline"
              >
                View on Map
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Atm;
