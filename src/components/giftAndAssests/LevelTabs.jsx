import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import LevelUp from "../../Pages/dataStore/LevelUp";
import CharmUp from "../../Pages/dataStore/CharmUp";

export default function LevelTabs() {
  return (
    <Tabs>
      <TabList className="flex items-center gap-3 bg-[#F4F4F4] w-full overflow-x-auto hide_scrollbar text-nowrap sm:w-fit px-2 py-1 rounded mt-5">
        <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          Level Up
        </Tab>
        <Tab
          className="font-sans cursor-pointer text-sm"
          selectedClassName="active-tab"
        >
          Charm Up
        </Tab>
      </TabList>

      <TabPanel>
        <LevelUp />
      </TabPanel>

      <TabPanel>
        <CharmUp />
      </TabPanel>
    </Tabs>
  );
}
