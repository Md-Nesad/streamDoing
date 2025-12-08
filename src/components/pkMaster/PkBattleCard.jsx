import { Eye, Play, SquarePen, X } from "lucide-react";

export default function PKBattleCard({ battle }) {
  const { title, timer, left, right } = battle;

  return (
    <div className="w-full mx-auto bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-2xl p-5 mb-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>

        <div className="text-2xl font-semibold tracking-wider">{timer}</div>

        <button className="flex items-center gap-2 bg-[#D84CCA] text-white px-4 py-2 rounded-md text-sm font-medium">
          <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <Play className="fill-red-500" size={13} />
          </span>
          Live View
        </button>
      </div>

      {/* Body */}
      <div className="grid grid-cols-3 mt-7 items-start">
        {/* Left */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-semibold text-white 
              ${left.color === "pink" ? "bg-[#FF95F8]" : "bg-[#A195FF]"}`}
            >
              {left.name.charAt(0)}
            </div>

            <div>
              <h2 className="text-lg font-semibold">{left.name}</h2>
              <p className="text-gray-600 text-sm">{left.agent}</p>
            </div>
          </div>

          <div className="text-sm text-gray-700 leading-6">
            <p>Agent ID: {left.agentId}</p>
            <p>User ID: {left.userId}</p>
            <p>Location: {left.location}</p>
            <p>Date & Time: {left.dateTime}</p>
          </div>

          <div
            className={`rounded-xl px-5 py-3 w-full 
            ${left.color === "pink" ? "bg-[#FAD0FF]" : "bg-[#E0D0FF]"}`}
          >
            <p className="text-gray-700 text-sm">Diamonds</p>
            <p className="text-2xl font-bold">{left.diamonds}</p>
          </div>
        </div>

        {/* VS */}
        <div className="flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#FF95F8] text-white text-2xl font-semibold flex items-center justify-center mt-10">
            VS
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-end gap-3">
          <div className="flex items-center gap-4 flex-row-reverse">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-semibold text-white 
              ${right.color === "pink" ? "bg-pink-400" : "bg-violet-400"}`}
            >
              {right.name.charAt(0)}
            </div>

            <div className="text-right">
              <h2 className="text-lg font-semibold">{right.name}</h2>
              <p className="text-gray-600 text-sm">{right.agent}</p>
            </div>
          </div>

          <div className="text-sm text-gray-700 leading-6 text-right">
            <p>Agent ID: {right.agentId}</p>
            <p>User ID: {right.userId}</p>
            <p>Location: {right.location}</p>
            <p>Date & Time: {right.dateTime}</p>
          </div>

          <div
            className={`rounded-xl px-5 py-3 w-full 
            ${right.color === "pink" ? "bg-[#FAD0FF]" : "bg-[#E0D0FF]"}`}
          >
            <p className="text-right text-gray-700 text-sm">Diamonds</p>
            <p className="text-2xl font-bold text-right">{right.diamonds}</p>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-center gap-6 mt-5">
        <button className="px-3 h-9 rounded-md bg-[#FFFFFF] border border-[#CCCCCC] font-medium flex items-center gap-2 sm:text-md">
          <Eye size={18} /> View Details
        </button>

        <button className="flex items-center gap-2 bg-[#FF84F3] text-white px-4 h-9 rounded-md text-sm font-medium">
          <span className="w-5 h-5 bg-[#FF84F3] border border-white rounded-full flex items-center justify-center">
            <Play className="color-white ml-0.5" size={13} />
          </span>
          Live View
        </button>

        <button className="px-3 h-9 rounded-md bg-[#FFFFFF] border border-[#CCCCCC] font-medium flex items-center gap-2 sm:text-md">
          <SquarePen size={18} /> Edit
        </button>

        <button className="px-3 h-9 rounded-md bg-[#FFFFFF] border border-[#CCCCCC] font-medium flex items-center gap-2 sm:text-md">
          <X size={18} /> End
        </button>
      </div>
    </div>
  );
}
