import { Ellipsis, Funnel } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import Pagination from "../Pagination";
import { useStream } from "../../context/streamContext";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber } from "../../utility/utility";

export default function CoinsTable({ tableData, setPage, loading }) {
  const coinList = tableData?.agencies?.filter((item) => item.type === "coin");
  const [coins, setCoins] = useState(coinList);
  console.log("coins", coins);
  const coinPagination = tableData?.pagination;
  const navigate = useNavigate();
  const { countriesName } = useStream();
  const { data, loading: coinLoading } = useFetch(
    `${BASE_URL}/admin/agencies/coin-agencies?search=`
  );
  const coinlists = data?.data;

  const [text, setText] = useState("");

  const handleFilter = () => {
    const filteredUsers = coinList?.filter((agency) => {
      return (
        agency.name.toLowerCase().includes(text.toLowerCase()) ||
        agency.displayId.toString().includes(text)
      );
    });
    setCoins(filteredUsers);
  };

  useEffect(() => {
    setCoins(coinList);
  }, [tableData]);

  useEffect(() => {
    if (text === "") {
      handleFilter();
    }
  }, [text]);

  if (loading || coinLoading) return <Loading />;
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
          <button
            onClick={handleFilter}
            className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
          >
            <Funnel size={18} /> Filter
          </button>
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
              <th className="p-3 sm:pl-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {coins?.length > 0 ? (
              coins?.map((coin, index) => {
                const saleBye = coinlists?.find(
                  (item) => item?._id === coin._id
                );

                return (
                  <tr
                    key={index}
                    className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                  >
                    <td className="p-3 font-medium pl-5">
                      {coin?.parent ? "REF" + coin?.parent?.displayId : "N/A"}
                    </td>
                    <td className="p-3">{coin.displayId}</td>
                    <td className="p-3">{coin.name}</td>
                    <td className="p-3">
                      {formatNumber(saleBye?.totalSaleCoins)}
                    </td>
                    <td className="p-3">
                      {formatNumber(saleBye?.totalBuyCoins)}
                    </td>
                    <td className="p-3">{coin.revenue}</td>
                    <td className="p-3">
                      {coin?.country?.name ||
                        countriesName(coin.country) ||
                        "N/A"}
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-4 py-1 text-xs ${
                          coin.status === "active"
                            ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                            : "bg-[#FF929296] text-[#D21B20]"
                        } text-[#005D23] rounded-full font-semibold`}
                      >
                        {coin.status}
                      </span>
                    </td>
                    <td className="p-3 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                      View
                      <span role="button">
                        <Ellipsis size={17} />
                      </span>
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
    </>
  );
}
