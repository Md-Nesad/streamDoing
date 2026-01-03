import React from "react";
import StatsSection from "../../dashboard/StatsCard";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";

export default function HostStats() {
  const stats = [
    {
      title: "Total Hosts",
      value: "12",
      change: "+245 today",
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Active Now",
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
    {
      title: "Total Earnings",
      value: "৳2.4M",
      change: "+18%",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];
  return (
    <div className="mb-6">
      <StatsSection data={stats} />
    </div>
  );
}
