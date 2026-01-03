import { useState } from "react";
import { usersTable } from "../../../data/data";
import HostPerformanceModal from "./HostPerformanceModal";

export default function HostPerformanceList() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* query form */}
      <div className="w-full px-5 py-7 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06)] rounded-md mt-6">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:ml-10">
          {/* user ID */}
          <div className="flex flex-col gap-2 mb-3">
            <label className="text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="number"
              placeholder="10/03/2025"
              className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Number of Coins */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="number"
              placeholder="10/06/2025"
              className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-2 mt-7">
            {/* <label className="text-sm font-medium text-gray-700">
            Number of Coins
          </label> */}
            <button className="px-12 py-2 text-md btn_gradient">Apply</button>
          </div>
        </form>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="hidden sm:flex items-center justify-between  mb-5 sm:px-5 px-3 pt-3">
          <h2 className="sm:text-xl text-sm font-semibold">Host Performance</h2>
        </div>

        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Rank</th>
              <th className="p-3">Host Name</th>
              <th className="p-3">Level</th>
              <th className="p-3">Monthly Target</th>
              <th className="p-3">Diamonds Earned</th>
              <th className="p-3">Live Minutes</th>
              <th className="p-3">Target Progress</th>
              <th className="p-3">Estimated Salary</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {usersTable.map((user, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 font-medium pl-5">{index + 1}</td>
                <td className="p-3">Sarah Johnson</td>
                <td className="p-3">Lv8</td>
                <td className="p-3">5M</td>
                <td className="p-3">100M</td>
                <td className="p-3 text-[#30ACFF] font-semibold">172h</td>
                <td className="p-3 text-[#FF0AB1] font-semibold">98%</td>
                <td className="p-3">৳138K</td>
                <td className="p-3 ">
                  <button onClick={() => setIsOpen(true)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOpen && (
          <HostPerformanceModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
}
