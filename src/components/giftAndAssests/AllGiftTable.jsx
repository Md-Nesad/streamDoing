import { ChevronDown, Ellipsis, Funnel } from "lucide-react";
import { hostAgencies } from "../../data/data";
import { useState } from "react";
import AddGiftModal from "../../modals/AddGiftModal";

export default function AllGiftTable() {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      {/* search area */}
      <div className="flex items-center justify-between mb-4 gap-10">
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-[76%] px-4 py-1.5 rounded-md"
          placeholder="Search by Agency ID or name"
        />
        <div className="flex items-center sm:gap-3 gap-2">
          <button className="sm:px-3 px-2 py-2  rounded-md bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white font-medium flex items-center gap-2 text-sm sm:text-md">
            <ChevronDown /> Assests
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="sm:px-4 px-1 py-1.5 text-sm sm:text-[17px] bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium"
          >
            + Add Gift
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price (Coins)</th>
              <th className="p-3">Total Uses</th>
              <th className="p-3">Revenue</th>
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
                <td className="p-3 font-medium pl-5">{host.reference}</td>
                <td className="p-3">{host.hostId}</td>
                <td className="p-3">{host.name}</td>
                <td className="p-3">{host.balance}</td>
                <td className="p-3">{host.revenue}</td>
                <td className="p-3">
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
                <td className="p-3 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                  <button className="font-semibold">Edit</button>
                  <button className="font-semibold bg-[#FFE9E9] text-[#CF0D13] py-1 px-3 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {open && <AddGiftModal open={open} onClose={() => setIsOpen(false)} />}
      </div>
    </>
  );
}
