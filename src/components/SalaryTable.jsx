import { Ban, Eye, Funnel, Trash2 } from "lucide-react";
import { usersTable } from "../data/data";
import { useState } from "react";
import SalaryModal from "../modals/SalaryModal";

export default function SalaryTable() {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="flex items-center justify-between mb-4 px-3 sm:px-5">
          <h2 className="text-xl font-semibold">Salary Targets</h2>
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-1.5 text-sm sm:text-[17px] bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium"
          >
            Add Target
          </button>
        </div>
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Target</th>
              <th className="p-3">Diamond Share</th>
              <th className="p-3">Basic Salary</th>
              <th className="p-3">Total Salary</th>
              <th className="p-3">Agency Share</th>
            </tr>
          </thead>

          <tbody>
            {usersTable.map((user, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 font-medium pl-5">200000</td>
                <td className="p-3">$14</td>
                <td className="p-3">$50</td>
                <td className="p-3">$15</td>
                <td className="p-3">$5</td>
              </tr>
            ))}
          </tbody>
        </table>
        {open && <SalaryModal onClose={() => setIsOpen(false)} />}
      </div>
    </>
  );
}
