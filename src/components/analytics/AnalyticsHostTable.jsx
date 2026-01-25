import { useState } from "react";
import { useExportDownload } from "../../hooks/useExportDownload";
import {
  BASE_URL,
  formatNumber,
  formatStreamingHours,
} from "../../utility/utility";
import { useDebounce } from "../../hooks/useDebounce";
import Pagination from "../Pagination";

export default function AnalyticsHostTable({ data, setPage }) {
  const topHosts = data?.data?.data;
  const pagination = data?.data?.pagination;
  const [text, setText] = useState("");
  const { loading, download } = useExportDownload();
  const debouncedText = useDebounce(text, 400);

  const handleExport = () => {
    download(
      `${BASE_URL}/admin/analytics/top-performing-hosts?limit=30&page=1&isExport=true`,
      "topHosts.csv",
    );
  };

  const filteredUsers = topHosts?.filter((agency) => {
    const matchText =
      agency.name.toLowerCase().includes(debouncedText.toLowerCase()) ||
      agency.displayId.toString().includes(debouncedText);

    return matchText;
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 mt-5">
        {/* Search Input */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full px-4 py-1.5 rounded-md"
          placeholder="Search by host ID or name"
        />

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          {/* <button className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
            <Funnel size={18} /> Filter
          </button> */}
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
          {filteredUsers?.length > 0 ? (
            filteredUsers?.map((host, index) => (
              <div
                key={index}
                className="flex flex-col max-sm:gap-5 sm:flex-row sm:items-center sm:justify-between bg-[#F1F3F6] rounded-xl px-3 sm:px-5 py-4 border border-gray-200"
              >
                {/* Left: Image + Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={host?.profilePic}
                    alt={host?.name}
                    className="w-14 h-14 rounded-full object-cover border"
                    loading="lazy"
                  />
                  <div className="cursor-pointer">
                    <h3 className="font-semibold text-gray-800">
                      {host?.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      ID : {host?.displayId}
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

                  <div className="mt-1">
                    <p className="text-xs sm:text-sm text-gray-500">Location</p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 text-start">
                      {host?.location || "N/A"}
                    </p>
                  </div>

                  <div className="text-right mt-1">
                    <p className="text-xs sm:text-sm text-gray-500">
                      Streaming
                    </p>
                    <p className="text-blue-600 max-sm:text-xs max-sm:text-left font-semibold">
                      {formatStreamingHours(host.totalStreamingHours) || "0"}
                    </p>
                  </div>

                  <div className="text-right mt-1">
                    <p className="text-xs sm:text-sm text-gray-500">Diamonds</p>
                    <p className="text-pink-600 max-sm:text-xs max-sm:text-left font-semibold">
                      {formatNumber(host.totalDiamonds)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No hosts found</p>
          )}
        </div>
        <Pagination
          page={pagination?.page}
          total={pagination?.total}
          limit={pagination?.limit}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
