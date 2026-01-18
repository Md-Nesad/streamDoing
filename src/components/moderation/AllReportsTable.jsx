import { Activity, Eye, Funnel } from "lucide-react";
import { useEffect, useState } from "react";
import ReportModal from "../../modals/ReportModal";
import star from "../../assests/star.png";
import { formatOnlyDate, formatOnlyTime } from "../../utility/utility";
import Pagination from "../Pagination";
export default function AllReportsTable({ reports, setPage }) {
  const [text, setText] = useState("");
  const [open, setIsOpen] = useState(false);
  const [allReports, setAllReports] = useState(reports?.reports);
  const [selectedReportId, setSelectedReportId] = useState(null);
  const pagination = reports?.pagination;

  //handle Filter
  const handleFilter = () => {
    const filteredReports = allReports?.filter((report) => {
      return (
        report?.targetId?.name.toLowerCase().includes(text.toLowerCase()) ||
        report?.reporterId?.displayId.toString().includes(text)
      );
    });
    setAllReports(filteredReports);
  };

  useEffect(() => {
    if (text === "") {
      setAllReports(reports?.reports);
    }
  }, [text, reports]);

  return (
    <>
      {/* search area */}
      <div className="mt-6 flex gap-10">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full px-4 py-1.5 rounded-md"
          placeholder="Search by Reporter ID or Target Name"
        />

        <button
          onClick={handleFilter}
          className="sm:px-5 px-2 py-2 bg-[#FFFFFF] rounded-md font-medium border border-[#CCCCCC] flex items-center gap-2 text-sm sm:text-md"
        >
          <Funnel size={18} /> Filter
        </button>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-4 sm:mt-7 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3">Type</th>
              <th className="p-3">ID Reporter</th>
              <th className="p-3">Target</th>
              <th className="p-3">Level</th>
              <th className="p-3">Time</th>
              <th className="p-3">Target Type</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 sm:pl-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {allReports?.length > 0 ? (
              allReports?.map((report) => (
                <tr
                  key={report?._id}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3">
                    <div className="w-8 h-8 rounded-full">
                      <img
                        src={report?.reporterId?.profilePic}
                        alt="reporter profile picture"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                  </td>
                  <td className="p-3">{report?.reporterId?.displayId}</td>
                  <td className="p-3">{report?.targetId?.name || "N/A"}</td>
                  <td className="p-3">
                    <span className="p-1 text-xs bg-linear-to-b from-[#FA77BD] to-[#940C44] rounded-lg font-semibold text-white flex items-center gap-2 w-14">
                      <img src={star} alt="" className="w-4 h-4" />{" "}
                      {report?.level || "N/A"}
                    </span>
                  </td>
                  <td className="p-3 text-[#FF00C8]">
                    {formatOnlyTime(report.createdAt)}
                  </td>
                  <td className="p-3">
                    <span className="bg-linear-to-r from-[#2FB6FF] rounded-full to-[#447FFF] py-1 px-3 opacity-70 shadow-md text-white">
                      {report?.targetType}
                    </span>
                  </td>
                  <td className="p-3">{formatOnlyDate(report.createdAt)}</td>
                  <td className="p-3">
                    <span
                      className={`px-4 py-1 text-sm bg-linear-to-r from-[#2FB6FF] to-[#447FFF] rounded-full text-white opacity-70 flex gap-3 items-center w-30`}
                    >
                      <Activity size={15} /> {report?.status}
                    </span>
                  </td>
                  <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer">
                    <button title="View" className="pl-4">
                      <Eye
                        size={19}
                        onClick={() => {
                          setSelectedReportId(report?._id);
                          setIsOpen(true);
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] ">
                <td
                  colSpan={9}
                  className="text-center py-5 text-[#555] font-medium"
                >
                  No Reports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          page={pagination?.page}
          total={pagination?.total}
          limit={pagination?.limit}
          onPageChange={setPage}
        />
        {open && (
          <ReportModal
            open={open}
            onClose={() => setIsOpen(false)}
            id={selectedReportId}
          />
        )}
      </div>
    </>
  );
}
