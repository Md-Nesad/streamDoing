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
          <button className="sm:px-3 px-1 py-1.5 text-sm sm:text-[17px] bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium">
            Export Data
          </button>
          <button className="sm:px-5 px-2 py-2  rounded-md bg-[#FFFFFF] border border-[#CCCCCC] font-medium flex items-center gap-2 text-sm sm:text-md">
            <Funnel size={18} /> Filter
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse shrink">
          <thead>
            <tr className="text-[#535353] text-md max-md:text-xs font-medium">
              <th className="p-3 pl-5 max-xl:w-10">User ID</th>
              <th className="p-3 max-xl:w-10">Name</th>
              <th className="p-3">Level</th>
              <th className="p-3">Crown</th>
              <th className="p-3">Diamonds</th>
              <th className="p-3">Beans</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3 sm:pl-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md max-md:text-xs"
              >
                <td className="p-3 font-medium pl-5 max-xl:w-40">
                  {user.userId}
                </td>
                <td className="p-3 max-xl:w-40">{user.name}</td>
                <td className="p-3">
                  {user.level && (
                    <span
                      className={`px-3 pb-1 pt-0.5 text-xs ${user.bgColor} text-[#FFFFFF] rounded-lg font-semibold`}
                    >
                      {user.level}
                    </span>
                  )}
                </td>
                <td className="p-3">
                  {user.crown && (
                    <span
                      className={`px-3 pb-1 pt-0.5 text-xs ${user.crownBg} text-[#FFFFFF] rounded-lg font-semibold`}
                    >
                      {user.crown}
                    </span>
                  )}
                </td>
                <td className="p-3">{user.diamonds}</td>
                <td className="p-3">{user.beans}</td>
                <td className="p-3">{user.location}</td>
                <td className="p-3">
                  <span className="px-4 py-1 text-xs bg-linear-to-r from-[#79D49B] to-[#25C962] text-[#005D23] rounded-full font-semibold">
                    {user.status}
                  </span>
                </td>
                <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
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
