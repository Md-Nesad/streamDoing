import { formatNumber, formatOnlyDate } from "../utility/utility";

export default function UserDetailsModal({ open, onClose, user }) {
  if (!open) return null;
  console.log(user);
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
          {user?.name}
        </h2>

        {/* Rows */}
        <div className="space-y-3 text-sm sm:text-lg">
          {/* ID */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">ID :</p>
            <p className="text-gray-800">{user?.displayId}</p>
          </div>

          {/* User */}
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700">User :</p>
            <div className="flex items-center gap-3">
              <img
                src={user?.profilePic}
                className="sm:w-10 w-7 h-7 sm:h-10 rounded-full object-cover"
                fetchPriority="true"
              />
              <p className="text-gray-800">{user?.name}</p>
            </div>
          </div>

          {/* Country */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Country :</p>
            <p className="text-gray-800">{user?.location || "N/A"}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Type :</p>
            <p className="text-gray-800">{user?.type || "N/A"}</p>
          </div>

          {/* Phone Number */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Email :</p>
            <p className="text-gray-800">{user?.email || "N/A"}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Gender :</p>
            <p className="text-gray-800">{user?.gender || "N/A"}</p>
          </div>

          {/* Coin Balance */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Coin Balance :</p>
            <p className="text-gray-800">{formatNumber(user?.coins)}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Diamonds :</p>
            <p className="text-gray-800">{formatNumber(user?.diamonds)}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Level :</p>
            <p className="text-gray-800">Lv{user?.level}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Status :</p>
            <span
              className={`px-3 py-1 text-sm text-center ${
                user?.status === "active"
                  ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                  : "bg-[#FF929296] text-[#D21B20]"
              } text-[#005D23] rounded-full font-semibold block w-22`}
            >
              {user?.status}
            </span>
          </div>

          {/* Registration Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Registration Time :</p>
            <p className="text-gray-800">{formatOnlyDate(user?.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
