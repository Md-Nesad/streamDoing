import { Ellipsis, Funnel } from "lucide-react";
// import Pagination from "../Pagination";
// import Loading from "../Loading";
// import { formatNumber } from "../../utility/utility";
// import { useStream } from "../../context/streamContext";
import { agencies } from "../../../data/data";
import { useState } from "react";
import MasterHostAgencyDetailsModal from "./MasterHostAgencyDetailsModal";

export default function MasterHostAgenciesTable() {
  const [open, setOpen] = useState(false);
  //   const agenciesList = agenciesData?.agencies;
  //   const agenciesPagination = agenciesData?.pagination;
  //   const { countriesName } = useStream();

  // if (loading) return <Loading />;

  return (
    <>
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
          <button className="px-3 sm:px-6 py-1.5 text-sm sm:text-base bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium w-full sm:w-auto text-nowrap">
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
                <th className="p-3 pl-5">Host ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Balance</th>
                <th className="p-3">Diamond</th>
                <th className="p-3">Revenue</th>
                <th className="p-3">Status</th>
                <th className="p-3 pl-5">Action</th>
              </tr>
            </thead>

            <tbody>
              {agencies.length > 0 ? (
                agencies.map((agency, index) => {
                  // const country = countries?.find(
                  //   (country) => country._id === agency.country
                  // )?.name;
                  return (
                    <tr
                      key={index}
                      className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                    >
                      <td className="p-3 font-medium pl-5">COIN-042</td>
                      <td className="p-3">{agency.name || "N/A"}</td>
                      <td className="p-3">108K</td>
                      <td className="p-3">1.2M coins</td>
                      <td className="p-3">1.2M coins</td>
                      <td className="p-3">
                        <span className="px-4 py-1 text-xs bg-linear-to-r from-[#79D49B] to-[#25C962] text-[#005D23] rounded-full font-semibold">
                          active
                        </span>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => setOpen(true)}
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
            <MasterHostAgencyDetailsModal
              open={open}
              onClose={() => setOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  );
}
