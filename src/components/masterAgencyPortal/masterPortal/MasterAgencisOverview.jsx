import { useState } from "react";
import { formatNumber } from "../../../utility/utility";
import MasterModal from "./MasterModal";

export default function MasterAgencisOverview({ data }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const agencies = data?.agencies;

  const handleView = (agency) => {
    setSelected(agency);
    setOpen(true);
  };
  return (
    <>
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
                <th className="p-3">Revenue</th>
                <th className="p-3">Status</th>
                <th className="p-3 pl-5">Action</th>
              </tr>
            </thead>

            <tbody>
              {agencies?.length > 0 ? (
                agencies?.map((agency, index) => {
                  // const country = countries?.find(
                  //   (country) => country._id === agency.country
                  // )?.name;
                  return (
                    <tr
                      key={index}
                      className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                    >
                      <td className="p-3 font-medium pl-5">
                        {agency.displayId}
                      </td>
                      <td className="p-3">{agency.name || "N/A"}</td>
                      <td className="p-3">{formatNumber(agency.coins)}</td>
                      <td className="p-3">
                        {formatNumber(agency.totalCoinsSold)}
                      </td>
                      <td className="p-3">{formatNumber(agency.revenue)}</td>
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
                        <span className="font-semibold">
                          <button onClick={() => handleView(agency)}>
                            View
                          </button>
                        </span>
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
        </div>
      </div>
      {open && (
        <MasterModal
          open={open}
          onClose={() => setOpen(false)}
          agency={selected}
        />
      )}
    </>
  );
}
