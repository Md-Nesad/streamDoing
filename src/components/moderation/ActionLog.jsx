import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import Error from "../Error";
import Pagination from "../Pagination";
import Loading from "../Loading";

export default function ActionLog() {
  const [page, setPage] = useState(1);
  const { data, error, loading } = useFetch(
    `${BASE_URL}/admin/reports/action-logs?page=${page}&limit=20&actionType=`,
  );
  const logs = data?.logs;
  const pagination = data?.pagination;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div className="w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl p-3 sm:p-5 mt-6 mb-10">
      {/* Tiers */}
      <div className="flex flex-col gap-4">
        {logs?.length > 0 ? (
          logs?.map((t, i) => (
            <div
              key={i}
              className="flex items-center justify-between w-full border border-gray-200 rounded-lg sm:px-6 px-3 py-2 bg-white"
            >
              {/* Left */}
              <div>
                <h3 className="sm:text-lg text-md font-semibold text-[#1a1a1a] mb-1">
                  {t.details || "-"}
                </h3>
                <p className="sm:text-sm text-xs text-[#535353] font-medium">
                  By {t?.moderator?.name} • {t.timeAgo}
                </p>
              </div>

              {/* Right */}
              <div className="text-right">
                <p
                  className={`sm:text-md text-sm font-semibold py-1 px-2 rounded ${
                    t.actionType === "resolve"
                      ? "bg-[#C9FFCC] text-[#0B8707]"
                      : "bg-[#FFE9E9] text-[#CF0D13]"
                  }`}
                >
                  {t.actionType}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div colSpan={9} className="text-center py-5 text-[#555] font-medium">
            No action logs found.
          </div>
        )}
      </div>
      <Pagination
        page={pagination?.page}
        total={pagination?.total}
        limit={pagination?.limit}
        onPageChange={setPage}
      />
    </div>
  );
}
