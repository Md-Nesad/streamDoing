import React from "react";
import StatsSection from "../../dashboard/StatsCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { RadioTower, Users, Wallet } from "lucide-react";
import MasterCoinAgenciesTable from "./MasterCoinAgenciesTable";
import MasterHostAgenciesTable from "./MasterHostAgenciesTable";
import MasterAdminAgenciesTable from "./MasterAdminAgenciesTable";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL, formatNumber } from "../../../utility/utility";
import Loading from "../../Loading";
import Error from "../../Error";

export default function MasterAgenciesTabs() {
  const {
    data: stat,
    loading: statLoading,
    error: statError,
  } = useFetch(`${BASE_URL}/agency/master/dashboard/stats`);

  const { data, loading, error } = useFetch(
    `${BASE_URL}/agency/master/agencies?page=1&limit=50&search=&status=`
  );

  const agencies = [
    {
      title: "Balance",
      value: stat?.balance?.totalCoins,
      change: `+${stat?.balance?.todayBuyCoins} today`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Coin Agency",
      value: stat?.totalCoinAgencies,
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Total Sell",
      value: formatNumber(stat?.totalSale),
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    // {
    //   title: "Avg Sell",
    //   value: "৳" + formatNumber(stat?.averageSale),
    //   change: formatPercent(stat?.saleGrowth),
    //   icon: TrendingUp,
    //   iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    // },
  ];

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <Tabs>
        <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-full sm:w-fit overflow-x-auto px-2 py-1 rounded mb-5 text-nowrap hide_scrollbar">
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Coin Agencies
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Host Agencies
          </Tab>

          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Admin Agencies
          </Tab>
        </TabList>

        <TabPanel>
          <StatsSection data={agencies} />
          <MasterCoinAgenciesTable data={data} />
        </TabPanel>

        <TabPanel>
          <StatsSection data={agencies} />
          <MasterHostAgenciesTable data={data} />
        </TabPanel>

        <TabPanel>
          <StatsSection data={agencies} />
          <MasterAdminAgenciesTable data={data} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
