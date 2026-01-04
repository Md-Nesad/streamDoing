import { Funnel, SquarePen, Trash2 } from "lucide-react";
import { kycTable } from "../../../data/data";
import { useState } from "react";
import AddFAQsModal from "./AddFAQsModal";

export default function FAQsList() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4">
        {/* Search Input */}
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[75%] px-4 py-1.5 rounded-md"
          placeholder="Search by ID or name"
        />

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
            <Funnel size={18} /> Filter
          </button>
          <button
            onClick={() => setOpen(true)}
            className="px-3 sm:px-6 py-1.5 text-sm sm:text-base bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium w-full sm:w-auto text-nowrap"
          >
            + Add FAQ
          </button>
        </div>
      </div>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-5 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-6">FAQ ID</th>
              <th className="p-3">Question</th>
              <th className="p-3">Category</th>
              <th className="p-3">Evidence</th>
              <th className="p-3">Status</th>
              <th className="p-3">Last Updated</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {kycTable.map((kyc, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 pl-6 font-medium">TKT-042</td>
                <td className="p-3 ">StartHost Agency</td>
                <td className="p-3">
                  <span className="px-3 py-1.5 text-sm bg-[#ACACAC] text-[#ffffff] rounded-full font-medium">
                    account
                  </span>
                </td>
                <td className="p-3">Account</td>
                <td className="p-3">
                  <span className="px-4 py-1 text-xs bg-linear-to-r from-[#79D49B] to-[#25C962] text-[#005D23] rounded-full font-semibold">
                    active
                  </span>
                </td>
                <td className="p-3">2024-01-15</td>
                <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer flex gap-4 items-center">
                  <button>
                    <Trash2 size={17} />
                  </button>

                  <button>
                    <SquarePen className="text-[#FF0037]" size={17} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {open && <AddFAQsModal open={open} onClose={() => setOpen(false)} />}
      </div>
    </>
  );
}
