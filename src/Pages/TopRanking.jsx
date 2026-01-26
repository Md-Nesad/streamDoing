// import DayMonth from "../components/analytics/DayMonth";
import StatsSection from "../components/dashboard/StatsCard";
import AnalyticsHostTable from "../components/analytics/AnalyticsHostTable";
import CoinSalesOverview from "../components/analytics/CoinSalesOverview";
import MetricsCard from "../components/analytics/MetricsCard";
import useFetch from "../hooks/useFetch";
import {
  BASE_URL,
  formatNumber,
  formatStreamingHours,
} from "../utility/utility";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TopPerformanceAgency from "../components/analytics/TopPerformanceAgency";
import { useState } from "react";

export default function TopRanking() {
  const [page, setPage] = useState(1);
  const [pagetwo, setPagetwo] = useState(1);

  // UI control
  const [selectedRange, setSelectedRange] = useState("");

  // API control
  const [timeRange, setTimeRange] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleRangeClick = (range) => {
    setSelectedRange(range);

    if (range !== "custom") {
      setTimeRange(range);
      setStartDate("");
      setEndDate("");
      setPage(1);
    }
  };

  const handleApplyCustom = () => {
    if (!startDate || !endDate) return;
    setTimeRange("custom");
    setPage(1);
  };

  const query =
    timeRange === "custom"
      ? `timeRange=custom&startDate=${startDate}&endDate=${endDate}`
      : `timeRange=${timeRange}&startDate=&endDate=`;

  const analyticsStats = useFetch(`${BASE_URL}/admin/analytics/stats?${query}`);

  const topHosts = useFetch(
    `${BASE_URL}/admin/analytics/top-performing-hosts?${query}&limit=20&page=${page}`,
  );

  const topPerformanceAgency = useFetch(
    `${BASE_URL}/admin/analytics/top-agencies?${query}&limit=20&page=${pagetwo}`,
  );

  const coinSalesOverview = useFetch(
    `${BASE_URL}/admin/analytics/coin-sales-overview`,
  );

  const usersMetrics = useFetch(
    `${BASE_URL}/admin/analytics/user-engagement-matrix`,
  );

  //handling loading and error
  const loading = analyticsStats.loading || topHosts.loading;
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
      value:
        "$" + formatNumber(analyticsStats?.data?.totalRevenue?.totalRevenue),
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
      value: formatStreamingHours(analyticsStats?.data?.totalStrimingHours),
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
      <div className="flex gap-2 mb-4">
        {["today", "week", "month", "custom"].map((range) => (
          <button
            key={range}
            onClick={() => handleRangeClick(range)}
            className={`px-4 py-1 rounded border capitalize ${
              selectedRange === range
                ? "bg-black text-white opacity-60"
                : "border-gray-300"
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Custom Date Inputs (UI only) */}
      {selectedRange === "custom" && (
        <div className="flex gap-3 mb-5 items-center">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border px-3 py-1 rounded"
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border px-3 py-1 rounded"
          />

          <button
            disabled={!startDate || !endDate}
            onClick={handleApplyCustom}
            className="px-4 py-1 rounded bg-black text-white disabled:opacity-60"
          >
            Apply
          </button>
        </div>
      )}

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
          <AnalyticsHostTable data={topHosts} setPage={setPage} />
        </TabPanel>

        <TabPanel>
          <TopPerformanceAgency
            data={topPerformanceAgency}
            setPage={setPagetwo}
          />
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
