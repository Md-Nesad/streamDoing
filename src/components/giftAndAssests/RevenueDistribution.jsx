import React from "react";

const data = [
  {
    title: "Rose",
    total: "154,200 coins",
    host: "92,520",
    agency: "23,130",
    platform: "38,550",
  },
  {
    title: "Diamond",
    total: "1,223,000 coins",
    host: "192,520",
    agency: "23,130",
    platform: "38,550",
  },
  {
    title: "Heart",
    total: "223,000 coins",
    host: "232,520",
    agency: "23,130",
    platform: "38,550",
  },
  {
    title: "Crown",
    total: "154,200 coins",
    host: "24,720",
    agency: "23,130",
    platform: "38,550",
  },
];

export default function RevenueDistribution() {
  return (
    <div className="w-full mx-auto bg-white rounded-xl py-6 px-5 mt-5 shadow-sm font-inter mb-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Revenue Distribution
      </h2>

      {data.map((item, index) => (
        <div key={index} className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-medium text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.total}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-sm:mb-8">
            {/* Host */}
            <div className="bg-[#E7F5EC] px-4 py-2 rounded-lg border border-[#BDE4CB]">
              <p className="text-sm text-gray-500">Host (60%)</p>
              <p className="text-lg font-semibold text-green-600">
                {item.host}
              </p>
            </div>

            {/* Agency */}
            <div className="bg-[#EBF2FE] px-4 py-2 rounded-lg border border-[#C8DCFC]">
              <p className="text-sm text-gray-500">Agency (15%)</p>
              <p className="text-lg font-semibold text-blue-600">
                {item.agency}
              </p>
            </div>

            {/* Platform */}
            <div className="bg-[#F1EBFD] px-4 py-2 rounded-lg border border-[#D9C8FA]">
              <p className="text-sm text-gray-500">Platform (25%)</p>
              <p className="text-lg font-semibold text-purple-600">
                {item.platform}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
