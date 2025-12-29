import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber, formatOnlyDate } from "../../utility/utility";
import Loading from "../Loading";

export default function MasterLedger() {
  const { data, loading } = useFetch(`${BASE_URL}/coins/ledgers`);
  const ledgers = data?.ledgerEntries;
  console.log(ledgers);
  const ledger = [
    {
      title: "Ledger Entry #1000",
      min: "2024-10-28 14:30:00",
      price: "+5000 coins",
    },
    {
      title: "Ledger Entry #1001",
      min: "Min Purchase: 10,000 coins",
      price: "-10000 coins",
    },
    {
      title: "Ledger Entry #1002",
      min: "2024-10-27 14:32:00",
      price: "+15000 coins",
    },
    {
      title: "Ledger Entry #1002",
      min: "2024-10-27 14:32:00",
      price: "+15000 coins",
    },
    {
      title: "Ledger Entry #1002",
      min: "2024-10-27 14:32:00",
      price: "+15000 coins",
    },
  ];

  if (loading) return <Loading />;
  return (
    <div className="w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl p-3 sm:p-5 mt-6 mb-8">
      {/* Title */}
      <h2 className="text-xl font-bold text-[#1a1a1a] opacity-85 mb-5">
        Master Coin Ledger
      </h2>

      {/* Tiers */}
      <div className="flex flex-col gap-4">
        {ledgers?.map((ledger, i) => (
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
                Min Purchase: {formatOnlyDate(ledger.createdAt)}
              </p>
            </div>

            {/* Right */}
            <div className="sm:text-right text-left">
              <p className="text-xl font-bold text-[#1a1a1a]">
                +{formatNumber(ledger.coins)} Coins
              </p>
              <p className="text-sm text-[#535353] font-medium">
                Balance: {formatNumber(ledger.balanceAfter)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
