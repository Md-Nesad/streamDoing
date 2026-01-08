import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber, formatOnlyDate } from "../../utility/utility";
import Loading from "../Loading";

export default function MasterLedger() {
  const [seeAll, setSeeAll] = useState(false);
  const { data, loading } = useFetch(`${BASE_URL}/coins/ledgers`);
  const ledgers = data?.ledgerEntries;

  if (loading) return <Loading />;
  return (
    <div className="w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl p-3 sm:p-5 mt-6 mb-8">
      {/* Title */}
      <h2 className="text-xl font-bold text-[#1a1a1a] opacity-85 mb-5">
        Master Coin Ledger
      </h2>

      {/* Tiers */}
      <div className="flex flex-col gap-4">
        {seeAll
          ? ledgers?.map((ledger) => (
              <div
                key={ledger._id}
                className="flex flex-col max-sm:gap-3 justify-start sm:flex-row sm:items-center sm:justify-between w-full border border-gray-200 rounded-lg sm:px-6 px-3 py-2 bg-white"
              >
                {/* Left */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">
                    Ledger Entry
                  </h3>
                  <p className="text-sm text-[#535353] font-medium">
                    {ledger.remarks}
                  </p>
                </div>

                {/* Right */}
                <div className="sm:text-right text-left">
                  <p className="text-xl font-bold text-[#1a1a1a]">
                    {formatNumber(ledger.coins)} Coins
                  </p>
                  <p className="text-sm text-[#535353] font-medium">
                    Balance: {formatNumber(ledger.balanceAfter)}
                  </p>
                </div>
              </div>
            ))
          : ledgers?.slice(0, 20)?.map((ledger) => (
              <div
                key={ledger._id}
                className="flex flex-col max-sm:gap-3 justify-start sm:flex-row sm:items-center sm:justify-between w-full border border-gray-200 rounded-lg sm:px-6 px-3 py-2 bg-white"
              >
                {/* Left */}
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">
                    Ledger Entry
                  </h3>
                  <p className="text-sm text-[#535353] font-medium">
                    {ledger.remarks}
                  </p>
                </div>

                {/* Right */}
                <div className="sm:text-right text-left">
                  <p className="text-xl font-bold text-[#1a1a1a]">
                    {formatNumber(ledger.coins)} Coins
                  </p>
                  <p className="text-sm text-[#535353] font-medium">
                    Balance: {formatNumber(ledger.balanceAfter)}
                  </p>
                </div>
              </div>
            ))}

        <button
          onClick={() => setSeeAll(!seeAll)}
          className="btn_white w-fit block mx-auto py-1 px-4"
        >
          {seeAll ? "See less" : "See all"}
        </button>
      </div>
    </div>
  );
}
