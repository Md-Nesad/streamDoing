import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import StatsSection from "../../components/dashboard/StatsCard";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";
import AllTicketsList from "../../components/supportTeamPortal/SupportDashboardComponents/AllTicketsList";

export default function SupportDashboard() {
  const stats = [
    {
      title: "Open Tickets",
      value: "12",
      change: "+245 today",
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Pending",
      value: "34",
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Resolved Today",
      value: "12M",
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Avg Response Time",
      value: "৳2.4M",
      change: "+18%",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];
  return (
    <>
      <TitleAndSubTitle
        title="Agency Management"
        subtitle="Manage and resolve user issues efficiently"
      />

      <StatsSection data={stats} />

      <AllTicketsList />
    </>
  );
}
