import { Gift } from "lucide-react";

const gifts = [
  {
    user: "T-1001",
    gift: "High",
    to: "John Doe",
    title: "Technical",
    time: "5 min ago",
  },
  {
    user: "T-1001",
    gift: "High",
    to: "John Doe",
    title: "Technical",
    time: "5 min ago",
  },
  {
    user: "T-1001",
    gift: "High",
    to: "John Doe",
    title: "Technical",
    time: "5 min ago",
  },
  {
    user: "T-1001",
    gift: "High",
    to: "John Doe",
    title: "Technical",
    time: "5 min ago",
  },
  {
    user: "T-1001",
    gift: "High",
    to: "John Doe",
    title: "Technical",
    time: "5 min ago",
  },
];

export default function AllTicketsList() {
  return (
    <div className="w-fullmx-auto bg-white rounded-lg p-3 sm:p-5 shadow mb-10 mt-6">
      <h2 className="text-lg font-semibold mb-4">All Tickets</h2>

      <div className="space-y-3">
        {gifts.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-[#ABABAB54] rounded-lg px-3 sm:px-4 py-3"
          >
            {/* Left */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-11 h-11 rounded-full bg-pink-100 flex items-center justify-center">
                <Gift className="text-pink-500" size={22} />
              </div>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900">
                  {item.user}{" "}
                  <span className="ml-4 text-xs font-normal bg-[#FF8C8C] text-white py-0.5 px-3 rounded-full">
                    {item.gift}
                  </span>
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  {item.to} • {item.title} • {item.time}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="text-sm sm:text-md font-semibold text-gray-900 flex gap-3">
              <button type="button" className="btn_white py-1 px-5 rounded-md">
                View
              </button>
              <button
                type="button"
                className="bg-[#3383F3] text-white py-1 px-5 rounded-md"
              >
                Response
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
