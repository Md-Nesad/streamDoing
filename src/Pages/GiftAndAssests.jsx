import StatsSection from "../components/dashboard/StatsCard";
import GiftCategories from "../components/giftAndAssests/GiftCategories";
import GiftTabs from "../components/giftAndAssests/GiftTabs";
import { Clock, Gem, MonitorPlay, TrendingUp } from "lucide-react";

export default function GiftAndAssests() {
  const giftsSummary = [
    {
      title: "Total Gifts",
      value: "12",
      change: "+3 this month",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#0FC72A] to-[#08A62A]",
    },
    {
      title: "Total Revenue",
      value: "2.5M",
      change: "+125k today",
      icon: MonitorPlay,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1] opacity-80",
    },
    {
      title: "Total Uses",
      value: "8.4M",
      change: "",
      icon: Gem,
      iconBg: "bg-gradient-to-b from-[#CF0D13] to-[#FF30C1]",
    },
    {
      title: "Top Gift",
      value: "৳12.8M",
      change: "",
      icon: Clock,
      iconBg: "bg-gradient-to-b from-[#1931B8] to-[#6624FF] opacity-60",
    },
  ];
  return (
    <div>
      <StatsSection data={giftsSummary} />

      <section className="bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] pb-10 pt-1 mt-7 pl-3 sm:pl-5 sm:pr-7 pr-3 rounded-md mb-5">
        <h3 className="mt-5 mb-6 font-semibold text-[#181717] text-xl">
          Gift Categories
        </h3>
        <GiftCategories />
      </section>

      <GiftTabs />
    </div>
  );
}
