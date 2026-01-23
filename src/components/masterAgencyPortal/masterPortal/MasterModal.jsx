import { formatNumber } from "../../../utility/utility";

export default function MasterModal({ open, onClose, agency }) {
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
          Agency Details
        </h2>

        {/* Rows */}
        <div className="space-y-3 text-sm sm:text-lg">
          {/* ID */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Agency ID :</p>
            <p className="text-gray-800">{agency?.displayId}</p>
          </div>

          {/* User */}
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700">Agency Name :</p>
            <div className="flex items-center gap-3">
              <p className="text-gray-800">{agency?.name}</p>
            </div>
          </div>

          {/* Earning Balance */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Agency Type :</p>
            <p className="text-gray-800">{agency?.type || "N/A"}</p>
          </div>

          {/* Video Live Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Coins :</p>
            <p className="text-gray-800">{formatNumber(agency?.coins)}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Total Sales :</p>
            <p className="text-gray-800">
              {formatNumber(agency?.totalCoinsSold)}
            </p>
          </div>

          {/* Total Earning */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Revenue :</p>
            <p className="text-gray-800">{formatNumber(agency?.revenue)}</p>
          </div>

          {/* Video Live Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Status :</p>
            <p
              className={`${agency?.status === "active" ? "text-green-600" : "text-red-600"}`}
            >
              {agency?.status}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
