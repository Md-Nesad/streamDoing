import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import StatsSection from "../components/dashboard/StatsCard";
import HostTable from "../components/host/HostTable";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { BASE_URL, formatNumber } from "../utility/utility";

export default function Host() {
  const host = useFetch(`${BASE_URL}/dashboard/host-stats`);
  const hostList = useFetch(`${BASE_URL}/dashboard/hosts?page=1&limit=10`);

  const data = host.data;
  const hostListData = hostList?.data;
  const loading = host.loading || hostList.loading;
  const error = host.error || hostList.error;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const hosts = [
    {
      title: "Total Host",
      value: data?.totalHosts,
      change: "+" + data?.todayTotalHosts + " today",
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Diamonds",
      value: formatNumber(data?.totalDiamonds),
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Total Beans",
      value: formatNumber(data?.totalBeans),
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Platform Revenue",
      value: "৳" + formatNumber(data?.platFormRevenue),
      change: `+${data?.revenueGrowth}%`,
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];
  return (
    <div>
      <StatsSection data={hosts} />
      <HostTable hostListData={hostListData} />
    </div>
  );
}
