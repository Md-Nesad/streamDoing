import { recentGiftActivity } from "../../data/data";

export default function RecentGift() {
  return (
    <div className="w-fullmx-auto bg-white rounded-lg p-3 sm:p-5 shadow-md mb-10 mt-6">
      <h2 className="text-lg font-semibold mb-4">Recent Gift Activity</h2>

      <div className="space-y-3">
        {recentGiftActivity.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-[#ABABAB54] rounded-lg px-3 sm:px-4 py-3"
          >
            {/* Left */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="">
                <img
                  src="/flower.png"
                  alt="Gift Image"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900">
                  User{index + 1} sent {item.gift}
                </p>
                <p className="text-xs text-gray-500 font-medium">{item.time}</p>
              </div>
            </div>

            {/* Right */}
            <div className="text-sm sm:text-md font-semibold text-gray-900">
              {item.coins} coins
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
