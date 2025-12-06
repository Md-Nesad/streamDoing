import DayMonth from "../components/analytics/DayMonth";
import StatsSection from "../components/dashboard/StatsCard";
import { stats } from "../data/data";
import AnalyticsHostTable from "../components/analytics/AnalyticsHostTable";
import CoinSalesOverview from "../components/analytics/CoinSalesOverview";
import MetricsCard from "../components/analytics/MetricsCard";

export default function Analytics() {
  return (
    <div>
      <DayMonth />
      <StatsSection data={stats} />
      <AnalyticsHostTable />
      <section className="bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] pb-10 pt-1 mt-5 pl-5 pr-7 rounded-md">
        <h3 className="mt-5 mb-6 font-semibold text-[#181717] text-xl">
          Coin Sales Overview
        </h3>
        <CoinSalesOverview />
      </section>
      <MetricsCard />
    </div>
  );
}
