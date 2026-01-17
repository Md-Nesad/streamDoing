import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AllGiftTable from "./AllGiftTable";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";

export default function GiftChildTabs() {
  const { data, loading, error } = useFetch(`${BASE_URL}/gifts/list`);
  return (
    <Tabs>
      <TabList className="flex items-center gap-3 bg-[#F4F4F4] w-full overflow-x-auto hide_scrollbar text-nowrap sm:w-fit px-2 py-1 rounded ml-4">
        <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          Gifts
        </Tab>
        <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          Banner
        </Tab>
        <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          Level
        </Tab>
        <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          Crown
        </Tab>

        <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          Badges
        </Tab>

        <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          Entry
        </Tab>

        <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          Event
        </Tab>

        <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          VIP
        </Tab>
      </TabList>

      <TabPanel>
        <AllGiftTable data={data} loading={loading} error={error} />
      </TabPanel>

      <TabPanel>{/* <RecentGiftActivity data={data} /> */}</TabPanel>

      <TabPanel>{/* <RevenueDistribution /> */}</TabPanel>
    </Tabs>
  );
}
