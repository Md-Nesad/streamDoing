import { Ellipsis, Funnel } from "lucide-react";
import { kycTable } from "../../../data/data";

export default function TicketsListTable() {
  return (
    <>
      <div className="mb-4 flex gap-10">
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full px-4 py-1.5 rounded-md"
          placeholder="Search by Id or name"
        />

        <button className="sm:px-5 px-2 py-2 bg-[#FFFFFF] rounded-md font-medium border border-[#CCCCCC] flex items-center gap-2 text-sm sm:text-md">
          <Funnel size={18} /> Filter
        </button>
      </div>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-5 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-6">Ticket ID</th>
              <th className="p-3">User</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Category</th>
              <th className="p-3">Assigned To</th>
              <th className="p-3">Status</th>
              <th className="p-3">Created</th>
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
                <td className="p-3">Cannot login to account</td>
                <td className="p-3">Account</td>
                <td className="p-3">Sarah M.</td>
                <td className="p-3">
                  <span className="px-4 py-1 text-xs bg-linear-to-r from-[#79D49B] to-[#25C962] text-[#005D23] rounded-full font-semibold">
                    active
                  </span>
                </td>
                <td className="p-3">2024-01-15</td>
                <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer">
                  <button>
                    <Ellipsis size={17} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
