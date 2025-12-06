import { Ban, Ellipsis, Eye, Funnel, Mic, Video } from "lucide-react";
import { hostAgencies } from "../data/data";

export default function LiveStreamTable() {
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
              <th className="p-3">User ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Type</th>
              <th className="p-3">Level</th>
              <th className="p-3">Viewers</th>
              <th className="p-3">Duration</th>
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
                <td className="p-3">{host.hostId}</td>
                <td className="p-3">{host.name}</td>
                <td className="p-3">{host.balance}</td>
                <td className="p-3">{host.diamonds}</td>
                <td className="p-3">{host.revenue}</td>
                <td className="p-3">{host.country}</td>
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
                <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                  <span className="flex items-center gap-4">
                    <Video size={19} className="text-[#181717]" />
                    <Mic size={20} className="text-[#181717]" />
                    <Ban size={17} className="text-[#FF0037]" />
                    <button title="View">
                      <Eye size={19} onClick={() => setIsOpen(true)} />
                    </button>
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
