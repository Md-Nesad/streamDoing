import React, { lazy } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import RecentGiftActivity from "./RecentGiftActivity";
import RevenueDistribution from "./RevenueDistribution";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
const GiftChildTabs = lazy(() => import("./GiftChildTabs"));

export default function GiftTabs() {
  const { data } = useFetch(`${BASE_URL}/gifts/list`);

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
        <GiftChildTabs />
      </TabPanel>

      <TabPanel>
        <RecentGiftActivity data={data} />
      </TabPanel>

      <TabPanel>
        <RevenueDistribution />
      </TabPanel>
    </Tabs>
  );
}
