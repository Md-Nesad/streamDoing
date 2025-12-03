import { Ellipsis, Funnel } from "lucide-react";
import { hostAgencies } from "../../data/data";
import { useNavigate } from "react-router-dom";

export default function CoinsTable() {
  const navigate = useNavigate();
  return (
    <>
      {/* search area */}
      <div className="flex items-center justify-between mb-4 pt-7 gap-10">
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-[76%] px-4 py-1.5 rounded-md"
          placeholder="Search by Agency ID or name"
        />
        <div className="flex items-center sm:gap-3 gap-2">
          <button className="sm:px-5 px-2 py-2  rounded-md bg-[#FFFFFF] border border-[#CCCCCC] font-medium flex items-center gap-2 text-sm sm:text-md">
            <Funnel size={18} /> Filter
          </button>
          <button
            onClick={() => navigate("/dashboard/agencies/add-coin-agency")}
            className="sm:px-3 px-1 py-1.5 text-sm sm:text-[17px] bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium"
          >
            Add Agency
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Reference</th>
              <th className="p-3 hidden sm:table-cell">Agnacy ID</th>
              <th className="p-3 hidden lg:table-cell">Name</th>
              <th className="p-3 hidden lg:table-cell">Coin Sales</th>
              <th className="p-3 hidden xl:table-cell">Coin Buy</th>
              <th className="p-3 hidden xl:table-cell">Revenue</th>
              <th className="p-3 hidden 2xl:table-cell">Country</th>
              <th className="p-3 hidden 2xl:table-cell">Status</th>
              <th className="p-3 sm:pl-4 pl-15">Action</th>
            </tr>
          </thead>

          <tbody>
            {hostAgencies.map((host, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 font-medium pl-5">MST-042</td>
                <td className="p-3 hidden sm:table-cell">Coin-042</td>
                <td className="p-3 hidden lg:table-cell">{host.name}</td>
                <td className="p-3 hidden lg:table-cell">{host.balance}</td>
                <td className="p-3 hidden xl:table-cell">{host.diamonds}</td>
                <td className="p-3 hidden xl:table-cell">{host.revenue}</td>
                <td className="p-3 hidden 2xl:table-cell">{host.country}</td>
                <td className="p-3 hidden 2xl:table-cell">
                  <span
                    className={`px-4 py-1 text-xs ${
                      host.status === "active"
                        ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                        : "bg-[#FF929296] text-[#D21B20]"
                    } text-[#005D23] rounded-full font-semibold`}
                  >
                    {host.status}
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
    </>
  );
}
