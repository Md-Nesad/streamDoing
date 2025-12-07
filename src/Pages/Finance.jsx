import React from "react";
import TitleAndSubTitle from "../components/TitleAndSubTitle";
import StatsSection from "../components/dashboard/StatsCard";
import { financeCard } from "../data/data";
import RevenueChart from "../components/finance/RevenueChart";
import PaymentGatewayChart from "../components/finance/PaymentGatewayChart";
import FinanceTabs from "../components/finance/FinanceTabs";

export default function Finance() {
  return (
    <div>
      <TitleAndSubTitle
        title="Finance & Wallet"
        subtitle="Manage transactions and payouts"
      />
      <StatsSection data={financeCard} />

      <section className="flex items-center mt-7 gap-6 mb-6">
        <RevenueChart />
        <PaymentGatewayChart />
      </section>

      <FinanceTabs />
    </div>
  );
}
