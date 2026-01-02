import React from "react";
import StatsSection from "../../components/dashboard/StatsCard";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import AgencyPerformance from "../../components/AdminAgenciesComponents/adminDashboard/AgencyPerformance";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Active Agency",
      value: "12",
      change: "+245 today",
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Hosts",
      value: "34",
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Monthly Diamond",
      value: "12M",
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    // {
    //   title: "Platform Revenue",
    //   value: "৳2.4M",
    //   change: "+18%",
    //   icon: TrendingUp,
    //   iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    // },
  ];
  return (
    <>
      <StatsSection data={stats} />
      <AgencyPerformance />
    </>
  );
}
