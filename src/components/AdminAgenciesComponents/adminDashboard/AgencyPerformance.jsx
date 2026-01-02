import { usersTable } from "../../../data/data";
import { useState } from "react";
import PerformanceModal from "./PerformanceModal";

export default function AgencyPerformance() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="hidden sm:flex items-center justify-between  mb-5 sm:px-5 px-3 pt-3">
          <h2 className="sm:text-xl text-sm font-semibold">
            Agencies Performance
          </h2>
        </div>

        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Agency ID</th>
              <th className="p-3">Profile</th>
              <th className="p-3">Host Name</th>
              <th className="p-3">Avg Diamond</th>
              <th className="p-3">Email</th>
              <th className="p-3">Number</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {usersTable.map((user, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 font-medium pl-5">{user.userId}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">
                  <span
                    className={`px-4 py-1 text-sm opacity-80 ${
                      user.type === "Normal"
                        ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                        : "bg-linear-to-r from-[#EB57FF] to-[#3325C9] text-[#FFFFFF] font-thin"
                    } text-[#005D23] rounded-full font-semibold`}
                  >
                    {user.type}
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={`px-4 py-1 text-sm ${user.levelBg} text-white rounded-full font-semibold`}
                  >
                    {user.level}
                  </span>
                </td>
                <td className="p-3">{user.diamonds}</td>
                <td className="p-3">{user.beans}</td>
                <td className="p-3">{user.location}</td>
                <td className="p-3">
                  <span
                    className={`px-4 py-1 text-xs ${
                      user.status === "active"
                        ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                        : "bg-[#FF929296] text-[#D21B20]"
                    } text-[#005D23] rounded-full font-semibold`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-3 ">
                  <button onClick={() => setIsOpen(true)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOpen && (
          <PerformanceModal open={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </div>
    </>
  );
}
