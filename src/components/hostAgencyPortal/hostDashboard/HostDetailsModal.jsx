import { formatNumber, formatOnlyDate } from "../../../utility/utility";

export default function HostDetailsModalPortal({ open, onClose, host }) {
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
          {host?.name}
        </h2>

        {/* Rows */}
        <div className="space-y-3 text-sm sm:text-lg">
          {/* ID */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">ID :</p>
            <p className="text-gray-800">{host?.displayId}</p>
          </div>

          {/* User */}
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700">Name :</p>
            <div className="flex items-center gap-3">
              <img
                src={host?.profilePic}
                className="sm:w-10 w-7 h-7 sm:h-10 rounded-full object-cover"
                fetchPriority="true"
              />
              <p className="text-gray-800">{host?.name}</p>
            </div>
          </div>

          {/* Country */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Gender :</p>
            <p className="text-gray-800">{host?.gender || "N/A"}</p>
          </div>

          {/* Earning Balance */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Type :</p>
            <p className="text-gray-800">{host?.type}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Date of Birth :</p>
            <p className="text-gray-800">{formatOnlyDate(host?.dateOfBirth)}</p>
          </div>

          {/* Total Earning */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Coins :</p>
            <p className="text-gray-800">{formatNumber(host?.coins)}</p>
          </div>

          {/* Video Live Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Diamonds :</p>
            <p className="text-gray-800">{formatNumber(host?.dismonds)}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Level :</p>
            <p className="text-gray-800">Lv{host?.level}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Status :</p>
            <p className="text-gray-800">{host?.status}</p>
          </div>

          {/* Video Live Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Verify :</p>
            <p
              className={`${host?.isVerify ? "text-green-600" : "text-red-600"}`}
            >
              {host?.isVerify ? "Verified" : "Not Verified"}
            </p>
          </div>

          {/* Audio Live Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">VIP Status :</p>
            <p className="text-gray-800">{host.vipStatus ? "Yes" : "No"}</p>
          </div>

          {/* Registration Time */}
        </div>
      </div>
    </div>
  );
}
