import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import RequestListTable from "./RequestListTable";
import PkHeader from "../TitleAndSubTitle";
import MenualSetup from "./MenualSetup";
import { useState } from "react";
import PKBattleList from "./PkBattleList";
import CompleteBattle from "./CompleteBattle";

export default function PkMasterTab() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      {/* Show top header only for Tab 0 & 1 */}
      {tabIndex === 0 || tabIndex === 1 ? (
        <PkHeader
          title="Reports & Analytics"
          subtitle="Comprehensive platform insights"
        />
      ) : (
        <PkHeader
          title="On goin PK matches"
          subtitle="Comprehensive platform insights"
        />
      )}

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex items-center gap-5 bg-[#F4F4F4] w-full sm:w-fit overflow-x-auto hide_scrollbar px-2 py-1 rounded mb-5 text-nowrap">
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            PK Club Pandint List
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Manual Setup
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Accepted Battles
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Complete Battles
          </Tab>
        </TabList>

        <TabPanel>
          <PkHeader
            title="PK Request List"
            subtitle="Manage incoming PK battle requests"
          />
          <RequestListTable />
        </TabPanel>

        <TabPanel>
          <MenualSetup />
        </TabPanel>

        <TabPanel>
          <PKBattleList />
        </TabPanel>

        <TabPanel>
          <CompleteBattle />
        </TabPanel>
      </Tabs>
    </>
  );
}
