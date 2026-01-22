import { Funnel } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import AgencyDetailsModal from "../../modals/AgencyDetailsModal";
import { useDebounce } from "../../hooks/useDebounce";
import AgencyFilterModal from "../../modals/AgencyFilterModal";

export default function HostAgencyTable({ tableData, setPage, loading }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const hostList = tableData?.agencies?.filter((item) => item.type === "host");
  const [hosts, setHosts] = useState(hostList);
  const hostPagination = tableData?.pagination;
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 400);

  const filteredUsers = hosts?.filter((user) => {
    const matchText =
      user.name.toLowerCase().includes(debouncedText.toLowerCase()) ||
      user.displayId.toString().includes(debouncedText);

    const matchStatus =
      statusFilter === "all" ? true : user.status === statusFilter;

    return matchText && matchStatus;
  });

  //handle edit
  const handleEdit = (agency) => {
    setSelected(agency);
    setOpen(true);
  };

  useEffect(() => {
    if (text === "") {
      setHosts(hostList);
    }
  }, [text, tableData]);

  if (loading) return <Loading />;
  return (
    <>
      {/* search area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 pt-7">
        {/* Search Input */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[75%] px-4 py-1.5 rounded-md"
          placeholder="Search by ID or name"
        />

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
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
                <AgencyFilterModal
                  statusFilter={statusFilter}
                  setStatusFilter={setStatusFilter}
                  onClose={() => setFilterOpen(false)}
                />
              </div>
            )}
          </div>
          <button
            onClick={() => navigate("/dashboard/agencies/add-host-agency")}
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
              <th className="p-3">Host ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Balance</th>
              <th className="p-3">Diamonds</th>
              <th className="p-3">Revenue</th>
              <th className="p-3">Country</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers?.length > 0 ? (
              filteredUsers?.map((host) => (
                <tr
                  key={host._id}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 font-medium pl-5">
                    {host?.parent ? host?.parent?.displayId : "N/A"}
                  </td>
                  <td className="p-3">{host.displayId}</td>
                  <td className="p-3">{host.name}</td>
                  <td className="p-3">{host.balance}</td>
                  <td className="p-3">{host.diamonds}</td>
                  <td className="p-3">{host.revenue}</td>
                  <td className="p-3">{host?.country?.name || "N/A"}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 text-xs block w-21 text-center ${
                        host.status === "active"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                          : "bg-[#FF929296] text-[#D21B20]"
                      } text-[#005D23] rounded-full font-semibold`}
                    >
                      {host.status === "suspended"
                        ? host.ban.isPermanent
                          ? "Perm. Ban"
                          : host.ban.isTemporary
                            ? "Temp. Ban"
                            : "Suspended"
                        : host.status[0].toUpperCase() + host.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-3 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                    <button type="button" onClick={() => handleEdit(host)}>
                      <span className="font-semibold">View</span>
                    </button>
                    {/* <Ellipsis size={17} /> */}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No hosts agency found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          page={hostPagination?.page}
          total={hostPagination?.total}
          limit={hostPagination?.limit}
          onPageChange={setPage}
        />
      </div>
      {open && (
        <AgencyDetailsModal
          agency={selected}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
