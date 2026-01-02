export default function CoinFreez() {
  return (
    <div className="w-full bg-white mt-12">
      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Research ID */}
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-sm font-medium text-gray-700">User Name</label>
          <input
            type="text"
            placeholder="Enter User Name"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-sm font-medium text-gray-700">User ID</label>
          <input
            type="number"
            placeholder="Enter User ID"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Number of Coins */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Transaction period
          </label>
          <input
            type="number"
            placeholder="12.09.25"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            placeholder="Los Angeles"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="flex justify-center sm:justify-end items-center gap-3 mt-8">
        <button className="px-10 py-1 rounded-md border border-[#CCCCCC] text-[#181717] bg-white hover:bg-gray-200 font-[490]">
          Cancel
        </button>

        <button
          className="px-12 py-1 rounded-md text-white font-medium
          bg-[#FA8282]"
        >
          Coin Freez
        </button>
      </div>
    </div>
  );
}
