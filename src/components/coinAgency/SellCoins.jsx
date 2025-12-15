import downArrow from "/icons/Vector 151.png";

export default function SellCoins() {
  return (
    <div className="w-full bg-white">
      {/* Title */}
      <h2 className="text-[22px] font-semibold text-gray-800 mt-6">
        Sell Coins
      </h2>
      <p className="text-gray-500 text-md mb-7">Transfer coins from platform</p>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:ml-10">
        {/* Research ID */}
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-sm font-medium text-gray-700">
            Research ID
          </label>
          <input
            type="text"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-sm font-medium text-gray-700">Category</label>
          <div className="relative">
            <select className="border border-[#626060] rounded-md px-3 py-2 w-full outline-none appearance-none focus:ring-2 focus:ring-blue-400">
              <option>Category</option>
            </select>

            {/* Dropdown Icon */}
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
              <img src={downArrow} alt="" />
            </span>
          </div>
        </div>

        {/* Number of Coins */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Number of Coins
          </label>
          <input
            type="number"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Price (Coins)
          </label>
          <input
            defaultValue="5000"
            type="number"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="flex justify-center sm:justify-end items-center gap-2 mt-4">
        <button className="px-10 py-1 rounded-md border border-[#CCCCCC] text-[#181717] bg-white hover:bg-gray-200 font-[490]">
          Cancel
        </button>

        <button
          className="px-12 py-1 rounded-md text-white font-medium
          bg-linear-to-r from-blue-500 to-pink-400 hover:opacity-90"
        >
          Send
        </button>
      </div>
    </div>
  );
}
