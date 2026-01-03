export default function HostPerformanceModal({ open, onClose }) {
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
          Razia Sultana
        </h2>

        {/* Rows */}
        <div className="space-y-3 text-sm sm:text-lg">
          {/* ID */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Host Id :</p>
            <p className="text-gray-800">djdhjf</p>
          </div>

          {/* User */}
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700">User :</p>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                className="sm:w-10 w-7 h-7 sm:h-10 rounded-full object-cover"
                fetchPriority="true"
              />
              <p className="text-gray-800">Md. Neasad</p>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Country :</p>
            <p className="text-gray-800">b</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Coin Spend :</p>
            <p className="text-gray-800">12</p>
          </div>

          {/* Coin Spend */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Earning Balance :</p>
            <p className="text-gray-800">36</p>
          </div>

          {/* Country */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Grand Total Earning :</p>
            <p className="text-gray-800">36</p>
          </div>

          {/* Phone Number */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Video Live Time : :</p>
            <p className="text-gray-800">jhjhjh</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Audio Live Time : :</p>
            <p className="text-gray-800">jhjhjh</p>
          </div>

          {/* Registration Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Registration Time :</p>
            <p className="text-gray-800">12/4/2025 12:10:30</p>
          </div>

          {/* Last Login Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Last Login Time :</p>
            <p className="text-gray-800">12/4/2025 12:10:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}
