import { Ellipsis, Eye, Funnel } from "lucide-react";
import { users } from "../../data/data";

export default function HostTable() {
  return (
    <>
      {/* search area */}
      <div className="flex items-center justify-between mb-4 pt-7 gap-10">
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-[76%] px-4 py-1.5 rounded-md"
          placeholder="Search by ID or name"
        />
        <div className="flex items-center sm:gap-3 gap-2">
          <button className="sm:px-4 px-1 py-1 text-sm sm:text-lg bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium">
            Export Data
          </button>
          <button className="sm:px-5 px-2 py-2  rounded-md bg-[#FFFFFF] border border-[#CCCCCC] font-medium flex items-center gap-2 text-sm sm:text-md">
            <Funnel size={18} /> Filter
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">User ID</th>
              <th className="p-3 hidden sm:table-cell">Name</th>
              <th className="p-3 hidden lg:table-cell">Level</th>
              <th className="p-3 hidden lg:table-cell">Crown</th>
              <th className="p-3 hidden xl:table-cell">Diamonds</th>
              <th className="p-3 hidden xl:table-cell">Beans</th>
              <th className="p-3 hidden 2xl:table-cell">Location</th>
              <th className="p-3 hidden 2xl:table-cell">Status</th>
              <th className="p-3 sm:pl-4 pl-15">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 font-medium pl-5">{user.userId}</td>
                <td className="p-3 hidden sm:table-cell">{user.name}</td>
                <td className="p-3 hidden lg:table-cell">
                  {user.level && (
                    <span
                      className={`px-3 pb-1 pt-0.5 text-xs ${user.bgColor} text-[#FFFFFF] rounded-lg font-semibold`}
                    >
                      {user.level}
                    </span>
                  )}
                </td>
                <td className="p-3 hidden 2xl:table-cell">
                  {user.crown && (
                    <span
                      className={`px-3 pb-1 pt-0.5 text-xs ${user.crownBg} text-[#FFFFFF] rounded-lg font-semibold`}
                    >
                      {user.crown}
                    </span>
                  )}
                </td>
                <td className="p-3 hidden xl:table-cell">{user.diamonds}</td>
                <td className="p-3 hidden xl:table-cell">{user.beans}</td>
                <td className="p-3 hidden 2xl:table-cell">{user.location}</td>
                <td className="p-3 hidden 2xl:table-cell">
                  <span className="px-4 py-1 text-xs bg-linear-to-r from-[#79D49B] to-[#25C962] text-[#005D23] rounded-full font-semibold">
                    {user.status}
                  </span>
                </td>
                <td className="p-3 mt-1.5 max-sm:pl-20 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                  <Eye size={17} />
                  <span>
                    <Ellipsis size={17} />
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
