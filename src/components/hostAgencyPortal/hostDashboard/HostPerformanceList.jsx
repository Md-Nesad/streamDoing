import { useEffect, useState } from "react";
import HostPerformanceModal from "./HostPerformanceModal";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../utility/utility";
import { toast } from "react-toastify";

export default function HostPerformanceList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSeclected] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [query, setQuery] = useState({
    startDate: "",
    endDate: "",
  });

  const [reports, setReports] = useState([]);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/agency/host/analytics/host-performance?startDate=${query.startDate}&endDate=${query.endDate}`,
  );

  const { data: hostList } = useFetch(
    `${BASE_URL}/agency/host/dashboard/hosts?page=1&limit=20&search=`,
  );

  // sync API data to table
  useEffect(() => {
    if (data?.report) {
      setReports(data.report);
    } else {
      setReports([]);
    }
  }, [data]);

  // apply filter
  const handleFilter = () => {
    if (!startDate || !endDate) {
      toast.error("Please select start date and end date!");
      return;
    }

    setQuery({
      startDate,
      endDate,
    });
  };

  return (
    <>
      <div className="w-full px-5 py-7 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06)] rounded-md mt-6">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:ml-10">
          {/* Start Date */}
          <div className="flex flex-col gap-2 mb-3">
            <label className="text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-[#626060] rounded-md px-3 py-2 cursor-pointer outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* End Date */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-[#626060] rounded-md px-3 py-2 cursor-pointer outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Apply Button */}
          <div className="flex flex-col gap-2 mt-7">
            <button
              type="button"
              onClick={() => {
                handleFilter();
                setStartDate("");
                setEndDate("");
              }}
              className="px-12 py-2 text-md btn_gradient"
            >
              Apply
            </button>
          </div>
        </form>
      </div>

      <div className="py-4 bg-white rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="hidden sm:flex items-center justify-between mb-5 sm:px-5 px-3 pt-3">
          <h2 className="sm:text-xl text-sm font-semibold">Host Performance</h2>
        </div>

        {loading && (
          <p className="text-center text-md font-semibold text-gray-600">
            Loading...
          </p>
        )}

        {error && (
          <p className="text-center text-md font-semibold text-gray-600">
            {error}
          </p>
        )}

        {!loading && !error && (
          <table className="w-full text-left border-collapse text-nowrap">
            <thead>
              <tr className="text-[#535353] text-md font-medium">
                <th className="p-3 pl-5">Rank</th>
                <th className="p-3">Host Name</th>
                <th className="p-3">Level</th>
                <th className="p-3">Monthly Target</th>
                <th className="p-3">Diamonds Earned</th>
                <th className="p-3">Live Minutes</th>
                <th className="p-3">Target Progress</th>
                <th className="p-3">Estimated Salary</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {reports.length > 0 ? (
                reports.map(
                  (user, index) => (
                    console.log(user),
                    (
                      <tr
                        key={index}
                        className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                      >
                        <td className="p-3 pl-5 font-medium">{user?.rank}</td>
                        <td className="p-3">{user?.hostName || "N/A"}</td>
                        <td className="p-3">Lv{user?.level}</td>
                        <td className="p-3">{user?.monthlyTarget || "-"}</td>
                        <td className="p-3">{user?.totalDiamonds || "-"}</td>
                        <td className="p-3 text-[#30ACFF] font-semibold">
                          {user?.avgDailyHours || "-"}h
                        </td>
                        <td className="p-3 text-[#FF0AB1] font-semibold">
                          {user?.targetProgress || "-"}%
                        </td>
                        <td className="p-3">${user?.totalSalary}</td>
                        <td className="p-3">
                          <button
                            onClick={() => {
                              setIsOpen(true);
                              setSeclected(user);
                            }}
                            className="text-blue-600 hover:underline"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    )
                  ),
                )
              ) : (
                <tr className="border-t border-[#DFDFDF]">
                  <td colSpan={9} className="p-5 text-center text-gray-500">
                    No reports found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        {/* Modal */}
        {isOpen && (
          <HostPerformanceModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            user={selected}
            hostList={hostList}
          />
        )}
      </div>
    </>
  );
}
