import { coinsAgencies, ledger } from "../data/data";
import StatsSection from "../components/dashboard/StatsCard";
import { useNavigate } from "react-router-dom";
import CurrentExchangeRate from "../components/coinAgency/CurrentExchangeRate";

export default function MasterLedger() {
  const navigate = useNavigate();
  return (
    <>
      <StatsSection data={coinsAgencies} />

      {/* button area */}
      <div className="flex items-center gap-4 bg-[#F4F4F4] w-[45%] px-2 py-1 rounded mt-5">
        <button
          onClick={() => navigate("/dashboard/rate-transaction")}
          className="px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium"
        >
          Rate Transaction
        </button>

        <button
          onClick={() => navigate("/dashboard/exchange-rate")}
          className="px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium"
        >
          Exchange Rate
        </button>

        <button
          onClick={() => navigate("/dashboard/master-ledger")}
          className="px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium bg-white drop-shadow-sm"
        >
          Master Ledger
        </button>
      </div>

      <CurrentExchangeRate tiers={ledger} title="Master Coin Ledger" />
    </>
  );
}
