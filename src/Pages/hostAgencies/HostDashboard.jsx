import HostList from "../../components/hostAgencyPortal/hostDashboard/HostList";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber } from "../../utility/utility";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import HostStats from "../../components/hostAgencyPortal/hostDashboard/HostStats";
// import { useHost } from "../../context/hostContext";

export default function HostDashboard() {
  // Fetch dashboard statistics
  const dashboardStats = useFetch(`${BASE_URL}/agency/host/dashboard/stats`);
  const stats = dashboardStats?.data;

  //fetch host list
  const hosts = useFetch(
    `${BASE_URL}/agency/host/dashboard/hosts?page=1&limit=20&search=`
  );
  const hostList = hosts?.data;

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

  const loading = dashboardStats?.loading || hosts?.loading;
  const error = dashboardStats?.error || hosts?.error;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      <HostStats data={dashboardStat} />
      <HostList data={hostList} />
    </div>
  );
}
