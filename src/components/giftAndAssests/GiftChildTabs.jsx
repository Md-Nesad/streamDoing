import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import AllGiftTable from "./AllGiftTable";
import BannerList from "./BannerList"; // const LevelList from "./LevelList"));onst CrownLists from "./CrownList"));onst BadgesLists from "./BadgesLists")
import FrameLists from "./FrameLists";
import TemplateLists from "./TemplateLists";
import EntryLists from "./EntryLists";
import EventLists from "./EventLists";
import VIPLists from "./VIPLists";
import CrownLists from "./CrownList";
import BadgesLists from "./BadgesLists";

function GiftChildTabs() {
  const [refresh, setRefresh] = useState(false);
  const { data, loading, error } = useFetch(`${BASE_URL}/gifts/list`, refresh);
  const { data: badges } = useFetch(`${BASE_URL}/badges`, refresh);
  const { data: banners } = useFetch(`${BASE_URL}/banner`, refresh);
  const { data: crowns } = useFetch(`${BASE_URL}/crowns`, refresh);
  const { data: frames } = useFetch(
    `${BASE_URL}/frames?search=&page=1&limit=20`,
    refresh,
  );
  const { data: templates } = useFetch(
    `${BASE_URL}/template?search=&page=1&limit=20`,
    refresh,
  );
  const { data: entries } = useFetch(`${BASE_URL}/entries`, refresh);
  const { data: events } = useFetch(`${BASE_URL}/events`, refresh);
  const { data: vips } = useFetch(`${BASE_URL}/vips`, refresh);

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

      <TabPanel>
        <AllGiftTable
          data={data}
          loading={loading}
          error={error}
          setRefresh={setRefresh}
        />
      </TabPanel>

      <TabPanel>
        <BannerList data={banners} setRefresh={setRefresh} />
      </TabPanel>

      <TabPanel>
        <CrownLists data={crowns} setRefresh={setRefresh} />
      </TabPanel>

      <TabPanel>
        <BadgesLists data={badges} setRefresh={setRefresh} />
      </TabPanel>

      <TabPanel>
        <FrameLists data={frames} setRefresh={setRefresh} />
      </TabPanel>

      <TabPanel>
        <TemplateLists data={templates} setRefresh={setRefresh} />
      </TabPanel>

      <TabPanel>
        <EntryLists data={entries} setRefresh={setRefresh} />
      </TabPanel>

      <TabPanel>
        <EventLists data={events} setRefresh={setRefresh} />
      </TabPanel>

      <TabPanel>
        <VIPLists data={vips} setRefresh={setRefresh} />
      </TabPanel>
    </Tabs>
  );
}
export default GiftChildTabs;
