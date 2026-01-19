import { formatNumber, formatOnlyDate } from "../utility/utility";

export default function CoinTransactionModal({ open, onClose, item }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-[#FDFDFD] w-full max-w-md rounded-xl shadow-lg sm:p-6 p-4 relative animatefadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-md sm:text-xl"
        >
          ✕
        </button>

        {/* Name */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          {item?.to?.name}
        </h2>

        {/* Rows */}
        <div className="space-y-3 text-sm sm:text-lg">
          {/* ID */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">ID :</p>
            <p className="text-gray-800">{item?.to?.displayId}</p>
          </div>

          {/* User */}
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700">Name :</p>
            <div className="flex items-center gap-3">
              <p className="text-gray-800">{item?.to?.name}</p>
            </div>
          </div>

          {/* Country */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Transaction Id :</p>
            <p className="text-gray-800">{item?.transactioniId || "N/A"}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Sale From :</p>
            <p className="text-gray-800">{item?.saleFrom}</p>
          </div>

          {/* Phone Number */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Sale to :</p>
            <p className="text-gray-800">{item?.saleTo}</p>
          </div>

          {/* Coin Balance */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Type :</p>
            <p className="text-gray-800">{item?.type}</p>
          </div>

          {/* Total Earning */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Amount :</p>
            <p className="text-gray-800">{formatNumber(item?.amount)}</p>
          </div>

          {/* Video Live Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Coins :</p>
            <p className="text-gray-800">{formatNumber(item?.coins)}</p>
          </div>

          {/* Audio Live Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Rate :</p>
            <p className="text-gray-800">{item?.rate}</p>
          </div>

          {/* Video Live Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Status :</p>
            <p
              className={`${item?.status === "completed" ? "text-green-600" : "text-red-600"}`}
            >
              {item?.status}
            </p>
          </div>

          {/* Registration Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Registration Time :</p>
            <p className="text-gray-800">{formatOnlyDate(item?.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
