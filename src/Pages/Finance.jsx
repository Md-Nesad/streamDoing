import TitleAndSubTitle from "../components/TitleAndSubTitle";
import StatsSection from "../components/dashboard/StatsCard";
import RevenueChart from "../components/finance/RevenueChart";
import PaymentGatewayChart from "../components/finance/PaymentGatewayChart";
import FinanceTabs from "../components/finance/FinanceTabs";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utility/utility";
import { Users, Wallet } from "lucide-react";
import { Coin } from "../../public/icons/Coin";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Finance() {
  const financeSummary = useFetch(`${BASE_URL}/admin/finance/summary-report`);
  const revenueChart = useFetch(
    `${BASE_URL}/admin/finance/revenue-vs-expense-chart-report`
  );

  const loading = financeSummary.loading;
  const error = financeSummary.error;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const financeCard = [
    {
      title: "Total Users",
      value: financeSummary?.data?.users?.totalUsers,
      change: `+${financeSummary?.data?.users?.currentMonthTotalUsers} this month`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Active Host",
      value: financeSummary?.data?.hosts?.totalActiveHosts,
      change: `+${financeSummary?.data?.hosts?.todayTotalActiveHosts} today`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Coin Purchases",
      value: "$" + financeSummary?.data?.totalCoinPurchase,
      change: "This month",
      icon: Wallet,
      iconBg: "bg-gradient-to-tl from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "$ Net Profit",
      value: "$" + financeSummary?.data?.netProfit,
      change: "After expenses",
      icon: Coin,
      iconBg: "bg-gradient-to-b from-[#1931B8] to-[#61B3BF]",
    },
  ];
  return (
    <div>
      <TitleAndSubTitle
        title="Finance & Wallet"
        subtitle="Manage transactions and payouts"
      />
      <StatsSection data={financeCard} />

      <section className="flex flex-col sm:flex-row items-center mt-7 gap-6 mb-6">
        <RevenueChart apiData={revenueChart?.data?.data} />
        <PaymentGatewayChart />
      </section>

      <FinanceTabs />
    </div>
  );
}
