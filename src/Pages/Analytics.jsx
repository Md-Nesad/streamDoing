import DayMonth from "../adminPanel/components/analytics/DayMonth";
import StatsSection from "../adminPanel/components/dashboard/StatsCard";
import { stats } from "../data/data";
import AnalyticsHostTable from "../adminPanel/components/analytics/AnalyticsHostTable";
import CoinSalesOverview from "../adminPanel/components/analytics/CoinSalesOverview";
import MetricsCard from "../adminPanel/components/analytics/MetricsCard";

export default function Analytics() {
  return (
    <div>
      <DayMonth />
      <StatsSection data={stats} />
      <AnalyticsHostTable />
      <section className="bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] pb-10 pt-1 mt-5 pl-3 sm:pl-5 sm:pr-7 pr-3 rounded-md">
        <h3 className="mt-5 mb-6 font-semibold text-[#181717] text-xl">
          Coin Sales Overview
        </h3>
        <CoinSalesOverview />
      </section>
      <MetricsCard />
    </div>
  );
}
