import React from "react";
import { coinsAgencies } from "../data/data";
import StatsSection from "../components/dashboard/StatsCard";
import RateTransactionTable from "../components/coinAgency/RateTransactionTable";
import { useNavigate } from "react-router-dom";
import TitleAndSubTitle from "../components/TitleAndSubTitle";

export default function RateTransaction() {
  const navigate = useNavigate();
  return (
    <>
      <TitleAndSubTitle
        title="Total Coin Agency"
        subtitle="Monitor and manage active streams"
      />

      <StatsSection data={coinsAgencies} />

      {/* button area */}
      <div className="flex items-center gap-4 bg-[#F4F4F4] w-fit px-2 py-1 rounded mt-5">
        <button
          onClick={() => navigate("/dashboard/rate-transaction")}
          className="px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium bg-white drop-shadow-sm"
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
          className="px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium"
        >
          Master Ledger
        </button>
      </div>

      {/* table */}
      <RateTransactionTable />
    </>
  );
}
