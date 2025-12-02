import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ManualCoinModal from "../../modals/ManualCoinModals";
import RefundModal from "../../modals/RefundModal";
import ExchangesRateModal from "../../modals/ExchangesRateModal";

export default function TabsSection() {
  const [openCoinModal, setOpenCoinModal] = useState(false);
  const [openRefundModal, setOpenRefundModal] = useState(false);
  const [openRateModal, setOpenRateModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between w-full bg-white mt-7 rounded-lg">
      {/* LEFT SIDE LINKS */}
      <div className="flex items-center gap-4 bg-[#F4F4F4] px-2 py-1 rounded">
        <button
          onClick={() => navigate("/dashboard/rate-transaction")}
          className="px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium bg-white drop-shadow-sm"
        >
          Rate Transaction
        </button>

        <button
          onClick={() => navigate("/dashboard/exchange-rate")}
          className="px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium"
        >
          Exchange Rate
        </button>

        <button
          onClick={() => navigate("/master-ledger")}
          className="px-6 py-1 rounded-md text-[#3e3e3e] text-md font-medium"
        >
          Master Ledger
        </button>
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setOpenCoinModal(true)}
          className="px-8 py-1 rounded-md text-white text-md font-medium bg-linear-to-r from-[#6DA5FF] to-[#F576D6]"
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
