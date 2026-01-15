import StatsSection from "../../components/dashboard/StatsCard";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import MasterSellCoins from "../../components/masterAgencyPortal/masterPortal/MasterSellCoins";
import MasterAgencisOverview from "../../components/masterAgencyPortal/masterPortal/MasterAgencisOverview";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber, formatPercent } from "../../utility/utility";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function MasterDashboard() {
  const {
    data: stat,
    loading: statLoading,
    error: statError,
  } = useFetch(`${BASE_URL}/agency/master/dashboard/stats`);

  //agencies overview
  const {
    data: agenciesOverview,
    loading: agenciesOverviewLoading,
    error: agenciesOverviewError,
  } = useFetch(
    `${BASE_URL}/agency/master/dashboard/coin-agencies?page=1&limit=20`
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

  const loading = statLoading || agenciesOverviewLoading;
  const error = statError || agenciesOverviewError;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <StatsSection data={stats} />
      <MasterSellCoins />
      <MasterAgencisOverview data={agenciesOverview} />
    </div>
  );
}
