import { CircleCheckBig, CircleX, Eye, RotateCw } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber, formatOnlyDate } from "../../utility/utility";
import Loading from "../Loading";
import Error from "../Error";
import Pagination from "../Pagination";
import { useState } from "react";
import { useStream } from "../../context/streamContext";
import CoinTransactionModal from "../../modals/ConiTransactionModal";

export default function RateTransactionTable() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/coins/rates/transactions?page=${page}&limit=30`,
  );

  const transactions = data?.transactions;
  const pagination = data?.pagination;

  const handleOpen = (item) => {
    setOpen(true);
    setSelected(item);
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <>
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-6 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Master Portal ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Coin</th>
              <th className="p-3">Value</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 sm:pl-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {transactions?.length > 0 ? (
              transactions?.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                  >
                    <td className="p-3 font-medium pl-5">
                      {item?.to?.displayId
                        ? `MASTER-${item?.to?.displayId}`
                        : "N/A"}
                    </td>
                    <td className="p-3">{item?.to?.name || "N/A"}</td>
                    <td className="p-3">{item?.saleTo}</td>
                    <td className="p-3">{formatNumber(item.coins)}</td>
                    <td className="p-3 text-[#00D519]">
                      ${formatNumber(item.amount)}
                    </td>
                    <td className="p-3">{formatOnlyDate(item.createdAt)}</td>
                    <td className="p-3">
                      <span
                        className={`px-4 py-1 text-xs text-center block w-23 ${
                          item.status === "completed"
                            ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                            : "bg-[#FF929296] text-[#D21B20]"
                        } text-[#005D23] rounded-full font-semibold`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                      {item.status === "completed" ? (
                        <span className="flex items-center gap-3">
                          <button onClick={() => handleOpen(item)}>
                            <Eye size={19} />
                          </button>
                          <RotateCw size={17} className="text-[#F5AD7C]" />
                        </span>
                      ) : (
                        <span className="flex items-center gap-3">
                          <Eye size={19} />
                          <CircleCheckBig
                            size={17}
                            className="text-[#11B324]"
                          />
                          <CircleX size={18} className="text-[#FF0037]" />
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md pt-5">
                <td colSpan={9} className="p-3 text-center">
                  No Transaction Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          page={page}
          limit={pagination?.limit}
          total={pagination?.total}
          onPageChange={setPage}
        />
      </div>
      {open && (
        <CoinTransactionModal
          open={open}
          onClose={() => setOpen(false)}
          item={selected}
        />
      )}
    </>
  );
}
