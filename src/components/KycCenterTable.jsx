import { CircleCheckBig, CircleX, Ellipsis, Eye, Funnel } from "lucide-react";
import { kycTable } from "../data/data";
import { useState } from "react";
import UserDetailsModal from "../modals/KycUserDetailsModal";

export default function KycCenterTable() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="mb-4 px-2 flex gap-10">
          <input
            type="text"
            className="border border-[#BBBBBB] outline-[#BBBBBB] w-full px-4 py-1.5 rounded-md"
            placeholder="Search withdrawals"
          />

          <button className="sm:px-5 px-2 py-2 bg-[#FFFFFF] rounded-md font-medium border border-[#CCCCCC] flex items-center gap-2 text-sm sm:text-md">
            <Funnel size={18} /> Filter
          </button>
        </div>

        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-6">User ID dasdf</th>
              <th className="p-3">User Name dfasdf</th>
              <th className="p-3">Agency ID</th>
              <th className="p-3">Agency Name</th>
              <th className="p-3">Categories</th>
              <th className="p-3">Approve in</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {kycTable.map((kyc, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 pl-6">{kyc.userId}</td>
                <td className="p-3 font-medium">{kyc.userName}</td>
                <td className="p-3">{kyc.agencyId}</td>
                <td className="p-3">{kyc.agencyName}</td>
                <td className="p-3">{kyc.categories}</td>
                <td className="p-3">{kyc.approveIn}</td>
                <td className="p-3">
                  <span
                    className={` py-1 rounded-full ${
                      kyc.status === "Pending"
                        ? "bg-[#95C3FF] text-[#1F80FF] px-4"
                        : kyc.status === "Approved"
                        ? "bg-[#79D49B] text-[#005D23] px-3"
                        : "bg-[#FF929296] text-[#D21B20] px-2"
                    }`}
                  >
                    {kyc.status}
                  </span>
                </td>
                <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer">
                  <span className="flex items-center gap-4">
                    <button onClick={() => setOpen(true)}>
                      <CircleCheckBig size={17} className="text-[#11B324]" />
                    </button>
                    <CircleX size={18} className="text-[#FF0037]" />
                    <Ellipsis size={17} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {open && (
          <UserDetailsModal open={open} onClose={() => setOpen(false)} />
        )}
      </div>
    </>
  );
}
