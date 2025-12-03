import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StatsSection from "../dashboard/StatsCard";
import { agencies, coinAgenciesdata, coinsAgencies } from "../../data/data";
import HostAgencyTable from "./HostAgencyTable";
import CoinsTable from "./CoinsTable";
import MastersTable from "./MastersTable";
import AdminAgencyTable from "./AdminAgencyTable";

export default function AgencisTabs() {
  return (
    <Tabs>
      <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-fit px-2 py-1 rounded mb-5">
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Host Agencies
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Coin Agencies
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Master Agencies
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Admin Agencies
        </Tab>
      </TabList>

      <TabPanel>
        <StatsSection data={agencies} />
        <HostAgencyTable />
      </TabPanel>

      <TabPanel>
        <StatsSection data={coinAgenciesdata} />
        <CoinsTable />
      </TabPanel>

      <TabPanel>
        <StatsSection data={coinAgenciesdata} />
        <MastersTable />
      </TabPanel>

      <TabPanel>
        <StatsSection data={coinAgenciesdata} />
        <AdminAgencyTable />
      </TabPanel>
    </Tabs>
  );
}
