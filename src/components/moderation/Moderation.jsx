import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { logData } from "../../data/data";
import AllReportsTable from "./AllReportsTable";
import ActionLog from "./ActionLog";

export default function ModerationTabs() {
  return (
    <Tabs>
      <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-fit px-2 py-1 rounded mt-6">
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          All Reports
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Action Log
        </Tab>
      </TabList>

      <TabPanel>
        <AllReportsTable />
      </TabPanel>

      <TabPanel>
        <ActionLog logData={logData} />
      </TabPanel>
    </Tabs>
  );
}
