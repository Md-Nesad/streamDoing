import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StatsSection from "../dashboard/StatsCard";
import CoinSenderTable from "./CoinSenderTable";
import GiftingTable from "./GiftingTable";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber, formatPercent } from "../../utility/utility";
import Loading from "../Loading";
import Error from "../Error";
import { TrendingUp, Users, Wallet } from "lucide-react";
import { useState } from "react";

export default function TransactionTabs() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/transactions/history?page=${page}&limit=20&status=completed&sortBy=createdAt&sortOrder=desc`
  );

  const statsSummary = data?.summary;
  // const giftData = gifting?.data?.summary;
  // const giftData = gifting?.data;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const coinSender = [
    {
      title: "Total Coins",
      value: formatNumber(statsSummary?.totalCoins),
      change: `+${statsSummary?.transactionCount} this month`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Coin Sales",
      value: formatNumber(statsSummary?.totalAmount),
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Avg Commission",
      value: formatPercent(statsSummary?.avgRate),
      change: "",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];

  return (
    <Tabs>
      <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-fit px-2 py-1 rounded mb-5">
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Coin Sender
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Gifting
        </Tab>
      </TabList>

      <TabPanel>
        <StatsSection data={coinSender} />
        <CoinSenderTable tableData={data} setPage={setPage} />
      </TabPanel>

      <TabPanel>
        <StatsSection data={coinSender} />
        <GiftingTable />
      </TabPanel>
    </Tabs>
  );
}
