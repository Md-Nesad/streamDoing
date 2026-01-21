import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import LevelList from "./LevelList";
import LevelUp from "../../Pages/dataStore/LevelUp";
import CharmUp from "../../Pages/dataStore/CharmUp";

export default function LevelTabs() {
  //   const [refresh, setRefresh] = useState(false);
  //   const { data, loading, error } = useFetch(`${BASE_URL}/gifts/list`, refresh);

  return (
    <Tabs>
      <TabList className="flex items-center gap-3 bg-[#F4F4F4] w-full overflow-x-auto hide_scrollbar text-nowrap sm:w-fit px-2 py-1 rounded mt-5">
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
        <LevelList />
      </TabPanel>

      <TabPanel>
        <LevelUp />
      </TabPanel>

      <TabPanel>
        <CharmUp />
      </TabPanel>
    </Tabs>
  );
}
