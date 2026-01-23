import { getMinutesAgo } from "../../utility/utility";

export default function History({ logData }) {
  return (
    <div className="w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl p-3 sm:p-5 mt-6 mb-8">
      {/* Tiers */}
      <div className="flex flex-col gap-4">
        {logData?.length > 0 ? (
          logData.map((t, i) => (
            <div
              key={i}
              className="flex items-center justify-between w-full border border-gray-200 rounded-lg sm:px-6 px-2 py-2 bg-white"
            >
              {/* Left */}
              <div>
                <h3 className="text-sm font-semibold text-[#1a1a1a] mb-1">
                  {t.details}
                </h3>
                <p className="text-xs sm:text-sm text-[#535353] font-medium">
                  by {t?.reviewerType} • {getMinutesAgo(t.createdAt)}
                </p>
              </div>

              {/* Right */}
              <div className="text-right">
                <p
                  className={`text-sm sm:text-md font-semibold py-1 px-2 rounded `}
                >
                  {t.actionType}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center w-full border border-gray-200 rounded-lg sm:px-6 px-2 py-2 bg-white">
            <h3 className="text-sm font-semibold text-[#1a1a1a] mb-1">
              No history found
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
