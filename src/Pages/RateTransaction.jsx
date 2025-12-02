import React from "react";
import { coinsAgencies } from "../data/data";
import StatsSection from "../components/dashboard/StatsCard";
import RateTransactionTable from "../components/coinAgency/RateTransactionTable";
import { useNavigate } from "react-router-dom";

export default function RateTransaction() {
  const navigate = useNavigate();
  return (
    <>
      <div aria-label="rate transaction header" className="mb-5">
        <h2 className="text-xl font-bold">Total Coin Agency</h2>
        <p className="text-md text-[#636363]">
          Monitor and manage active streams
        </p>
      </div>

      <StatsSection data={coinsAgencies} />

      {/* button area */}
      <div className="flex items-center gap-4 bg-[#F4F4F4] w-[45%] px-2 py-1 rounded mt-5">
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
