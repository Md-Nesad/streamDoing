import { CircleCheckBig, CircleX, Funnel } from "lucide-react";
import { formatNumber } from "../../utility/utility";
import Pagination from "../Pagination";
import Loading from "../Loading";
import { useEffect, useState } from "react";

export default function CoinPurchaseTable({ data, setPage, loading }) {
  const [text, setText] = useState("");
  const [coinPurchaseList, setCoinPurchaseList] = useState(data?.topUps);
  const pagination = data?.pagination;

  //handle filter
  const handleFilter = () => {
    const filteredUsers = coinPurchaseList?.filter((coin) => {
      return coin?.user?.name.toLowerCase().includes(text.toLowerCase());
    });
    setCoinPurchaseList(filteredUsers);
  };

  useEffect(() => {
    if (text === "") {
      setCoinPurchaseList(data?.topUps);
    }
  }, [text, data?.topUps]);

  if (loading) return <Loading />;

  return (
    <>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="px-4 mb-2 flex gap-10">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-[#BBBBBB] outline-[#BBBBBB] w-full px-4 py-1.5 rounded-md"
            placeholder="Search withdrawals"
          />

          <button
            onClick={handleFilter}
            className="sm:px-5 px-2 py-2 bg-[#FFFFFF] rounded-md font-medium border border-[#CCCCCC] flex items-center gap-2 text-sm sm:text-md"
          >
            <Funnel size={18} /> Filter
          </button>
        </div>

        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-6">User/Agency</th>
              <th className="p-3">Coins</th>
              <th className="p-3">Type</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Method</th>
              <th className="p-3">Status</th>
              <th className="p-3 sm:pl-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {coinPurchaseList?.length > 0 ? (
              coinPurchaseList?.map((coin, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 pl-6">{coin?.user?.name}</td>
                  <td className="p-3">{formatNumber(coin?.coins) || "N/A"}</td>
                  <td className="p-3 text-[#FF00C8]">
                    {" "}
                    <span
                      className={`px-4 py-1 text-xs ${
                        coin.type === "normal"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962] text-[#005D23]"
                          : "bg-linear-to-r from-[#EB57FF] to-[#3325C9] text-[#ffffff] opacity-70"
                      }  rounded-full font-semibold`}
                    >
                      {coin?.type || "N/A"}
                    </span>
                  </td>
                  <td className="p-3">
                    ${formatNumber(coin?.amount.toLocaleString()) || "N/A"}
                  </td>
                  <td className="p-3">{coin?.topUpMethod}</td>
                  <td className="p-3">
                    <span
                      className={`px-4 py-1 text-xs ${
                        coin.status === "pending"
                          ? "bg-linear-to-r from-[#87B4EE] to-[#95C3FF] text-[#1F80FF] opacity-90"
                          : coin.status === "completed"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962] text-[#005D23] opacity-90"
                          : "bg-[#FF929296] text-[#D21B20] opacity-90"
                      }  rounded-full font-semibold`}
                    >
                      {coin?.status[0].toUpperCase() + coin?.status.slice(1) ||
                        "N/A"}
                    </span>
                  </td>
                  <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer">
                    {coin?.status === "pending" && (
                      <span className="flex items-center gap-3">
                        <CircleCheckBig size={17} className="text-[#11B324]" />
                        <CircleX size={18} className="text-[#FF0037]" />
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] ">
                <td
                  colSpan={9}
                  className="text-center py-5 text-[#555] font-medium"
                >
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          page={pagination?.page}
          total={pagination?.total}
          limit={pagination?.limit}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
