import StatsSection from "../components/dashboard/StatsCard";
import GiftCategories from "../components/giftAndAssests/GiftCategories";
import GiftTabs from "../components/giftAndAssests/GiftTabs";
import { Clock, Gem, MonitorPlay, TrendingUp } from "lucide-react";
import useFetch from "../hooks/useFetch";
import { BASE_URL, formatNumber } from "../utility/utility";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function GiftAndAssests() {
  const { data, loading, error } = useFetch(
    `${BASE_URL}/gifts/category-wise-gifts`
  );

  const {
    data: state,
    loading: stateLoading,
    error: stateError,
  } = useFetch(`${BASE_URL}/admin/gift-stats`);

  const giftsSummary = [
    {
      title: "Total Gifts",
      value: state?.totalGifts,
      change: `+${state?.thisMonthTotalGifts} this month`,
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#0FC72A] to-[#08A62A]",
    },
    {
      title: "Total Revenue",
      value: formatNumber(state?.totalRevenue),
      change: `+${formatNumber(state?.todayTotalRevenue)} today`,
      icon: MonitorPlay,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1] opacity-80",
    },
    {
      title: "Total Uses",
      value: formatNumber(state?.totalUsers),
      change: "",
      icon: Gem,
      iconBg: "bg-gradient-to-b from-[#CF0D13] to-[#FF30C1]",
    },
    {
      title: "Top Gift",
      value: formatNumber(state?.topGift),
      change: "",
      icon: Clock,
      iconBg: "bg-gradient-to-b from-[#1931B8] to-[#6624FF] opacity-60",
    },
  ];

  if (loading || stateLoading) return <Loading />;
  if (error || stateError) return <Error error={error} />;
  return (
    <div>
      <StatsSection data={giftsSummary} />

      <section className="bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] pb-10 pt-1 mt-7 pl-3 sm:pl-5 sm:pr-7 pr-3 rounded-md mb-5">
        <h3 className="mt-5 mb-6 font-semibold text-[#181717] text-xl">
          Gift Categories
        </h3>
        <GiftCategories data={data} />
      </section>

      <GiftTabs />
    </div>
  );
}
