import { Funnel } from "lucide-react";
import { useEffect, useState } from "react";
import MasterCoinAgencyDetailsModal from "./MasterCoinAgencyDetailsModal";
import { formatNumber } from "../../../utility/utility";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../../hooks/useDebounce";
import AgencyFilterModal from "../../../modals/AgencyFilterModal";

export default function MasterCoinAgenciesTable({ data }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [agencies, setAgencies] = useState(data?.agencies || []);
  const [selectedAgencies, setSelectedAgencies] = useState(null);
  const coinAgencies = agencies?.filter((item) => item.type === "coin");
  const debouncedText = useDebounce(text, 400);
  //hadle filter functionallity
  const filteredUsers = coinAgencies?.filter((user) => {
    const matchText =
      user.name.toLowerCase().includes(debouncedText.toLowerCase()) ||
      user.displayId.toString().includes(debouncedText);

    const matchStatus =
      statusFilter === "all" ? true : user.status === statusFilter;

    return matchText && matchStatus;
  });
  //updating state when text empty
  useEffect(() => {
    if (text === "") {
      setAgencies(data?.agencies);
    }
  }, [text, data]);

  return (
    <>
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
              <div className="absolute left-0 top-full mt-2 z-50">
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
              navigate("/master-agency-portal/agencies/add-coin-agency")
            }
            className="px-3 sm:px-6 py-1.5 text-sm sm:text-base bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium w-full sm:w-auto text-nowrap"
          >
            Add Agency
          </button>
        </div>
      </div>

      {/* Table area */}
      <div className="w-full mt-7 mb-10">
        {/* Table Wrapper for Horizontal Scroll */}
        <div className="overflow-x-auto max-sm:pt-2 pb-5 bg-white rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] pt-5">
          <table className="w-full text-left border-collapse shrink text-nowrap">
            <thead>
              <tr className="text-[#535353] font-medium text-md">
                <th className="p-3 pl-5">Agency ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Balance</th>
                <th className="p-3">Total Sales</th>
                <th className="p-3">Status</th>
                <th className="p-3 pl-5">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers?.length > 0 ? (
                filteredUsers?.map((agency, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                    >
                      <td className="p-3 font-medium pl-5">
                        {agency.displayId}
                      </td>
                      <td className="p-3">{agency.name || "N/A"}</td>
                      <td className="p-3">{formatNumber(agency.balance)}</td>
                      <td className="p-3">
                        {formatNumber(agency.totalSales) || "N/A"}
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-4 py-1 text-xs text-center block w-23 ${
                            agency.status === "active"
                              ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                              : "bg-[#FF929296] text-[#D21B20]"
                          } text-[#005D23] rounded-full font-semibold`}
                        >
                          {agency.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => {
                            setSelectedAgencies(agency);
                            setOpen(true);
                          }}
                          className="font-semibold"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="border-t border-[#DFDFDF] ">
                  <td
                    colSpan={9}
                    className="text-center py-5 text-[#555] font-medium"
                  >
                    No agencies found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {open && (
            <MasterCoinAgencyDetailsModal
              open={open}
              onClose={() => setOpen(false)}
              agency={selectedAgencies}
            />
          )}
        </div>
      </div>
    </>
  );
}
