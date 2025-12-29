// import { coinsAgencies, ledger } from "../data/data";
// import StatsSection from "../components/dashboard/StatsCard";
// import { useNavigate } from "react-router-dom";
// import CurrentExchangeRate from "../components/coinAgency/CurrentExchangeRate";

export default function MasterLedger() {
  // const navigate = useNavigate();
  return (
    <>
      <h1>Master ledger</h1>
      {/* <StatsSection data={coinsAgencies} /> */}

      {/* button area */}
      {/* <div className="flex items-center gap-4 bg-[#F4F4F4] w-full overflow-x-auto hide_scrollbar sm:w-fit px-2 py-1 rounded mt-5 text-nowrap">
        <button
          onClick={() => navigate("/dashboard/coins/rate-transaction")}
          className="px-4 sm:px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium"
        >
          Rate Transaction
        </button>

        <button
          onClick={() => navigate("/dashboard/coins/exchange-rate")}
          className="px-4 sm:px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium"
        >
          Exchange Rate
        </button>

        <button
          onClick={() => navigate("/dashboard/coins/master-ledger")}
          className="px-4 sm:px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium bg-white drop-shadow-sm"
        >
          Master Ledger
        </button>
      </div> */}

      {/* <CurrentExchangeRate tiers={ledger} title="Master Coin Ledger" /> */}
    </>
  );
}
