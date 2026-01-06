import StatsSection from "../../components/dashboard/StatsCard";
import { RadioTower, Users, Wallet } from "lucide-react";
import AgencyPerformance from "../../components/AdminAgenciesComponents/adminDashboard/AgencyPerformance";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber, formatPercent } from "../../utility/utility";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function AdminDashboard() {
  const {
    data: stat,
    loading,
    error,
  } = useFetch(`${BASE_URL}/agency/admin/dashboard/stats`);

  //agency performance data
  const {
    data: performance,
    loading: performanceLoading,
    error: performanceError,
  } = useFetch(
    `${BASE_URL}/agency/admin/dashboard/performance?page=1&limit=20`
  );

  const stats = [
    {
      title: "Active Agency",
      value: stat?.totalActiveAgencies,
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Total Hosts",
      value: stat?.hosts?.totalHosts,
      change: `+${stat?.hosts?.todayTotalHosts} today`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Monthly Diamond",
      value: formatNumber(stat?.diamond?.monthlyDiamond),
      change: formatPercent(stat?.diamond?.diamondGrowth),
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
  ];

  if (loading || performanceLoading) return <Loading />;
  if (error || performanceError) return <Error error={error} />;
  return (
    <>
      <StatsSection data={stats} />
      <AgencyPerformance data={performance} />
    </>
  );
}
