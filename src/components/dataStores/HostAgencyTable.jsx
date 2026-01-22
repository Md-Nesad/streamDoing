import { Funnel, LoaderCircle, Pen, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import Error from "../Error";
import useDelete from "../../hooks/useDelete";
import Pagination from "../Pagination";
import { toast } from "react-toastify";
import { useGlobalConfirm } from "../../context/ConfirmProvider";
import { useDebounce } from "../../hooks/useDebounce";
import AgencyFilterModal from "../../modals/AgencyFilterModal";

export default function HostAgnecyTable() {
  const navigate = useNavigate();
  const [deleteLoading, setDeleteLoading] = useState(null);
  const [page, setPage] = useState(1);
  const [text, setText] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const deleteUser = useDelete(`${BASE_URL}/admin/agencies`);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/agencies?page=${page}&limit=30&search=`,
  );
  const hostAgencies = data?.agencies?.filter((item) => item.type === "host");
  const pagination = data?.pagination;
  const [hosts, setHosts] = useState(hostAgencies);
  const { confirm } = useGlobalConfirm();
  const debouncedText = useDebounce(text, 400);

  //handle filter
  const filteredUsers = hosts?.filter((user) => {
    const matchText =
      user.name.toLowerCase().includes(debouncedText.toLowerCase()) ||
      user.displayId.toString().includes(debouncedText);

    const matchStatus =
      statusFilter === "all" ? true : user.status === statusFilter;

    return matchText && matchStatus;
  });

  //handle delete
  const handleDelete = async (id) => {
    try {
      const ok = await confirm("Are you sure to delete?");
      if (!ok) return;
      setDeleteLoading(id);
      const result = await deleteUser(id);

      if (!result) {
        toast.error("Failed to delete agency");
      } else {
        toast.success(result.message);
      }
      setHosts(hosts?.filter((host) => host._id !== id));
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteLoading(null);
    }
  };

  useEffect(() => {
    setHosts(hostAgencies);
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4">
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
              <th className="p-3 pl-5">Agency ID</th>
              <th className="p-3">Agency Name </th>
              <th className="p-3">Reference ID</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers?.length > 0 ? (
              filteredUsers?.map((host, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 font-medium pl-5">{host.displayId}</td>
                  <td className="p-3">{host.name}</td>
                  <td className="p-3">
                    {host?.parent ? host?.parent?.displayId : "N/A"}
                  </td>
                  <td className="p-3">{host.email}</td>
                  <td className="p-3">{host.phone}</td>
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
                  <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                    <span className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          navigate(`/dashboard/agencies/${host._id}`)
                        }
                        title="Edit"
                      >
                        <Pen size={19} />
                      </button>
                      <button
                        onClick={() => handleDelete(host._id)}
                        title="Delete"
                      >
                        {deleteLoading === host._id ? (
                          <LoaderCircle size={18} className="animate-spin" />
                        ) : (
                          <Trash2 size={19} className="text-[#D21B20]" />
                        )}
                      </button>
                    </span>
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
          page={page}
          limit={pagination?.limit}
          total={pagination?.total}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
