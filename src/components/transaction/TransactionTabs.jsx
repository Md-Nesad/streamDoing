import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StatsSection from "../dashboard/StatsCard";
import { coinAgenciesdata } from "../../data/data";
import CoinSenderTable from "./CoinSenderTable";
import GiftingTable from "./GiftingTable";

export default function TransactionTabs() {
  return (
    <Tabs>
      <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-fit px-2 py-1 rounded mb-5">
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Coin Sender
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Gifting
        </Tab>
      </TabList>

      <TabPanel>
        <StatsSection data={coinAgenciesdata} />
        <CoinSenderTable />
      </TabPanel>

      <TabPanel>
        <StatsSection data={coinAgenciesdata} />
        <GiftingTable />
      </TabPanel>
    </Tabs>
  );
}
