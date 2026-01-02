import { useState } from "react";
import { usersTable } from "../../../data/data";
import ModeratorModal from "./ModeratorModal";

export default function AdminModeratorTable() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* search area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-5">
        {/* Search Input */}
        <div className="flex flex-col gap-1">
          <label htmlFor="userId" className="text-[#383838]">
            User Id
          </label>
          <input
            type="text"
            className="border border-[#BBBBBB] outline-[#BBBBBB] px-4 py-1.5 rounded-md"
            placeholder="Search by ID or name"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-1 ">
          <label htmlFor="date" className="text-[#383838]">
            Date
          </label>
          <input
            type="text"
            className="border border-[#BBBBBB] outline-[#BBBBBB] px-4 py-1.5 rounded-md"
            placeholder="Search by ID or name"
          />
        </div>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-5 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">User ID</th>
              <th className="p-3">Profile</th>
              <th className="p-3">Host Name</th>
              <th className="p-3">Earning Balance</th>
              <th className="p-3">Support Balance</th>
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
                <td className="p-3">{user.diamonds}</td>
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
                <td className="p-3">
                  <button onClick={() => setIsOpen(true)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOpen && (
          <ModeratorModal open={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </div>
    </>
  );
}
