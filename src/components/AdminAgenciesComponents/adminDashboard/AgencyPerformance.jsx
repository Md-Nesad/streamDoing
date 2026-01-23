import { useState } from "react";
import PerformanceModal from "./PerformanceModal";
import { BASE_URL, formatNumber } from "../../../utility/utility";
import useFetch from "../../../hooks/useFetch";
import { countries } from "../../../data/adminData";

export default function AgencyPerformance({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const performance = data?.performance || [];
  const [selectedPerformance, setSelectedPerformance] = useState(null);

  const handleOpenModal = (performance) => {
    setSelectedPerformance(performance);
    setIsOpen(true);
  };

  return (
    <>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="hidden sm:flex items-center justify-between  mb-5 sm:px-5 px-3 pt-3">
          <h2 className="sm:text-xl text-sm font-semibold">
            Agencies Performance
          </h2>
        </div>

        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Agency ID</th>
              <th className="p-3">Profile</th>
              <th className="p-3">Host Name</th>
              <th className="p-3">Avg Diamond</th>
              <th className="p-3">Email</th>
              <th className="p-3">Number</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {performance?.length > 0 ? (
              performance?.map((agency, index) => {
                //for getting display id and status
                const { data } = useFetch(
                  `${BASE_URL}/agency/admin/agencies/${agency?.agencyId}`,
                );
                // console.log(data);
                //for getting country name
                const countryName = countries.find(
                  (country) => country._id === data?.country,
                )?.name;
                return (
                  <tr
                    key={index}
                    className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                  >
                    <td className="p-3 font-medium pl-5">{data?.displayId}</td>

                    <td className="p-3">
                      <img
                        src={agency.profilePic}
                        className="w-8 h-8 rounded-full object-cover"
                        fetchPriority="true"
                      />
                    </td>
                    <td className="p-3">{agency.agencyName}</td>
                    <td className="p-3">{formatNumber(agency.avgDiamond)}</td>
                    <td className="p-3">{agency.email}</td>
                    <td className="p-3">{agency.number}</td>
                    <td className="p-3">{countryName || "N/A"}</td>
                    <td className="p-3">
                      <span
                        className={`px-4 py-1 text-xs ${
                          data?.status === "active"
                            ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                            : "bg-[#FF929296] text-[#D21B20]"
                        } text-[#005D23] rounded-full font-semibold`}
                      >
                        {data?.status}
                      </span>
                    </td>
                    <td className="p-3 ">
                      <button
                        onClick={() =>
                          handleOpenModal({ agency, data, countryName })
                        }
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center pt-5">
                  No performance agency found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {isOpen && (
          <PerformanceModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            performance={selectedPerformance}
          />
        )}
      </div>
    </>
  );
}
