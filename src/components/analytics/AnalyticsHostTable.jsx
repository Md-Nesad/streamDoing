import { Ban, Eye, Funnel, Trash2 } from "lucide-react";
import { analyticsHost, usersTable } from "../../data/data";
import { useState } from "react";
import UserDetailsModal from "../../modals/UserDetailsModal";

export default function AnalyticsHostTable() {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      {/* search area */}
      <div className="flex items-center justify-between mb-4 pt-5 gap-10">
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-[76%] px-4 py-1.5 rounded-md"
          placeholder="Search by ID or name"
        />
        <div className="flex items-center sm:gap-3 gap-2">
          <button className="sm:px-5 px-2 py-2  rounded-md bg-[#FFFFFF] border border-[#CCCCCC] font-medium flex items-center gap-2 text-sm sm:text-md">
            <Funnel size={18} /> Filter
          </button>
          <button className="sm:px-3 px-1 py-1.5 text-sm sm:text-[17px] bg-[#FFFFFF] border border-[#CCCCCC] rounded-md font-medium">
            Export Data
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-5">Top Performing Hosts</h2>

        <div className="space-y-4">
          {analyticsHost.map((host, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#F1F3F6] rounded-xl px-5 py-4 border border-gray-200"
            >
              {/* Left: Image + Info */}
              <div className="flex items-center gap-4">
                <img
                  src={host.img}
                  alt={host.name}
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div
                  role="button"
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer"
                >
                  <h3 className="font-semibold text-gray-800">{host.name}</h3>
                  <p className="text-sm text-gray-600">ID : {host.id}</p>
                  <p className="text-sm text-gray-500">{host.agency}</p>
                </div>
              </div>

              {/* Right: Stats */}
              <div className="flex items-start gap-10 font-medium text-[#181717]">
                <div
                  className={`text-white text-xs px-3 py-1 rounded-full ${host.badge.color}`}
                >
                  {host.badge.level}
                </div>

                <div className={`${host.country === "Pakistan" ? "pl-4" : ""}`}>
                  <p className="text-sm text-gray-600 mt-1 text-start">
                    {host.country}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-500">Streaming</p>
                  <p className="text-blue-600 font-semibold">{host.hours}</p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-500">Diamonds</p>
                  <p className="text-pink-600 font-semibold">{host.diamonds}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {open && (
          <UserDetailsModal open={open} onClose={() => setIsOpen(false)} />
        )}
      </div>
    </>
  );
}
