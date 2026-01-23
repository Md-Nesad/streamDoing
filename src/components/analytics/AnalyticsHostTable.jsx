import { Funnel } from "lucide-react";
import { useState } from "react";
import UserDetailsModal from "../../modals/UserDetailsModal";
import { useStream } from "../../context/streamContext";
import { useExportDownload } from "../../hooks/useExportDownload";
import { BASE_URL } from "../../utility/utility";

export default function AnalyticsHostTable({ data }) {
  const topHosts = data?.data?.data;
  const [open, setIsOpen] = useState(false);
  const { countriesName } = useStream();
  const { loading, download } = useExportDownload();

  const handleExport = () => {
    download(
      `${BASE_URL}/admin/analytics/top-performing-hosts?limit=30&page=1&isExport=true`,
      "topHosts.csv",
    );
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 mt-5">
        {/* Search Input */}
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[75%] px-4 py-1.5 rounded-md"
          placeholder="Search by host ID or name"
        />

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
            <Funnel size={18} /> Filter
          </button>
          <button
            onClick={handleExport}
            className="px-3 sm:px-6 py-1.5 text-sm sm:text-base btn_gradient rounded-md font-medium w-full sm:w-auto text-nowrap"
          >
            {loading ? "Exporting..." : "Export Data"}
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="bg-white p-3 sm:p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-200">
        <h2 className="text-xl font-semibold mb-5">Top Performing Hosts</h2>

        <div className="space-y-4">
          {topHosts?.length > 0 ? (
            topHosts?.map((host, index) => (
              <div
                key={index}
                className="flex flex-col max-sm:gap-5 sm:flex-row sm:items-center sm:justify-between bg-[#F1F3F6] rounded-xl px-3 sm:px-5 py-4 border border-gray-200"
              >
                {/* Left: Image + Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={host.profilePic}
                    alt={host.name}
                    className="w-14 h-14 rounded-full object-cover border"
                    loading="lazy"
                  />
                  <div
                    role="button"
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer"
                  >
                    <h3 className="font-semibold text-gray-800">{host.name}</h3>
                    <p className="text-sm text-gray-600">
                      ID : {host.displayId}
                    </p>
                    <p className="text-sm text-gray-500">{host?.agency}</p>
                  </div>
                </div>

                {/* Right: Stats */}
                <div className="flex items-start gap-3 sm:gap-10 font-medium text-[#181717]">
                  <div
                    className={`text-white text-xs px-3 py-1 sm:mt-1 rounded-full ${host?.badge?.color}`}
                  >
                    {host?.level}
                  </div>

                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 text-start">
                      {host?.country?.name}
                    </p>
                  </div>

                  <div className="text-right mt-1">
                    <p className="text-xs sm:text-sm text-gray-500">
                      Streaming
                    </p>
                    <p className="text-blue-600 max-sm:text-xs max-sm:text-left font-semibold">
                      {host.streamHour || "0"}
                    </p>
                  </div>

                  <div className="text-right mt-1">
                    <p className="text-xs sm:text-sm text-gray-500">Diamonds</p>
                    <p className="text-pink-600 max-sm:text-xs max-sm:text-left font-semibold">
                      {host.diamonds}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No hosts found</p>
          )}
        </div>
        {open && (
          <UserDetailsModal open={open} onClose={() => setIsOpen(false)} />
        )}
      </div>
    </>
  );
}
