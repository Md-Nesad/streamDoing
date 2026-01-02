// import { Ellipsis, Funnel } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { formatNumber, formatOnlyDate } from "../../utility/utility";

import { tableData } from "../../../data/data";

export default function CoinTransactionList() {
  //   const coinsSend = tableData?.transactions;
  //   console.log(coinsSend);
  //   const navigate = useNavigate();
  return (
    <>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-10">Transaction ID</th>
              <th className="p-3">User</th>
              <th className="p-3">Type</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Time</th>
            </tr>
          </thead>

          <tbody>
            {tableData?.length > 0 ? (
              tableData.map((coin, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td title={coin.transactionId} className="p-3 pl-10">
                    TNX012KAD
                  </td>
                  <td className="p-3">User29034245</td>
                  <td className="p-3">buy</td>
                  <td title={coin?.to?.id} className="p-3">
                    457851
                  </td>
                  <td className="p-3">12 min age</td>
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
