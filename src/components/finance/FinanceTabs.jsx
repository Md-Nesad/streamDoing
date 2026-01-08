import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import WithdrawTable from "./WidthrawTable";
import CoinPurchaseTable from "./CoinPurchaseTable";
import PaymentCards from "./PaymentCard";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import Error from "../Error";
import { useState } from "react";

export default function FinanceTabs() {
  const [page, setPage] = useState(1);
  const withdrawRequest = useFetch(
    `${BASE_URL}/admin/finance/withdrawals?page=${page}&limit=10`
  );
  const coinPurchase = useFetch(
    `${BASE_URL}/admin/finance/coin-purchases?page=${page}&limit=20`
  );

  const error = withdrawRequest.error || coinPurchase.error;

  if (error) return <Error error={error} />;
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
        <WithdrawTable data={withdrawRequest?.data} />
      </TabPanel>

      <TabPanel>
        <CoinPurchaseTable
          data={coinPurchase?.data}
          setPage={setPage}
          loading={coinPurchase?.loading}
        />
      </TabPanel>

      <TabPanel>
        <PaymentCards />
      </TabPanel>
    </Tabs>
  );
}
