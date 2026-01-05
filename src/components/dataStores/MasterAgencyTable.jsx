import { Funnel, Pen, Trash2 } from "lucide-react";
import { useState } from "react";
import EditMasterAgencyModal from "../../modals/dataSroreModals/EditMasterAgencyModal";
import { useNavigate } from "react-router-dom";
import { useStream } from "../../context/streamContext";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import Loading from "../Loading";
import Error from "../Error";

export default function MasterAgencyTable() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const { countriesName } = useStream();
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/agencies?page=${page}&limit=10&search=`
  );
  const masterAgencies = data?.agencies?.filter(
    (item) => item.type === "master"
  );
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4">
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
            onClick={() => navigate("/dashboard/agencies/add-master-agency")}
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
            {masterAgencies?.map((master, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 font-medium pl-5">
                  MASTER-{master.displayId}
                </td>
                <td className="p-3">{master.name}</td>
                <td className="p-3">{master.referenceId || "N/A"}</td>
                <td className="p-3">{master.email}</td>
                <td className="p-3">{master.phone}</td>
                <td className="p-3">
                  {countriesName(master.country) || "N/A"}
                </td>
                <td className="p-3">
                  <span
                    className={`px-4 py-1 text-xs ${
                      master.status === "active"
                        ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                        : "bg-[#FF929296] text-[#D21B20]"
                    } text-[#005D23] rounded-full font-semibold`}
                  >
                    {master.status}
                  </span>
                </td>
                <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                  <span className="flex items-center gap-3">
                    <button onClick={() => setIsOpen(true)} title="Edit">
                      <Pen size={19} />
                    </button>
                    <Trash2 size={18} className="text-[#FF0037]" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOpen && (
          <EditMasterAgencyModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
}
