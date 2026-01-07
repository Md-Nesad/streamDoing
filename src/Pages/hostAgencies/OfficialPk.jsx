import HostStats from "../../components/hostAgencyPortal/hostDashboard/HostStats";
import HostPortalForm from "../../components/hostAgencyPortal/hostDashboard/HostPortalForm";
import OfficialPkList from "../../components/hostAgencyPortal/hostDashboard/OfficialPkList";
// import { useHost } from "../../context/hostContext";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import { BASE_URL, formatNumber } from "../../utility/utility";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function OfficialPk() {
  const {
    data: dashboardStats,
    loading,
    error,
  } = useFetch(`${BASE_URL}/agency/host/dashboard/stats`);
  const stats = dashboardStats;

  const dashboardStat = [
    {
      title: "Total Hosts",
      value: stats?.host?.totalHosts,
      change: `+${stats?.host?.todayHosts} Today`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Active Now",
      value: stats?.activeNowHosts,
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Monthly Diamond",
      value: formatNumber(stats?.diamonds?.monthlyDiamonds),
      change: `${stats?.diamonds?.growth}%`,
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Total Earnings",
      value: "৳" + formatNumber(stats?.totalEarnings),
      change: "",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <>
      <HostStats data={dashboardStat} />
      <HostPortalForm />
      <OfficialPkList />
    </>
  );
}
