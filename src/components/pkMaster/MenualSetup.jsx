import { ChevronDown, CirclePlay, Trophy, User, Users } from "lucide-react";
import agentGama from "/agent.png";
import flower from "/flower.png";

export default function MenualSetup() {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row gap-6 text-gray-800">
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Create PK Battle */}
        <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-100">
          <h2 className="text-xl font-semibold mb-1">+Create PK Battle</h2>
          <p className="text-sm text-gray-500 mb-6">
            Set up manual or automatic PK matches
          </p>

          {/* Match Type */}
          <label>Match Type</label>
          <div className="relative">
            <select className="mt-0.5 mb-2 pl-10 text-[#181717]">
              <option className="">User vs user</option>
            </select>
            <ChevronDown className="absolute right-3 top-5.5 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <User
              size={22}
              className="absolute left-3 top-5 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* Time Slot */}
          <label>Time Slot</label>
          <input
            type="text"
            placeholder="Select time Slot"
            className="w-full border border-gray-300 text-black rounded-md px-3 py-2 text-sm focus:outline-none mt-0.5 mb-2 placeholder:text-[#181717]"
          />

          {/* Auto Match Mode */}
          <div>
            <h2 className="text-sm font-semibold text-[#181717] font-sans mb-0.5">
              Auto-Match Mode
            </h2>
            <p className="text-xs text-[#636363] mb-1">
              Add one participant at a time. System will auto-match when another
              participant selects the same time slot.
            </p>
          </div>

          {/* Select User */}
          <label>Select User</label>
          <div className="relative">
            <select className="mt-0.5 mb-2 text-[#181717]">
              <option className="">Select User</option>
            </select>
            <ChevronDown className="absolute right-3 top-5.5 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>

          <button className="w-full py-1 px-3 mt-2 rounded-md bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white font-medium border-b">
            + Add to Auto-Match Queue
          </button>

          <hr className="mt-7 text-[#C4C4C4]" />

          <div className="rounded-2xl mt-7">
            <h2 className="text-lg font-semibold mb-1">Manual Match Mode</h2>
            <p className="text-sm text-gray-500 mb-6">
              Select both participants to create an instant match
            </p>

            <label>Participant 1</label>
            <div className="relative">
              <select className="mt-0.5 mb-2 text-[#181717]">
                <option className="">Select User</option>
              </select>
              <ChevronDown className="absolute right-3 top-5.5 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            <label>Participant 2</label>
            <div className="relative">
              <select className="mt-0.5 mb-2 text-[#181717]">
                <option className="">Select User</option>
              </select>
              <ChevronDown className="absolute right-3 top-5.5 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            <button className="w-full py-1 mt-2 rounded-md bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white font-medium border-b flex gap-3 items-center justify-center">
              <span>
                <Users size={20} />
              </span>
              <span>Create manual match</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 space-y-4">
        {/* Auto Match Queue */}
        <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-100">
          <h2 className="text-xl font-semibold">Auto-Match Queue</h2>
          <p className="text-sm text-gray-500 mb-4">
            Waiting for matching participants
          </p>

          <div className="space-y-3">
            {[
              { title: "StreamerA 15:00", user: "User • 15:00" },
              { title: "StreamerA 15:00", user: "User • 15:00" },
              { title: "StreamerA 15:00", user: "User • 15:00" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center px-3 pr-7 py-2 border border-[#ABABAB54] rounded-md"
              >
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <small>{item.user}</small>
                </div>
                <button className="text-xl">×</button>
              </div>
            ))}
          </div>
        </div>

        {/* Matched Battles */}
        <div className="bg-white shadow-md rounded-2xl p-4 border border-gray-100">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span>
              <Trophy />
            </span>{" "}
            Matched Battles
          </h2>
          <p className="text-sm text-gray-500 mb-4 mt-1">Ready to start</p>

          <div className="rounded-xl flex items-center justify-between">
            <span className="px-3 py-1 border border-[#ABABAB54] rounded-full text-xs mr-2">
              manual match
            </span>
            <span className="px-3 py-1 rounded-full border border-[#ABABAB54] text-xs mr-2">
              10:00
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 p-4 rounded-xl bg-white gap-4">
            <div className="flex items-center gap-3">
              <img src={agentGama} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-semibold">Agent Gamma</p>
                <p className="text-xs text-gray-500 text-center">AGT003</p>
              </div>
            </div>

            <p className="font-bold text-lg">VS</p>

            <div className="flex items-center gap-3">
              <img src={flower} className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-semibold">Agent Gamma</p>
                <p className="text-xs text-gray-500 text-center">AGT003</p>
              </div>
            </div>
          </div>

          <button className="w-full py-1 mt-2 rounded-md bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white font-medium border-b flex gap-3 items-center justify-center">
            <span>
              <CirclePlay size={20} />
            </span>
            <span>Start PK Battle</span>
          </button>
        </div>
      </div>
    </div>
  );
}
