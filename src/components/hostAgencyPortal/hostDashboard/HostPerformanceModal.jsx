import { formatOnlyDate } from "../../../utility/utility";

export default function HostPerformanceModal({
  open,
  onClose,
  user,
  hostList,
}) {
  if (!open) return null;

  const findHost = hostList?.hosts?.find((host) => host?._id === user?.hostId);
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
          {user?.hostName}
        </h2>

        {/* Rows */}
        <div className="space-y-3 text-sm sm:text-lg">
          {/* ID */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Host Id :</p>
            <p className="text-gray-800">{findHost?.displayId}</p>
          </div>

          {/* User */}
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700">User :</p>
            <div className="flex items-center gap-3">
              <img
                src={findHost?.profilePic}
                className="sm:w-10 w-7 h-7 sm:h-10 rounded-full object-cover"
                fetchPriority="true"
              />
              <p className="text-gray-800">{user?.hostName}</p>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Country :</p>
            <p className="text-gray-800">{findHost?.location}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Diamonds Earned :</p>
            <p className="text-gray-800">{user?.totalDiamonds}</p>
          </div>

          {/* Coin Spend */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Total Salary :</p>
            <p className="text-gray-800">{user?.totalSalary}</p>
          </div>

          {/* Country */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Agency Share :</p>
            <p className="text-gray-800">{user.agencyShare}</p>
          </div>

          {/* Phone Number */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Video Live Time :</p>
            <p className="text-gray-800">{user?.avgDailyHours}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Monthly Target :</p>
            <p className="text-gray-800">{user?.monthlyTarget}</p>
          </div>

          {/* Registration Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Registration Time :</p>
            <p className="text-gray-800">
              {formatOnlyDate(findHost?.createdAt)}
            </p>
          </div>

          {/* Last Login Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Last Login Time :</p>
            <p className="text-gray-800">
              {formatOnlyDate(findHost?.lastActiveAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
