import React, { lazy, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import RecentGiftActivity from "./RecentGiftActivity";
import RevenueDistribution from "./RevenueDistribution";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import LevelTabs from "./LevelTabs";
import GiftChildTabs from "./GiftChildTabs";

export default function GiftTabs() {
  const [page, setPage] = useState(1);
  const { data } = useFetch(`${BASE_URL}/gifts/list?${page}`);

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
          Level
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
        <LevelTabs />
      </TabPanel>

      <TabPanel>
        <RecentGiftActivity data={data} page={page} />
      </TabPanel>

      <TabPanel>
        <RevenueDistribution />
      </TabPanel>
    </Tabs>
  );
}
