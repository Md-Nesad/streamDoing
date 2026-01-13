// import DayMonth from "../components/analytics/DayMonth";
import StatsSection from "../components/dashboard/StatsCard";
import AnalyticsHostTable from "../components/analytics/AnalyticsHostTable";
import CoinSalesOverview from "../components/analytics/CoinSalesOverview";
import MetricsCard from "../components/analytics/MetricsCard";
import useFetch from "../hooks/useFetch";
import { BASE_URL, formatNumber } from "../utility/utility";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TopPerformanceAgency from "../components/analytics/TopPerformanceAgency";
import { useState } from "react";

export default function Analytics() {
  const [page, setPage] = useState(1);
  //analytics stats
  const analyticsStats = useFetch(
    `${BASE_URL}/admin/analytics/stats?timeRange=custom&startDate=2025-10-10&endDate=2025-12-30`
  );
  //top hosts
  const topHosts = useFetch(`${BASE_URL}/admin/analytics/top-performing-hosts`);

  //top performing agency
  const topPerformanceAgency = useFetch(
    `${BASE_URL}/admin/analytics/top-agencies?limit=15&page=${page}`
  );

  //coin sales overview
  const coinSalesOverview = useFetch(
    `${BASE_URL}/admin/analytics/coin-sales-overview`
  );
  //users metrics
  const usersMetrics = useFetch(
    `${BASE_URL}/admin/analytics/user-engagement-matrix`
  );
  //handling loading and error
  const loading = analyticsStats.loading;
  const error =
    analyticsStats.error ||
    topHosts.error ||
    coinSalesOverview.error ||
    usersMetrics.error;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  //analytics stats data in variables
  const stats = [
    {
      title: "Total Revenue",
      value: formatNumber(analyticsStats?.data?.totalRevenue?.totalRevenue),
      change: "",
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Active Streams",
      value: analyticsStats?.data?.activeStreamsCount,
      change: "-",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Striming Hours",
      value: analyticsStats?.data?.totalStrimingHours.toFixed(3),
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Diamond Earned",
      value: formatNumber(analyticsStats?.data?.totalDiamondEarned),
      change: "-",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];
  return (
    <div>
      {/* <DayMonth /> */}
      <StatsSection data={stats} />

      {/* top performance host and agency tab */}
      <Tabs className="mt-5">
        <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-full sm:w-fit overflow-x-auto px-2 py-1 rounded mb-5 text-nowrap hide_scrollbar">
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Hosts
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Agency
          </Tab>
        </TabList>

        <TabPanel>
          <AnalyticsHostTable data={topHosts} />
        </TabPanel>

        <TabPanel>
          <TopPerformanceAgency data={topPerformanceAgency} setPage={setPage} />
        </TabPanel>
      </Tabs>

      <section className="bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] pb-10 pt-1 mt-5 pl-3 sm:pl-5 sm:pr-7 pr-3 rounded-md">
        <h3 className="mt-5 mb-6 font-semibold text-[#181717] text-xl">
          Coin Sales Overview
        </h3>
        <CoinSalesOverview data={coinSalesOverview} />
      </section>

      <MetricsCard data={usersMetrics} />
    </div>
  );
}
