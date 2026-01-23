import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import StatsSection from "../../components/dashboard/StatsCard";
import QuickSellCoins from "../../components/coinAgencyPortal/coinDashboard/QuickSellCoins";
import CoinTransactionList from "../../components/coinAgencyPortal/coinDashboard/CoinTransactionList";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber, formatPercent } from "../../utility/utility";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useState } from "react";

export default function CoinDashboard() {
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const {
    data: stats,
    loading,
    error,
  } = useFetch(`${BASE_URL}/agency/coin/dashboard/stats`);

  const {
    data: transactionHistory,
    loading: transactionHistoryLoading,
    error: transactionHistoryError,
  } = useFetch(
    `${BASE_URL}/agency/coin/dashboard/buy-sale-transactions?page=${page}&limit=30&search=&type=`,
    refresh,
  );

  const stat = [
    {
      title: "Total Sell",
      value: formatNumber(stats?.totalSales?.totalCoinSales),
      change: formatPercent(stats?.totalSales?.saleGrowth),
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Today’s Sale",
      value: formatNumber(stats?.dailySales?.todayCoinSales),
      change: formatPercent(stats?.dailySales?.dailyGrowth),
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Total user",
      value: formatNumber(stats?.totalUsers),
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "This Month",
      value: "$" + formatNumber(stats?.thisMonthCoinSalesAmount),
      change: "",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];

  if (loading || transactionHistoryLoading) return <Loading />;
  if (error || transactionHistoryError) return <Error error={error} />;
  return (
    <div>
      <StatsSection data={stat} />
      <QuickSellCoins setRefresh={setRefresh} />
      <CoinTransactionList data={transactionHistory} setPage={setPage} />
    </div>
  );
}
