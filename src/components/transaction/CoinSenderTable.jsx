import { Ellipsis, Funnel } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CoinSenderTable({ tableData }) {
  const coinsSend = tableData?.transactions;
  console.log(coinsSend);
  const navigate = useNavigate();
  return (
    <>
      {/* search area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 pt-7">
        {/* Search Input */}
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[75%] px-4 py-1.5 rounded-md"
          placeholder="Search by Agency ID or name"
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

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3">Transaction ID</th>
              <th className="p-3">Sender Type</th>
              <th className="p-3">Sender User ID</th>
              <th className="p-3">Receiver User ID</th>
              <th className="p-3">Receiver Type</th>
              <th className="p-3">Coin Amount</th>
              <th className="p-3">Sent Date/Time</th>
              <th className="p-3 sm:pl-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {coinsSend?.length > 0 ? (
              coinsSend.map((coin, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3">{coin.transactionId}</td>
                  <td className="p-3">{coin.senderType}</td>
                  <td className="p-3">{coin.senderUserId}</td>
                  <td className="p-3">{coin.receiverUserId}</td>
                  <td className="p-3">{coin.receiverType}</td>
                  <td className="p-3">{coin.coinAmount}</td>
                  <td className="p-3">{coin.sentDateTime}</td>
                  <td className="p-3 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                    <span>
                      <Ellipsis size={17} />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 pt-6 text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
