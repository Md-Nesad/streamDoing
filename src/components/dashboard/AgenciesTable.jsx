import { Ellipsis, Funnel } from "lucide-react";
import star from "../../assests/star.png";
import Pagination from "../Pagination";
import Loading from "../Loading";
import { formatNumber } from "../../utility/utility";

export default function AgenciesTable({ agenciesData, setPage, loading }) {
  const agenciesList = agenciesData?.agencies;
  const agenciesPagination = agenciesData?.pagination;

  // if (loading) return <Loading />;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full mt-7 mb-10">
          {/* Card Container */}
          <div className="bg-white rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
            {/* Header */}
            <div className="hidden sm:flex items-center justify-between  mb-4 sm:px-5 px-3 pt-5">
              <h2 className="sm:text-xl text-sm font-semibold">
                Agencies Overview
              </h2>
              <div className="flex items-center sm:gap-3 gap-2">
                <button className="sm:px-4 px-1 py-2 text-sm sm:text-md bg-[#FFFFFF] rounded-md font-medium border border-[#CCCCCC]">
                  Export Data
                </button>
                <button className="sm:px-5 px-2 py-2 bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium flex items-center gap-2 text-sm sm:text-md">
                  <Funnel size={18} /> Filter
                </button>
              </div>
            </div>

            {/* Table Wrapper for Horizontal Scroll */}
            <div className="overflow-x-auto max-sm:pt-2 pb-5">
              <table className="w-full text-left border-collapse shrink text-nowrap">
                <thead>
                  <tr className="text-[#535353] font-medium text-md">
                    <th className="p-3 pl-5">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Type</th>
                    <th className="p-3">Level</th>
                    <th className="p-3">Diamonds</th>
                    <th className="p-3">Beans</th>
                    <th className="p-3">Coin Sell</th>
                    <th className="p-3">Coin Buy</th>
                    <th className="p-3">Location</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 pl-5">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {agenciesList?.length > 0 ? (
                    agenciesList?.map((agency, index) => (
                      <tr
                        key={index}
                        className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                      >
                        <td className="p-3 font-medium pl-5">
                          {agency.displayId || "N/A"}
                        </td>
                        <td className="p-3">{agency.name || "N/A"}</td>
                        <td className="p-3">
                          <span className="px-3 py-1 text-xs block w-15 text-center bg-[#B31d84] text-white rounded-full font-semibold">
                            {agency.type.charAt(0).toUpperCase() +
                              agency.type.slice(1)}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className="p-1 text-xs bg-linear-to-b from-[#5DB90A] to-[#175111] rounded-lg font-semibold text-white flex items-center gap-1 w-14">
                            <img src={star} alt="" className="w-4 h-4" />{" "}
                            {agency.level || "N/A"}
                          </span>
                        </td>
                        <td className="p-3">{formatNumber(agency.diamonds)}</td>
                        <td className="p-3">{formatNumber(agency.coins)}</td>
                        <td className="xl:p-3 px-7">
                          {formatNumber(agency.balance)}
                        </td>
                        <td className="xl:p-3 px-7">
                          {formatNumber(agency.holdCoins)}
                        </td>
                        <td className="p-3">{agency.country}</td>
                        <td className="p-3">
                          <span className="px-4 py-1 text-xs bg-linear-to-r from-[#79D49B] to-[#25C962] text-[#005D23] rounded-full font-semibold">
                            {agency.status}
                          </span>
                        </td>
                        <td className="p-3 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                          <span className="font-semibold">View</span>{" "}
                          <Ellipsis size={17} />
                        </td>
                      </tr>
                    ))
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
              <Pagination
                page={agenciesPagination?.page}
                total={agenciesPagination?.total}
                limit={agenciesPagination?.limit}
                onPageChange={setPage}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
