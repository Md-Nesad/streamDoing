import { timeAgo } from "../../../utility/utility";
import Pagination from "../../Pagination";

export default function CoinTransactionList({ data, setPage }) {
  const transactionHistory = data?.data;
  const pagination = data?.pagination;
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
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactionHistory?.length > 0 ? (
              transactionHistory.map((transaction, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 pl-10">
                    {transaction?.transactioniId || transaction.transactionId}
                  </td>
                  <td className="p-3">
                    {transaction?.toAgency
                      ? `${transaction.toAgency.name}-${transaction.toAgency.displayId}`
                      : `${transaction?.name}-${transaction?.displayId}`}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-4 py-1 text-sm ${
                        transaction.type === "sale"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                          : "bg-linear-to-r from-[#79BAD4] to-[#2577C9] text-[#00215D]"
                      } text-[#005D23] rounded-full font-semibold opacity-90`}
                    >
                      {transaction.type}
                    </span>
                  </td>
                  <td className="p-3">{transaction.amount}</td>
                  <td className="p-3">{timeAgo(transaction.createdAt)}</td>

                  {transaction.status ? (
                    <td className="p-3">
                      <span
                        className={`px-4 py-1.5 text-sm ${
                          transaction.status === "completed"
                            ? "bg-[#E1F7E4] text-[#077414]"
                            : "bg-[#9DC4F891] text-[#344031]"
                        } text-[#005D23] rounded-md font-semibold`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 pt-6 text-center">
                  No transaction history found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          page={pagination?.page}
          limit={pagination?.limit}
          total={pagination?.total}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
