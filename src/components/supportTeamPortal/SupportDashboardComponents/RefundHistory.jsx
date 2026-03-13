import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import {
  BASE_URL,
  formatNumber,
  formatOnlyDate,
} from "../../../utility/utility";
import Error from "../../Error";
import Loading from "../../Loading";
import Pagination from "../../Pagination";
export default function RefundHistory() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/support-agency/refund-history?page=${page}&limit=20`,
  );
  const refunds = data?.data;
  console.log(refunds);
  const pagination = data?.pagination;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <>
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">User ID</th>
              <th className="p-3">User Name</th>
              <th className="p-3">Coins</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Reason</th>
              <th className="p-3 pl-5">Status</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {refunds?.map((refund) => (
              <tr
                key={refund._id}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 pl-5">{refund?.userDisplayId || "N/A"}</td>
                <td className="p-3">{refund?.user[0]?.name || "N/A"}</td>
                <td className="p-3">{formatNumber(refund?.coins)}</td>
                <td className="p-3">{formatNumber(refund?.amount)}</td>
                <td className="p-3">{refund?.notes}</td>
                <td className="p-3">
                  <span className="bg-[#E6F4EA] text-[#34A853] px-3 py-1 rounded-full text-sm font-medium">
                    {refund?.status}
                  </span>
                </td>
                <td className="p-3">{formatOnlyDate(refund?.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          page={page}
          total={pagination?.total || 0}
          limit={pagination?.limit || 20}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
