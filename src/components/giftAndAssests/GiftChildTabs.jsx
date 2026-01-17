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

export default function GiftChildTabs() {
  const { data, loading, error } = useFetch(`${BASE_URL}/gifts/list`);
  const { data: bannerData } = useFetch(`${BASE_URL}/banner`);
  const { data: levelData } = useFetch(`${BASE_URL}/level`);
  const { data: crownData } = useFetch(`${BASE_URL}/crowns`);
  const { data: badgesData } = useFetch(`${BASE_URL}/badges`);
  const { data: entryData } = useFetch(`${BASE_URL}/entries`);
  const { data: eventData } = useFetch(`${BASE_URL}/events`);
  const { data: vipData } = useFetch(`${BASE_URL}/vips`);

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

      <TabPanel>
        <BannerList data={bannerData} loading={loading} error={error} />
      </TabPanel>

      <TabPanel>
        <LevelList data={levelData} loading={loading} error={error} />
      </TabPanel>

      <TabPanel>
        <CrownLists data={crownData} loading={loading} error={error} />
      </TabPanel>

      <TabPanel>
        <BadgesLists data={badgesData} loading={loading} error={error} />
      </TabPanel>

      <TabPanel>
        <EntryLists data={entryData} loading={loading} error={error} />
      </TabPanel>

      <TabPanel>
        <EventLists data={eventData} loading={loading} error={error} />
      </TabPanel>

      <TabPanel>
        <VIPLists data={vipData} loading={loading} error={error} />
      </TabPanel>
    </Tabs>
  );
}
