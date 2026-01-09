import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber } from "../../utility/utility";
import StripeConfig from "../../modals/paymentGateway/StripeConfig";
import BkashConfig from "../../modals/paymentGateway/BkashConfig";
export default function PaymentCards() {
  const [open, setOpen] = useState(false);
  const [openBkash, setOpenBkash] = useState(false);
  const { data } = useFetch(`${BASE_URL}/admin/payment-gateways`);
  const paymentGateways = data?.paymentGateways;
  const [selected, setSelected] = useState(null);

  const handleConfigure = (item) => {
    if (item.type === "stripe") {
      setOpen(true);
    } else if (item.type === "bkash") {
      setOpenBkash(true);
    }
    setSelected(item);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-7">
        {paymentGateways?.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
          >
            {/* Title */}
            <h2 className="text-2xl max-sm:text-center font-semibold mb-6">
              {item.name}
            </h2>

            {/* Stats */}
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Total Transactions</span>
              <span className="font-medium">
                {formatNumber(item.totalTransactions)}
              </span>
            </div>

            <div className="flex justify-between text-gray-700 mb-6">
              <span>Total Revenue</span>
              <span className="font-medium text-green-600">
                ${formatNumber(item.totalAmount)}
              </span>
            </div>

            {/* Button */}
            <button
              onClick={() => handleConfigure(item)}
              className="text-center mx-auto block bg-[#E9F1FF] hover:bg-[#d8e8ff] transition text-gray-800 font-medium py-1 px-15 rounded-lg border border-[#C7D6F5]"
            >
              Configure
            </button>
          </div>
        ))}
      </div>
      {open && (
        <StripeConfig
          open={open}
          onClose={() => setOpen(false)}
          selected={selected}
        />
      )}
      {/* bkash */}
      {openBkash && (
        <BkashConfig
          open={openBkash}
          onClose={() => setOpenBkash(false)}
          selected={selected}
        />
      )}
    </>
  );
}
