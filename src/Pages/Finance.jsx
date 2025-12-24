import TitleAndSubTitle from "../adminPanel/components/TitleAndSubTitle";
import StatsSection from "../adminPanel/components/dashboard/StatsCard";
import { financeCard } from "../data/data";
import RevenueChart from "../adminPanel/components/finance/RevenueChart";
import PaymentGatewayChart from "../adminPanel/components/finance/PaymentGatewayChart";
import FinanceTabs from "../adminPanel/components/finance/FinanceTabs";

export default function Finance() {
  return (
    <div>
      <TitleAndSubTitle
        title="Finance & Wallet"
        subtitle="Manage transactions and payouts"
      />
      <StatsSection data={financeCard} />

      <section className="flex flex-col sm:flex-row items-center mt-7 gap-6 mb-6">
        <RevenueChart />
        <PaymentGatewayChart />
      </section>

      <FinanceTabs />
    </div>
  );
}
