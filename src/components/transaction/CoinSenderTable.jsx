import { Ellipsis, Funnel } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { hostAgencies } from "../../data/data";

export default function CoinSenderTable() {
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
            onClick={() => navigate("/dashboard/agencies/add-master-agency")}
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
              <th className="p-3 hidden sm:table-cell">Transaction ID</th>
              <th className="p-3 hidden lg:table-cell">Sender Type</th>
              <th className="p-3 hidden lg:table-cell">Sender User ID</th>
              <th className="p-3 hidden xl:table-cell">Receiver User ID</th>
              <th className="p-3 hidden xl:table-cell">Receiver Type</th>
              <th className="p-3 hidden 2xl:table-cell">Coin Amount</th>
              <th className="p-3 hidden 2xl:table-cell">Sent Date/Time</th>
              <th className="p-3 sm:pl-4 pl-15">Status</th>
            </tr>
          </thead>

          <tbody>
            {hostAgencies.map((host, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 hidden sm:table-cell">TNX012KAD</td>
                <td className="p-3 hidden lg:table-cell">Office</td>
                <td className="p-3 hidden lg:table-cell">002000</td>
                <td className="p-3 hidden xl:table-cell">001000</td>
                <td className="p-3 hidden xl:table-cell">Master</td>
                <td className="p-3 hidden 2xl:table-cell">50K</td>
                <td className="p-3 hidden 2xl:table-cell">01-11-2025 21:55</td>
                <td className="p-3 max-sm:pl-20 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
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
