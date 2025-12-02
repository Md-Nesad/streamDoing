import { CircleCheckBig, CircleX, Eye, RotateCw } from "lucide-react";
import { coinAgenciesTable } from "../../data/data";

export default function RateTransactionTable() {
  return (
    <>
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-6 mb-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Coin Agency ID</th>
              <th className="p-3 hidden sm:table-cell">Name</th>
              <th className="p-3 hidden lg:table-cell">Coin</th>
              <th className="p-3 hidden xl:table-cell">Value</th>
              <th className="p-3 hidden xl:table-cell">Date</th>
              <th className="p-3 hidden 2xl:table-cell">Status</th>
              <th className="p-3 sm:pl-4 pl-15">Action</th>
            </tr>
          </thead>

          <tbody>
            {coinAgenciesTable.map((item, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 font-medium pl-5">{item.portalId}</td>
                <td className="p-3 hidden sm:table-cell">{item.name}</td>
                <td className="p-3 hidden 2xl:table-cell">{item.coin}</td>
                <td className="p-3 hidden xl:table-cell text-[#00D519]">
                  {item.value}
                </td>
                <td className="p-3 hidden xl:table-cell">{item.date}</td>
                <td className="p-3 hidden 2xl:table-cell">
                  <span
                    className={`px-4 py-1 text-xs ${
                      item.status === "Completed"
                        ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                        : "bg-[#FF929296] text-[#D21B20]"
                    } text-[#005D23] rounded-full font-semibold`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3 mt-1.5 max-sm:pl-20 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                  {item.status === "Completed" ? (
                    <span className="flex items-center gap-3">
                      <Eye size={19} />
                      <RotateCw size={17} className="text-[#F5AD7C]" />
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      <Eye size={19} />
                      <CircleCheckBig size={17} className="text-[#11B324]" />
                      <CircleX size={18} className="text-[#FF0037]" />
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
