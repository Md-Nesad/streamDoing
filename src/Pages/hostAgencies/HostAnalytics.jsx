import StatsSection from "../../components/dashboard/StatsCard";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import HostPerformanceList from "../../components/hostAgencyPortal/hostDashboard/HostPerformanceList";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber } from "../../utility/utility";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useEffect } from "react";

export default function HostAnalytics() {
  const dashboardStat = useFetch(`${BASE_URL}/agency/host/analytics/stats`);
  const stat = dashboardStat?.data;

  const loading = dashboardStat?.loading;
  const error = dashboardStat?.error;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const stats = [
    {
      title: "Total Diamonds",
      value: stat?.totalDiamonds,
      change: "",
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Active Now",
      value: stat?.totalActiveNow,
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Avg Diamonds/Host",
      value: formatNumber(stat?.avgDiamondsPerHost),
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Avg Minutes/Host",
      value: "৳" + formatNumber(stat?.avgMinutesPerHost),
      change: "-",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];

  return (
    <div>
      <StatsSection data={stats} />
      <HostPerformanceList />
    </div>
  );
}
