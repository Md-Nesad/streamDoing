import { Ban, Eye, Mic, Video } from "lucide-react";
import { hostAgencies } from "../../data/data";
import { useState } from "react";
import ReportModal from "../../modals/ReportModal";

export default function AllReportsTable() {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      {/* search area */}
      <div className="mb-4 pt-6">
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full px-4 py-1.5 rounded-md"
          placeholder="Search by User ID or name"
        />
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3">Type</th>
              <th className="p-3">ID Reporter</th>
              <th className="p-3">Target</th>
              <th className="p-3">Level</th>
              <th className="p-3">Time</th>
              <th className="p-3">Type</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 sm:pl-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {hostAgencies.map((host, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3">
                  <div className="w-8 h-8 bg-black rounded-full"></div>
                </td>
                <td className="p-3">User123</td>
                <td className="p-3">Host Sultana</td>
                <td className="p-3">Lv1</td>
                <td className="p-3 text-[#FF00C8]">12:00</td>
                <td className="p-3">
                  <span className="bg-linear-to-r from-[#2FB6FF] rounded-full to-[#447FFF] py-1 px-3 opacity-70 shadow-md text-white">
                    Content
                  </span>
                </td>
                <td className="p-3">2024-10-28 14:30</td>
                <td className="p-3">Live</td>
                <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer">
                  <button title="View">
                    <Eye size={19} onClick={() => setIsOpen(true)} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {open && <ReportModal open={open} onClose={() => setIsOpen(false)} />}
      </div>
    </>
  );
}
