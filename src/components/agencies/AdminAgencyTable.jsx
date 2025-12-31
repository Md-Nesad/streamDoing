import { Ellipsis, Funnel } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination";
import Loading from "../Loading";
import { useStream } from "../../context/streamContext";

export default function AdminAgencyTable({ tableData, setPage, loading }) {
  const adminList = tableData?.agencies?.filter(
    (item) => item.type === "admin"
  );
  const adminPagination = tableData?.pagination;
  const { countriesName } = useStream();
  const navigate = useNavigate();

  if (loading) return <Loading />;
  return (
    <>
      {/* search area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 pt-7">
        {/* Search Input */}
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[75%] px-4 py-1.5 rounded-md"
          placeholder="Search by ID or name"
        />

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
            <Funnel size={18} /> Filter
          </button>
          <button
            onClick={() => navigate("/dashboard/agencies/add-admin-agency")}
            className="px-3 sm:px-6 py-1.5 text-sm sm:text-base bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium w-full sm:w-auto text-nowrap"
          >
            Add Agency
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Reference</th>
              <th className="p-3">Agnacy ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Diamond</th>
              <th className="p-3">Com 10.0%</th>
              <th className="p-3">Country</th>
              <th className="p-3">Status</th>
              <th className="p-3 sm:pl-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {adminList?.length > 0 ? (
              adminList?.map((admin, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 font-medium pl-5">
                    {admin.reference || "N/A"}
                  </td>
                  <td className="p-3">{admin.phone}</td>
                  <td className="p-3">{admin.name}</td>
                  <td className="p-3">{admin.diamonds + "M"}</td>
                  <td className="p-3">{admin.commission || "N/A"}</td>
                  <td className="p-3">
                    {countriesName(admin.country) || "N/A"}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-4 py-1 text-xs ${
                        admin.status === "active"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                          : "bg-[#FF929296] text-[#D21B20]"
                      } text-[#005D23] rounded-full font-semibold`}
                    >
                      {admin.status}
                    </span>
                  </td>
                  <td className="p-3 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                    View
                    <span>
                      <Ellipsis size={17} />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          page={adminPagination?.page}
          total={adminPagination?.total}
          limit={adminPagination?.limit}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
