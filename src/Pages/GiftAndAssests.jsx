import React from "react";
import StatsSection from "../components/dashboard/StatsCard";
import { coinsAgencies } from "../data/data";
import GiftCategories from "../components/giftAndAssests/GiftCategories";
import GiftTabs from "../components/giftAndAssests/GiftTabs";

export default function GiftAndAssests() {
  return (
    <div>
      <StatsSection data={coinsAgencies} />

      <section className="bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] pb-10 pt-1 mt-7 pl-3 sm:pl-5 sm:pr-7 pr-3 rounded-md mb-5">
        <h3 className="mt-5 mb-6 font-semibold text-[#181717] text-xl">
          Gift Categories
        </h3>
        <GiftCategories />
      </section>

      <GiftTabs />
    </div>
  );
}
