import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AllGiftTable from "./AllGiftTable";
import RecentGiftActivity from "./RecentGiftActivity";
import RevenueDistribution from "./RevenueDistribution";

export default function GiftTabs() {
  return (
    <Tabs>
      <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-full overflow-x-auto hide_scrollbar text-nowrap sm:w-fit px-2 py-1 rounded mb-4">
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          All Gifts
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Real Time Tracking
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Revenue Share
        </Tab>
      </TabList>

      <TabPanel>
        <AllGiftTable />
      </TabPanel>

      <TabPanel>
        <RecentGiftActivity />
      </TabPanel>

      <TabPanel>
        <RevenueDistribution />
      </TabPanel>
    </Tabs>
  );
}
