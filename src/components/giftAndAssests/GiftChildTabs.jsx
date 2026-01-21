import React, { lazy, Suspense, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
// import LevelTabs from "./LevelTabs";
import TopPerformanceLoading from "../TopPerformanceLoading";
const AllGiftTable = lazy(() => import("./AllGiftTable"));
const BannerList = lazy(() => import("./BannerList"));
// const LevelList = lazy(() => import("./LevelList"));
const CrownLists = lazy(() => import("./CrownList"));
const BadgesLists = lazy(() => import("./BadgesLists"));
const FrameLists = lazy(() => import("./FrameLists"));
const TemplateLists = lazy(() => import("./TemplateLists"));
const EntryLists = lazy(() => import("./EntryLists"));
const EventLists = lazy(() => import("./EventLists"));
const VIPLists = lazy(() => import("./VIPLists"));

function GiftChildTabs() {
  const [refresh, setRefresh] = useState(false);
  const { data, loading, error } = useFetch(`${BASE_URL}/gifts/list`, refresh);

  return (
    <Tabs>
      <TabList className="flex items-center gap-3 bg-[#F4F4F4] w-full overflow-x-auto hide_scrollbar text-nowrap sm:w-fit px-2 py-1 rounded ml-5">
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
        {/* <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          Level
        </Tab> */}
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
          Frame
        </Tab>

        <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          Template
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

      <Suspense fallback={<TopPerformanceLoading length={5} />}>
        <TabPanel>
          <AllGiftTable
            data={data}
            loading={loading}
            error={error}
            setRefresh={setRefresh}
          />
        </TabPanel>

        <TabPanel>
          <BannerList />
        </TabPanel>

        {/* <TabPanel>
          <LevelTabs />
        </TabPanel> */}

        <TabPanel>
          <CrownLists />
        </TabPanel>

        <TabPanel>
          <BadgesLists />
        </TabPanel>

        <TabPanel>
          <FrameLists />
        </TabPanel>

        <TabPanel>
          <TemplateLists />
        </TabPanel>

        <TabPanel>
          <EntryLists />
        </TabPanel>

        <TabPanel>
          <EventLists />
        </TabPanel>

        <TabPanel>
          <VIPLists />
        </TabPanel>
      </Suspense>
    </Tabs>
  );
}
export default GiftChildTabs;
