import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import HostAgencyTable from "../agencies/HostAgencyTable";
import CoinsTable from "../agencies/CoinsTable";
import MastersTable from "../agencies/MastersTable";
import WithdrawTable from "./WidthrawTable";
import CoinPurchaseTable from "./CoinPurchaseTable";
import PaymentCards from "./PaymentCard";

export default function FinanceTabs() {
  return (
    <Tabs>
      <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-full sm:w-fit overflow-x-auto text-nowrap px-2 py-1 rounded mb-5 hide_scrollbar max-sm:text-sm">
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Withdrawal Requests
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Coin Purchases
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Payment Getway
        </Tab>
      </TabList>

      <TabPanel>
        <WithdrawTable />
      </TabPanel>

      <TabPanel>
        <CoinPurchaseTable />
      </TabPanel>

      <TabPanel>
        <PaymentCards />
      </TabPanel>
    </Tabs>
  );
}
