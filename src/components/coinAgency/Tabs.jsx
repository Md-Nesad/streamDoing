import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ManualCoinModal from "../../modals/ManualCoinModals";
import RefundModal from "../../modals/RefundModal";
import ExchangesRateModal from "../../modals/ExchangesRateModal";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SellCoins from "./SellCoins";
import RateTransactionTable from "./RateTransactionTable";
import CurrentExchangeRate from "./CurrentExchangeRate";
import MasterLedger from "./MasterLedger";

export default function TabsSection() {
  const [openCoinModal, setOpenCoinModal] = useState(false);
  const [openRefundModal, setOpenRefundModal] = useState(false);
  const [openRateModal, setOpenRateModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      {/* LEFT SIDE LINKS */}
      {/* <div className="flex items-center gap-2 sm:gap-4 bg-[#F4F4F4] px-2 py-1 rounded text-nowrap max-sm:w-full overflow-x-auto hide_scrollbar">
        <button
          onClick={() => navigate("/dashboard/coins/rate-transaction")}
          className="px-4 sm:px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium bg-white drop-shadow-sm"
        >
          Rate Transaction
        </button>

        <button
          onClick={() => navigate("/dashboard/coins/exchange-rate")}
          className="px-4 sm:px-6  py-1 rounded-md text-[#3e3e3e] text-md font-medium"
        >
          Exchange Rate
        </button>

        <button
          onClick={() => navigate("/dashboard/coins/master-ledger")}
          className="px-4 sm:px-6  py-1 rounded-md text-[#3e3e3e] text-md font-medium"
        >
          Master Ledger
        </button>
      </div> */}

      <Tabs>
        <div className="flex sm:flex-row flex-col max-sm:gap-3 items-center justify-between w-full bg-white mt-5 rounded-lg gap-12">
          <TabList className="flex items-center gap-6 mt-2 bg-[#F4F4F4] w-full sm:w-fit overflow-x-auto px-2 py-1 rounded mb-3 text-nowrap hide_scrollbar">
            <Tab
              className="font-sans cursor-pointer"
              selectedClassName="active-tab"
            >
              Rate Transaction
            </Tab>
            <Tab
              className="font-sans cursor-pointer"
              selectedClassName="active-tab"
            >
              Exchange Rate
            </Tab>
            <Tab
              className="font-sans cursor-pointer"
              selectedClassName="active-tab"
            >
              Master Ledger
            </Tab>
          </TabList>

          <div className="flex items-center gap-3 sm:gap-4 text-nowrap max-sm:w-full overflow-x-auto hide_scrollbar">
            <button
              onClick={() => setOpenCoinModal(true)}
              className="px-6 sm:px-8 py-1 rounded-md text-white text-md font-medium bg-linear-to-r from-[#6DA5FF] to-[#F576D6]"
            >
              Manual Adjustment
            </button>

            <button
              onClick={() => setOpenRefundModal(true)}
              className="px-6 py-1 rounded-md border border-[#CCCCCC] text-[#3e3e3e] font-medium text-md bg-white"
            >
              Refund Coin
            </button>

            <button
              onClick={() => setOpenRateModal(true)}
              className="px-6 py-1 rounded-md border border-[#CCCCCC] text-[#3e3e3e] text-md font-medium bg-white"
            >
              $Update Rate
            </button>
          </div>
        </div>
        <TabPanel>
          <SellCoins />
          <RateTransactionTable />
        </TabPanel>

        <TabPanel>
          <CurrentExchangeRate />
        </TabPanel>

        <TabPanel>
          <MasterLedger />
        </TabPanel>
      </Tabs>

      {/* RIGHT SIDE BUTTONS */}

      {/*Coin MODAL */}
      {openCoinModal && (
        <ManualCoinModal
          open={openCoinModal}
          onClose={() => setOpenCoinModal(false)}
        />
      )}

      {/* refund modal */}
      {openRefundModal && (
        <RefundModal
          open={openRefundModal}
          onClose={() => setOpenRefundModal(false)}
        />
      )}

      {/* rate modal */}
      {openRateModal && (
        <ExchangesRateModal
          open={openRateModal}
          onClose={() => setOpenRateModal(false)}
        />
      )}
    </div>
  );
}
