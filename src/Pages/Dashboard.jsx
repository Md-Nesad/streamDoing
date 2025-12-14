import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import AgenciesTable from "../components/dashboard/AgenciesTable";
import LiveStat from "../components/dashboard/LiveState";
import StatsSection from "../components/dashboard/StatsCard";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";
import Error from "../components/Error";

const API = import.meta.env.VITE_API_BASE_URL;

export default function Dashboard() {
  const summary = useFetch(`${API}/dashboard/summary`);
  const liveStats = useFetch(`${API}/dashboard/live-stats`);
  // const agencies = useFetch(`${API}/dashboard/agencies`);

  const loading = summary.loading || liveStats.loading;

  const error = summary.error || liveStats.error;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const data = summary.data;

  const dashboardStats = [
    {
      title: "Total Users",
      value: data?.users?.total,
      change: `+${data?.coinAgencies?.today} today`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Host Agencies",
      value: data?.hostAgencies?.total,
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Coin Agencies",
      value: data?.coinAgencies?.total,
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Platform Revenue",
      value: data?.platformRevenue,
      change: `${data?.revenueGrowthPercent}%`,
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];

  return (
    <>
      <section>
        <StatsSection data={dashboardStats} />
      </section>

      {/* Live stats */}
      <section className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] pb-10 pt-1 mt-7 pl-5 pr-7 rounded-md">
        <h3 className="mt-5 mb-6 font-semibold text-[#181717] text-xl">
          Live Platform Stats
        </h3>
        <LiveStat data={liveStats.data} />
      </section>

      {/* Agencies table */}
      <AgenciesTable />
    </>
  );
}
