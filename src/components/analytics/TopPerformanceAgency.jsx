import { Funnel } from "lucide-react";
import { useStream } from "../../context/streamContext";
import { formatNumber } from "../../utility/utility";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";

export default function TopPerformanceAgency({ data, setPage }) {
  const [text, setText] = useState("");
  const [topAgencies, setTopAgencies] = useState(data?.data?.agencies);
  const { countriesName } = useStream();
  const pagination = data?.data?.pagination;

  const handleFilter = () => {
    const filteredUsers = topAgencies?.filter((agency) => {
      return (
        agency.name.toLowerCase().includes(text.toLowerCase()) ||
        agency.displayId.toString().includes(text)
      );
    });
    setTopAgencies(filteredUsers);
  };

  useEffect(() => {
    if (text === "") {
      setTopAgencies(data?.data?.agencies);
    }
  }, [text]);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 mt-5">
        {/* Search Input */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[75%] px-4 py-1.5 rounded-md"
          placeholder="Search by agency ID or name"
        />

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={handleFilter}
            className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
          >
            <Funnel size={18} /> Filter
          </button>
          <button className="px-3 sm:px-6 py-1.5 text-sm sm:text-base bg-white border border-[#CCCCCC]  rounded-md font-medium w-full sm:w-auto text-nowrap">
            Export Data
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="bg-white p-3 sm:p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-200">
        <h2 className="text-xl font-semibold mb-5">Top Performing Agency</h2>

        <div className="space-y-4">
          {topAgencies?.length > 0 ? (
            topAgencies?.map((agency, index) => (
              <div
                key={index}
                className="flex flex-col max-sm:gap-5 sm:flex-row sm:items-center sm:justify-between bg-[#F1F3F6] rounded-xl px-3 sm:px-5 py-4 border border-gray-200"
              >
                {/* Left: Image + Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={agency.profilePic}
                    alt={agency.name}
                    className="w-14 h-14 rounded-full object-cover border"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {agency.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      ID : {agency.displayId}
                    </p>
                  </div>
                </div>

                {/* Right: Stats */}
                <div className="flex gap-3 sm:gap-10 font-medium text-[#181717]">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 text-left">
                      {countriesName(agency.country)}
                    </p>
                  </div>

                  <div className="text-right mt-1">
                    <p className="text-xs sm:text-sm text-gray-500">
                      Streaming
                    </p>
                    <p className="text-blue-600 max-sm:text-xs max-sm:text-left font-semibold">
                      {agency.hours || "N/A"}
                    </p>
                  </div>

                  <div className="text-right mt-1">
                    <p className="text-xs sm:text-sm text-gray-500">Diamonds</p>
                    <p className="text-pink-600 max-sm:text-xs max-sm:text-left font-semibold">
                      {formatNumber(agency.diamonds)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No agency found</p>
          )}
        </div>
        <Pagination
          page={pagination?.page}
          limit={pagination?.limit}
          total={pagination?.total}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
