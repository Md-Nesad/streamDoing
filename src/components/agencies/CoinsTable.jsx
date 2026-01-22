import { Funnel } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber } from "../../utility/utility";
import AgencyDetailsModal from "../../modals/AgencyDetailsModal";
import AgencyFilterModal from "../../modals/AgencyFilterModal";
import { useDebounce } from "../../hooks/useDebounce";

export default function CoinsTable() {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [text, setText] = useState("");
  const { data, loading: coinLoading } = useFetch(
    `${BASE_URL}/admin/agencies/coin-agencies?page=${page}&limit=30&search=`,
  );

  const [coins, setCoins] = useState(data?.data);
  const coinPagination = data?.pagination;
  const navigate = useNavigate();
  const debouncedText = useDebounce(text, 400);

  const filteredUsers = coins?.filter((user) => {
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
      setCoins(data?.data);
    }
  }, [text, data]);

  if (coinLoading) return <Loading />;
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
            onClick={() => navigate("/dashboard/agencies/add-coin-agency")}
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
              <th className="p-3">Agnacy ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Coin Sales</th>
              <th className="p-3">Coin Buy</th>
              <th className="p-3">Revenue</th>
              <th className="p-3">Country</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers?.length > 0 ? (
              filteredUsers?.map((coin, index) => {
                return (
                  <tr
                    key={index}
                    className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                  >
                    <td className="p-3 font-medium pl-5">
                      {coin?.parent ? coin?.parent?.displayId : "N/A"}
                    </td>
                    <td className="p-3">{coin.displayId}</td>
                    <td className="p-3">{coin.name}</td>
                    <td className="p-3">{formatNumber(coin.totalSaleCoins)}</td>
                    <td className="p-3">{formatNumber(coin.totalBuyCoins)}</td>
                    <td className="p-3">{coin.revenue}</td>
                    <td className="p-3">{coin?.country?.name || "N/A"}</td>
                    <td className="p-3">
                      <span
                        className={`px-3 py-1 text-xs block w-21 text-center ${
                          coin.status === "active"
                            ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                            : "bg-[#FF929296] text-[#D21B20]"
                        } text-[#005D23] rounded-full font-semibold`}
                      >
                        {coin.status === "suspended"
                          ? coin.ban.isPermanent
                            ? "Perm. Ban"
                            : coin.ban.isTemporary
                              ? "Temp. Ban"
                              : "Suspended"
                          : coin.status[0].toUpperCase() + coin.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-3 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                      <button type="button" onClick={() => handleEdit(coin)}>
                        <span className="font-semibold">View</span>
                      </button>
                      {/* <Ellipsis size={17} /> */}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No coin agency found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          page={coinPagination?.page}
          total={coinPagination?.total}
          limit={coinPagination?.limit}
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
