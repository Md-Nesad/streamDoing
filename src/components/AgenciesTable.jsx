import { Ellipsis, Funnel } from "lucide-react";
import { tableData } from "../data/data";

export default function AgenciesTable() {
  return (
    <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
      <div className="flex items-center justify-between mb-4 sm:px-5 px-3">
        <h2 className="sm:text-xl text-sm font-semibold">Agencies Overview</h2>
        <div className="flex items-center sm:gap-3 gap-2">
          <button className="sm:px-4 px-1 py-2 text-sm sm:text-md bg-[#FFFFFF] rounded-md font-medium border border-[#CCCCCC]">
            Export Data
          </button>
          <button className="sm:px-5 px-2 py-2 bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium flex items-center gap-2 text-sm sm:text-md">
            <Funnel size={18} /> Filter
          </button>
        </div>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[#535353] text-md font-medium">
            <th className="p-3 pl-5">ID</th>
            <th className="p-3 hidden sm:table-cell">Name</th>
            <th className="p-3 hidden md:table-cell">Type</th>
            <th className="p-3 hidden lg:table-cell">Level</th>
            <th className="p-3 hidden xl:table-cell">Diamonds</th>
            <th className="p-3 hidden xl:table-cell">Beans</th>
            <th className="p-3 hidden 2xl:table-cell">Coin Sell</th>
            <th className="p-3 hidden 2xl:table-cell">Coin Buy</th>
            <th className="p-3 hidden 2xl:table-cell">Location</th>
            <th className="p-3 hidden 2xl:table-cell">Status</th>
            <th className="p-3 sm:pl-5 pl-20">Action</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
            >
              <td className="p-3 font-medium pl-5">{row.id}</td>
              <td className="p-3 hidden sm:table-cell">{row.name}</td>
              <td className="p-3 hidden md:table-cell">
                <span className="px-3 py-1 text-xs bg-[#B31d84] shadow-md shadow-[#545454] text-[#FFFFFF] rounded-full font-semibold">
                  {row.type}
                </span>
              </td>
              <td className="p-3 hidden lg:table-cell">
                {row.level && (
                  <span className="px-3 pb-1 pt-0.5 text-xs bg-linear-to-b from-[#5DB90A] to-[#175111] text-[#FFFFFF] rounded-lg font-semibold">
                    {row.level}
                  </span>
                )}
              </td>
              <td className="p-3 hidden xl:table-cell">{row.diamonds}</td>
              <td className="p-3 hidden xl:table-cell">{row.beans}</td>
              <td className="p-3 hidden 2xl:table-cell">{row.coinSell}</td>
              <td className="p-3 hidden 2xl:table-cell">{row.coinBuy}</td>
              <td className="p-3 hidden 2xl:table-cell">{row.location}</td>
              <td className="p-3 hidden 2xl:table-cell">
                <span className="px-4 py-1 text-xs bg-linear-to-r from-[#79D49B] to-[#25C962] text-[#005D23] rounded-full font-semibold">
                  {row.status}
                </span>
              </td>
              <td className="p-3 max-sm:pl-20 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                View
                <span>
                  <Ellipsis size={17} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
