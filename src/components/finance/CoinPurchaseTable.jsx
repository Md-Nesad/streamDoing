import { CircleCheckBig, CircleX, Eye } from "lucide-react";
import { hostAgencies } from "../../data/data";

export default function CoinPurchaseTable({ data }) {
  const coinPurchaseList = data?.topUps;
  console.log(coinPurchaseList);
  return (
    <>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="mb-4 px-2">
          <input
            type="text"
            className="border border-[#BBBBBB] outline-[#BBBBBB] w-full px-4 py-1.5 rounded-md"
            placeholder="Search withdrawals"
          />
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
              coinPurchaseList?.map((user, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 pl-6">{user?.user?.name}</td>
                  <td className="p-3">{user?.coin || "N/A"}</td>
                  <td className="p-3 text-[#FF00C8]">{user?.type || "N/A"}</td>
                  <td className="p-3">${user?.amount.toLocaleString()}</td>
                  <td className="p-3">{user?.topUpMethod}</td>
                  <td className="p-3">{user?.status}</td>
                  <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer">
                    <span className="flex items-center gap-3">
                      <CircleCheckBig size={17} className="text-[#11B324]" />
                      <CircleX size={18} className="text-[#FF0037]" />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] ">
                <td
                  colSpan={9}
                  className="text-center py-5 text-[#555] font-medium"
                >
                  No purchase found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
