import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AllGiftTable from "./AllGiftTable";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import BannerList from "./BannerList";
import LevelList from "./LevelList";
import CrownLists from "./CrownList";
import BadgesLists from "./BadgesLists";
import EntryLists from "./EntryLists";
import EventLists from "./EventLists";
import VIPLists from "./VIPLists";
import { useState } from "react";
import TemplateLists from "./TemplateLists";

export default function GiftChildTabs() {
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

      <TabPanel>
        <LevelList />
      </TabPanel>

      <TabPanel>
        <CrownLists />
      </TabPanel>

      <TabPanel>
        <BadgesLists />
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
    </Tabs>
  );
}
