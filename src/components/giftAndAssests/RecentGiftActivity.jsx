import { Gift } from "lucide-react";

const gifts = [
  {
    user: "User1",
    gift: "Rose",
    to: "Host1",
    time: "Just now",
    coins: "10 coins",
  },
  {
    user: "User2",
    gift: "Diamond",
    to: "Host1",
    time: "Just now",
    coins: "500 coins",
  },
  {
    user: "User3",
    gift: "Heart",
    to: "Host3",
    time: "Just now",
    coins: "1000 coins",
  },
  {
    user: "User4",
    gift: "Crown",
    to: "Host3",
    time: "Just now",
    coins: "100 coins",
  },
  {
    user: "User5",
    gift: "Fireworks",
    to: "Host8",
    time: "One min ago",
    coins: "10 coins",
  },
];

export default function RecentGiftActivity() {
  return (
    <div className="w-fullmx-auto bg-white rounded-lg p-5 shadow">
      <h2 className="text-lg font-semibold mb-4">Recent Gift Activity</h2>

      <div className="space-y-3">
        {gifts.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-[#ABABAB54] rounded-lg px-4 py-3"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-pink-100 flex items-center justify-center">
                <Gift className="text-pink-500" size={22} />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900">
                  {item.user} sent {item.gift}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  To {item.to} • {item.time}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="text-md font-semibold text-gray-900">
              {item.coins}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
