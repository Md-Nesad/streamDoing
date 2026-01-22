import { Funnel } from "lucide-react";
import star from "../../assests/star.png";
import Pagination from "../Pagination";
import Loading from "../Loading";
import { BASE_URL, formatNumber } from "../../utility/utility";
import { useState } from "react";
import AgencyDetailsModal from "../../modals/AgencyDetailsModal";
import AgencyFilterModal from "../../modals/AgencyFilterModal";
import { useExportDownload } from "../../hooks/useExportDownload";

export default function AgenciesTable({ agenciesData, setPage, loading }) {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const agenciesList = agenciesData?.agencies;
  const agenciesPagination = agenciesData?.pagination;
  const { loading: loadingExport, download } = useExportDownload();

  // if (loading) return <Loading />;
  const handleEdit = (agency) => {
    setSelected(agency);
    setOpen(true);
  };

  const filteredUsers = agenciesList?.filter((agency) => {
    const matchStatus =
      statusFilter === "all" ? true : agency.status === statusFilter;

    return matchStatus;
  });

  //handle export
  const handleExport = () => {
    download(
      `${BASE_URL}/dashboard/agencies-overview?page=1&limit=30&search=&isExport=true`,
      "agencies.csv",
    );
  };

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
                <button
                  onClick={handleExport}
                  className="sm:px-4 px-1 py-2 text-sm sm:text-md btn_gradient rounded-md font-medium border"
                >
                  {loadingExport ? "Exporting..." : "Export Data"}
                </button>
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
                    <th className="p-3">Action</th>
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
                            {agency.displayId || "N/A"}
                          </td>
                          <td className="p-3">{agency.name}</td>
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
                          <td className="p-3">
                            {formatNumber(agency.diamonds)}
                          </td>
                          <td className="p-3">{formatNumber(agency.coins)}</td>
                          <td className="xl:p-3 px-7">
                            {formatNumber(agency.totalSaleCoins)}
                          </td>
                          <td className="xl:p-3 px-7">
                            {formatNumber(agency.totalBuyCoins)}
                          </td>
                          <td className="p-3">
                            {agency?.country?.name || "N/A"}
                          </td>
                          <td className="p-3">
                            <span
                              className={`px-3 py-1 text-xs block w-21 text-center ${
                                agency.status === "active"
                                  ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                                  : "bg-[#FF929296] text-[#D21B20]"
                              } text-[#005D23] rounded-full font-semibold`}
                            >
                              {agency.status === "suspended"
                                ? agency.ban.isPermanent
                                  ? "Perm. Ban"
                                  : agency.ban.isTemporary
                                    ? "Temp. Ban"
                                    : "Suspended"
                                : agency.status[0].toUpperCase() +
                                  agency.status.slice(1)}
                            </span>
                          </td>
                          <td className="p-3 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                            <button
                              type="button"
                              onClick={() => handleEdit(agency)}
                            >
                              <span className="font-semibold">View</span>
                            </button>
                            {/* <Ellipsis size={17} /> */}
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
              <Pagination
                page={agenciesPagination?.page}
                total={agenciesPagination?.total}
                limit={agenciesPagination?.limit}
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
          </div>
        </div>
      )}
    </>
  );
}
