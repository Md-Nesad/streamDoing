import React from "react";
import StatsSection from "../../dashboard/StatsCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { RadioTower, Users, Wallet } from "lucide-react";
import MasterCoinAgenciesTable from "./MasterCoinAgenciesTable";
import MasterHostAgenciesTable from "./MasterHostAgenciesTable";
import MasterAdminAgenciesTable from "./MasterAdminAgenciesTable";

export default function MasterAgenciesTabs() {
  const agencies = [
    {
      title: "Today Sell",
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
    // {
    //   title: "Avg Sell",
    //   value: "৳2.4M",
    //   change: "+18%",
    //   icon: TrendingUp,
    //   iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    // },
  ];
  const adminAgencies = [
    {
      title: "Today Sell",
      value: "12",
      change: "+245 today",
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Admin",
      value: "34",
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    // {
    //   title: "Total Sell",
    //   value: "12M",
    //   change: "",
    //   icon: Wallet,
    //   iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    // },
    // {
    //   title: "Avg Sell",
    //   value: "৳2.4M",
    //   change: "+18%",
    //   icon: TrendingUp,
    //   iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    // },
  ];
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
          <MasterCoinAgenciesTable />
        </TabPanel>

        <TabPanel>
          <StatsSection data={agencies} />
          <MasterHostAgenciesTable />
        </TabPanel>

        <TabPanel>
          <StatsSection data={adminAgencies} />
          <MasterAdminAgenciesTable />
        </TabPanel>
      </Tabs>
    </div>
  );
}
