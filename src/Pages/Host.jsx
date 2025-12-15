import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import StatsSection from "../components/dashboard/StatsCard";
import HostTable from "../components/host/HostTable";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const API = import.meta.env.VITE_API_BASE_URL;

export default function Host() {
  const host = useFetch(`${API}/dashboard/host-stats`);

  const data = host.data;
  const loading = host.loading;
  const error = host.error;

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
      value: data?.totalDiamonds + "M",
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Total Beans",
      value: data?.totalBeans + "K",
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Platform Revenue",
      value: data?.platFormRevenue + "M",
      change: "+" + data?.revenueGrowth + " %" || "0 %",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];
  return (
    <div>
      <StatsSection data={hosts} />
      <HostTable />
    </div>
  );
}
