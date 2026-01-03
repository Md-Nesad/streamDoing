import React from "react";
import StatsSection from "../../components/dashboard/StatsCard";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import MasterSellCoins from "../../components/masterAgencyPortal/masterPortal/MasterSellCoins";
import MasterAgencisOverview from "../../components/masterAgencyPortal/masterPortal/MasterAgencisOverview";

export default function MasterDashboard() {
  const stats = [
    {
      title: "Balance",
      value: "12",
      change: "+245 today",
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Coin Agency",
      value: "34",
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Total Sell",
      value: "12M",
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Avg Sell",
      value: "৳2.4M",
      change: "+18%",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];
  return (
    <div>
      <StatsSection data={stats} />
      <MasterSellCoins />
      <MasterAgencisOverview />
    </div>
  );
}
