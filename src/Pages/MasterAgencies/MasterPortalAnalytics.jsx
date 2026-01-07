import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import StatsSection from "../../components/dashboard/StatsCard";
import CoinSalesOverview from "../../components/analytics/CoinSalesOverview";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber } from "../../utility/utility";
import MasterHostPerformance from "../../components/masterAgencyPortal/masterPortal/MasterHostPerformance";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function MasterPortalAnalytics() {
  //analytics stats
  const {
    data: stat,
    loading: statLoading,
    error: statError,
  } = useFetch(`${BASE_URL}/agency/master/analytics/stats`);

  //coin sales overview
  const {
    data: coinSalesOverview,
    loading: overviewLoading,
    error: overviewError,
  } = useFetch(`${BASE_URL}/agency/master/analytics/coin-sales-overview`);

  //coin agencies performance
  const {
    data: coinAgenciesPerformance,
    loading: coinAgenciesPerformanceLoading,
    error: coinAgenciesPerformanceError,
  } = useFetch(
    `${BASE_URL}/agency/master/analytics/coin-agencies-performance?page=1&limit=10`
  );

  //loading
  const loading =
    statLoading || overviewLoading || coinAgenciesPerformanceLoading;

  //error
  const error = statError || overviewError || coinAgenciesPerformanceError;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const stats = [
    {
      title: "Total Transactions",
      value: stat?.totalTransactions,
      change: "",
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Amount Sent",
      value: stat?.totalAmountSent,
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Total Coin Sent",
      value: formatNumber(stat?.totalCoinsSent),
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Total Avalable Coins",
      value: formatNumber(stat?.totalAvailableCoins),
      change: "-",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];
  return (
    <div>
      <StatsSection data={stats} />

      {/* data based on date */}
      {/* <div className="flex gap-2 sm:gap-4 my-5">
        <button
          onClick={() => setSelectedDate("Today")}
          className="py-1 px-2 sm:px-4 text-nowrap max-sm:text-sm rounded border border-[#CCCCCC] text-[#181717]"
        >
          Today
        </button>

        <button
          onClick={() => setSelectedDate("Week")}
          className="py-1 px-2 sm:px-4 text-nowrap max-sm:text-sm rounded border border-[#CCCCCC] text-[#181717]"
        >
          Week
        </button>

        <button
          onClick={() => setSelectedDate("Month")}
          className="py-1 px-2 sm:px-4 text-nowrap max-sm:text-sm rounded border border-[#CCCCCC] text-[#181717]"
        >
          Month
        </button>

        <button className="py-1 px-2 sm:px-4 text-nowrap max-sm:text-sm rounded border border-[#CCCCCC] text-[#181717]">
          Custom
        </button>
      </div> */}
      {/* coin sales overview */}
      <section className="bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] pb-10 pt-1 mt-6 pl-3 sm:pl-5 sm:pr-7 pr-3 rounded-md">
        <h3 className="mt-5 mb-6 font-semibold text-[#181717] text-xl">
          Coin Sales Overview
        </h3>
        <CoinSalesOverview data={coinSalesOverview} />
      </section>

      <MasterHostPerformance data={coinAgenciesPerformance} />
    </div>
  );
}
