import { Eye, Play, Trophy } from "lucide-react";

export default function CompleteBattle() {
  const userCards = [
    {
      name: "StreamerA",
      agent: "Agent Alpha",
      agentId: "AGT001",
      userId: "USR1001",
      location: "New York, USA",
      date: "2025-01-10 14:30",
      diamonds: "125,002",
    },
    {
      name: "StreamerB",
      agent: "Agent Beta",
      agentId: "AGT002",
      userId: "USR1002",
      location: "Los Angeles, USA",
      date: "2025-01-11 16:20",
      diamonds: "98,500",
    },
  ];

  return (
    <div className="space-y-5 mb-5">
      {userCards.map((card, i) => (
        <div
          key={i}
          className="w-full p-6 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-[#FFD6FA] p-4 rounded-t-xl">
            <h2 className="text-2xl font-semibold text-gray-800">
              PK Battle #{i + 1}
            </h2>

            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-xl bg-[#D84CCA] text-white text-sm font-medium">
                Completed
              </span>

              <span className="text-sm text-gray-600 border border-[#D9D9D94F] px-4 py-2 rounded-xl">
                Duration : 2h 40min
              </span>
            </div>
          </div>

          {/* Main content */}
          <div className="mt-6 flex items-start justify-between gap-6">
            {/* LEFT CARD */}
            <div className="w-1/2 border rounded-xl p-3 border-[#FF95F8] bg-[#FFFBFF]">
              <h3 className="text-[#BC1ED3] font-semibold text-md mb-3 flex gap-2 items-center">
                <Trophy size={22} /> Winner
              </h3>

              {/* Avatar + name */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#FF95F8] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  S
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {card.name}
                  </h4>
                  <p className="text-sm text-gray-500">{card.agent}</p>
                </div>
              </div>

              {/* Details */}
              <div className="mt-4 text-sm text-gray-700 space-y-1">
                <p>Agent ID: {card.agentId}</p>
                <p>User ID: {card.userId}</p>
                <p>Location: {card.location}</p>
                <p>Date & Time: {card.date}</p>
              </div>

              {/* Diamonds */}
              <div className="mt-5 px-4 py-3 rounded-lg bg-[#FAD0FF] space-y-1">
                <p className="text-xs text-gray-600">Diamonds</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {card.diamonds}
                </p>
              </div>
            </div>

            {/* VS Divider */}
            <div className="flex flex-col justify-center my-auto">
              <div className="w-16 h-16 rounded-full bg-[#FF95F8] text-white text-3xl font-semibold flex items-center justify-center">
                VS
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-1/2 border rounded-xl p-3 border-purple-300 bg-purple-50/60">
              {/* Avatar + name (mirrored) */}
              <div className="flex items-center gap-4 flex-row-reverse w-full text-right mt-9">
                <div className="w-14 h-14 bg-[#A595FF] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  S
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {card.name}
                  </h4>
                  <p className="text-sm text-gray-500">{card.agent}</p>
                </div>
              </div>

              {/* Details (right aligned) */}
              <div className="mt-4 text-sm text-gray-700 space-y-1 text-right">
                <p>Agent ID: {card.agentId}</p>
                <p>User ID: {card.userId}</p>
                <p>Location: {card.location}</p>
                <p>Date & Time: {card.date}</p>
              </div>

              {/* Diamonds (right aligned) */}
              <div className="mt-5 px-4 py-3 rounded-lg bg-purple-200/50 space-y-1 text-right">
                <p className="text-xs text-gray-600">Diamonds</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {card.diamonds}
                </p>
              </div>
            </div>
          </div>

          {/* Footer buttons (inside each card) */}
          <div className="flex justify-center gap-6 mt-5">
            <button className="px-3 h-9 rounded-md bg-[#FFFFFF] border border-[#CCCCCC] font-medium flex items-center gap-2 sm:text-md">
              <Eye size={18} /> View Result Details
            </button>

            <button className="flex items-center gap-2 bg-[#FF84F3] text-white px-4 h-9 rounded-md text-sm font-medium">
              <span className="w-5 h-5 bg-[#FF84F3] border border-white rounded-full flex items-center justify-center">
                <Play className="color-white ml-0.5" size={13} />
              </span>
              Replay Mock
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
