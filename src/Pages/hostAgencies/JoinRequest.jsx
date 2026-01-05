import PendingJoinRequest from "../../components/hostAgencyPortal/hostDashboard/PendingJoinRequest";
import { BASE_URL, formatNumber } from "../../utility/utility";
import HostStats from "../../components/hostAgencyPortal/hostDashboard/HostStats";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useHost } from "../../context/hostContext";
import useFetch from "../../hooks/useFetch";

export default function JoinRequest() {
  const { dashboardStats } = useHost();
  const stats = dashboardStats?.data;

  const { data, loading, error } = useFetch(
    `${BASE_URL}/agency/host/host-verification/requests?page=1&limit=10`
  );

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
      <PendingJoinRequest data={data} />
    </>
  );
}
