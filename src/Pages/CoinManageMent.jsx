import StatsSection from "../components/dashboard/StatsCard";
// import CoinAgencyTable from "../components/coinAgency/CoinAgencyTable";
// import SellCoins from "../components/coinAgency/SellCoins";
import TabsSection from "../components/coinAgency/Tabs";
import useFetch from "../hooks/useFetch";
import { BASE_URL, formatNumber } from "../utility/utility";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function CoinManageMent() {
  const { data, loading, error } = useFetch(`${BASE_URL}/coins/stats`);
  const coinsAgencies = [
    {
      title: "Total Agencies",
      value: data?.agencies?.total,
      change: `+${data?.agencies?.thisMonth} this month`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Coins Sold",
      value: formatNumber(data?.coinsSold?.total),
      change: `+${data?.coinsSold?.today} today`,
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Active Balance",
      value: formatNumber(data?.activeBalanceAgencies),
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Total Revenue",
      value: "৳" + formatNumber(data?.revenue?.total),
      change: "",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <StatsSection data={coinsAgencies} />
      <TabsSection />
      {/* <SellCoins />
      <CoinAgencyTable /> */}
    </div>
  );
}
