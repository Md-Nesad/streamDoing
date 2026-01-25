import { Ellipsis, Funnel } from "lucide-react";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL, formatOnlyDate } from "../../../utility/utility";
import Error from "../../Error";
import Loading from "../../Loading";
import { useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import ModerationFilter from "../../../modals/ModerationFilter";

export default function ReportsTable() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const { data, loading, error } = useFetch(
    `${BASE_URL}/support-agency/reports?status=&page=1&limit=10`,
  );
  const [text, setText] = useState("");
  const [reports, setReports] = useState(data?.reports);
  const debouncedText = useDebounce(text, 400);

  const filteredReports = reports?.filter((report) => {
    const matchText =
      report?.targetId?.name
        .toLowerCase()
        .includes(debouncedText.toLowerCase()) ||
      report?.reporterId?.name
        .toLowerCase()
        .includes(debouncedText.toLowerCase());

    const matchStatus =
      statusFilter === "all" ? true : report.status === statusFilter;

    return matchText && matchStatus;
  });

  useEffect(() => {
    if (text === "") {
      setReports(data?.reports);
    }
  }, [text, data]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>
      <div className="mb-4 flex gap-10">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full px-4 py-1.5 rounded-md"
          placeholder="Search by Id or name"
        />

        <div className="relative">
          <button
            onClick={() => setFilterOpen((prev) => !prev)}
            className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center gap-2"
          >
            <Funnel size={18} /> Filter
          </button>

          {/* Filter Dropdown */}
          {filterOpen && (
            <div className="absolute right-0 top-full mt-2 z-50">
              <ModerationFilter
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                onClose={() => setFilterOpen(false)}
              />
            </div>
          )}
        </div>
      </div>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-5 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-6">Report ID</th>
              <th className="p-3">Reported User</th>
              <th className="p-3">Reporter</th>
              <th className="p-3">Category</th>
              <th className="p-3">Evidence</th>
              <th className="p-3">Status</th>
              <th className="p-3">Created</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredReports?.length > 0 ? (
              filteredReports?.map((report, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 pl-6 font-medium">
                    {report?.targetId?.displayId || "N/A"}
                  </td>
                  <td className="p-3 ">{report?.targetId?.name || "N/A"}</td>
                  <td className="p-3 ">{report?.reporterId?.name || "N/A"}</td>
                  <td className="p-3">
                    <span className="px-3 py-1.5 text-sm bg-[#FF7A7A] text-[#ffffff] rounded-full font-medium">
                      {report?.category || "N/A"}
                    </span>
                  </td>
                  <td className="p-3">
                    <img
                      src={report.evidence}
                      alt="Evidence for report"
                      className="w-8 h-8 rounded-full object-cover"
                      fetchPriority="true"
                    />
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-4 py-1 text-xs text-center block w-23 ${
                        report.status === "resolved"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                          : report.status === "pending"
                            ? "bg-[#6FADFF] text-[#FFFFFF]"
                            : "bg-[#FF929296] text-[#D21B20]"
                      } text-[#005D23] rounded-full font-semibold`}
                    >
                      {report.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {formatOnlyDate(report?.createdAt) || "N/A"}
                  </td>
                  <td className="p-3 pl-5 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer">
                    <button>
                      <Ellipsis size={17} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
