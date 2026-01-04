import React from "react";
import Notification from "../../assests/Notification";
import { ChevronDown, Eye, RotateCw, Send } from "lucide-react";

export default function ComposeNotification() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-7">
        {/* Left Panel */}
        <div className="bg-white rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-5">
          <h3 className="text-xl font-semibold mb-1">Select Recipients</h3>
          <p className="text-sm text-gray-500 mb-3">
            Choose who will receive this notification
          </p>

          <div className="space-y-5">
            <div>
              <p className="text-lg font-medium mb-3">Recipient Type</p>
              <div className="space-y-2">
                {["Individual User", "Individual Agency", "Master Agency"].map(
                  (item, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-2 text-sm font-medium cursor-pointer"
                    >
                      <input type="radio" name="recipient" />
                      {item}
                    </label>
                  )
                )}
              </div>
            </div>

            <hr className="text-[#0000001C]" />

            <div className="space-y-2">
              {["All Users", "All Agencies", "Broadcast to Entire App"].map(
                (item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 font-medium text-sm cursor-pointer"
                  >
                    <input type="radio" name="recipient" />
                    {item}
                  </label>
                )
              )}
            </div>

            <div className="bg-[#E6E6E6] text-center text-sm py-3 mt-2 rounded-md font-medium">
              This notification will be{" "}
              <span className="font-semibold">BROADCAST TO ENTIRE APP</span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-white rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-5 relative">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold">Compose Notification</h3>
              <p className="text-sm text-gray-500 mb-4">
                Create your notification message
              </p>
            </div>
            <button className="bg-red-500 hover:bg-red-700 hover:transition hover:duration-300 text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2">
              <Notification /> Set Automatic Notification
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">
                Notification Category
              </label>
              <div className="relative">
                <select className="mt-1 text-gray-800 font-medium">
                  <option>Select Notification Category</option>
                </select>
                <ChevronDown className="absolute top-3 right-4 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Title</label>
              <input
                type="text"
                placeholder="Enter notification title..."
                className="mt-1 w-full border border-[#D6D6D6] rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                placeholder="Enter notification message"
                rows={5}
                className="mt-1 w-full border border-[#D6D6D6] rounded-md px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                Attachment (Optional)
              </label>
              <div className="mt-1 flex items-center border rounded-md overflow-hidden">
                <button className="bg-gray-200 px-4 py-2 text-sm font-medium">
                  Choose File
                </button>
                <span className="px-3 text-sm text-gray-500">
                  No chosen file
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button className="flex items-center gap-3 px-4 py-2 btn_gradient">
                <Send size={18} /> Send Notification
              </button>
              <button className="flex items-center gap-2 text-[#FFFFFF] bg-[#CFCFCF] px-4 py-2 border rounded border-[#8D8D8D]">
                <Eye size={20} /> Preview
              </button>
              <button className="flex items-center gap-2 text-md font-semibold text-gray-800">
                <RotateCw size={20} /> Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
