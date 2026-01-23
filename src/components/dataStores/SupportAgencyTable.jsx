import { Funnel, Pen, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import Loading from "../Loading";
import Error from "../Error";
import { useStream } from "../../context/streamContext";
import Pagination from "../Pagination";
import useDelete from "../../hooks/useDelete";
import { toast } from "react-toastify";
import { useGlobalConfirm } from "../../context/ConfirmProvider";
import { useDebounce } from "../../hooks/useDebounce";
import AgencyFilterModal from "../../modals/AgencyFilterModal";

export default function SupportAgencyTable() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const debouncedText = useDebounce(text, 400);
  const { countriesName } = useStream();
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/support-agencies?page=${page}&limit=20`,
  );
  console.log(data);
  const deleteUser = useDelete(`${BASE_URL}/admin/support-agencies`);
  const [supportAgencies, setSupportAgencies] = useState(data?.supportAgencies);
  const pagination = data?.pagination;
  const { confirm } = useGlobalConfirm();

  //handle filter
  const filteredUsers = supportAgencies?.filter((user) => {
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
      const result = await deleteUser(id);
      console.log(result);
      if (!result) {
        toast.error("Failed to delete support agency");
      } else {
        toast.success("Deleted successfully");
      }
      setSupportAgencies(
        supportAgencies?.filter((support) => support._id !== id),
      );
    } catch (error) {
      console.log(error);
    }
  };

  //get data when text empty after filtering
  useEffect(() => {
    if (text === "") {
      setSupportAgencies(data?.supportAgencies);
    }
  }, [text, data]);

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
            onClick={() =>
              navigate("/dashboard/support-agency/add-support-agency")
            }
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
              <th className="p-3">Name</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Level</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers?.length > 0 ? (
              filteredUsers?.map((support) => (
                <tr
                  key={support._id}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 font-medium pl-5">{support.displayId}</td>
                  <td className="p-3">{support.name}</td>
                  <td className="p-3">{support.gender}</td>
                  <td className="p-3">{support.email}</td>
                  <td className="p-3">{support.phone}</td>
                  <td className="p-3">
                    {countriesName(support.location) || "N/A"}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 text-xs block w-21 text-center ${
                        support.status === "active"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                          : support.status === "pending"
                            ? "bg-[#6FADFF] text-[#FFFFFF]"
                            : "bg-[#FF929296] text-[#D21B20]"
                      } text-[#005D23] rounded-full font-semibold`}
                    >
                      {support.status === "suspended"
                        ? support.ban.isPermanent
                          ? "Perm. Ban"
                          : support.ban.isTemporary
                            ? "Temp. Ban"
                            : "Suspended"
                        : support.status[0].toUpperCase() +
                          support.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                    <span className="flex items-center gap-3">
                      <button
                        title="Edit"
                        onClick={() =>
                          navigate(
                            `/dashboard/support-agency/update-support-agency/${support._id}`,
                          )
                        }
                      >
                        <Pen size={19} />
                      </button>

                      <button
                        title="Delete"
                        onClick={() => handleDelete(support._id)}
                      >
                        <Trash2 size={18} className="text-[#FF0037]" />
                      </button>
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No support agency found
                </td>
              </tr>
            )}
          </tbody>
        </table>
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
