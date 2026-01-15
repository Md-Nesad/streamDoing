import React from "react";
import StatsSection from "../../components/dashboard/StatsCard";
import CoinTransactionList from "../../components/coinAgencyPortal/coinDashboard/CoinTransactionList";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber, formatPercent } from "../../utility/utility";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function MasterTransactionHistory() {
  const {
    data: stat,
    loading: statLoading,
    error: statError,
  } = useFetch(`${BASE_URL}/agency/master/dashboard/stats`);

  //transaction history
  const {
    data: transactionHistory,
    loading: transactionHistoryLoading,
    error: transactionHistoryError,
  } = useFetch(
    `${BASE_URL}/agency/master/transaction-history?page=1&limit=20&search=Coin`
  );

  const stats = [
    {
      title: "Balance",
      value: formatNumber(stat?.balance?.totalCoins),
      change: `+${stat?.balance?.todayBuyCoins} today`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Coin Agency",
      value: stat?.totalCoinAgencies,
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Total Sell",
      value: formatNumber(stat?.totalSale),
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Avg Sell",
      value: "৳" + formatNumber(stat?.averageSale),
      change: formatPercent(stat?.saleGrowth),
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];

  const loading = statLoading || transactionHistoryLoading;
  const error = statError || transactionHistoryError;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <StatsSection data={stats} />
      <CoinTransactionList data={transactionHistory} />
    </div>
  );
}
