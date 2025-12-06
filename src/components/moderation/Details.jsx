import { Ban, CircleCheck, TriangleAlert } from "lucide-react";
import React from "react";

export default function Details() {
  return (
    <>
      <div className="py-6 space-y-6">
        {/* Information Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5">
          <Info label="Report Type" value="Admin" />
          <Info label="Admin Name" value="Mohammod hasan" />
          <Info label="Admin Id" value="925360" />
          <Info label="Report Time" value="Tue 19:09" />
        </div>

        <div>
          <Info label="Reporter" value="User123" />
          <Info label="Reason" value="Inappropriate content" />
        </div>

        {/* Moderator Notes */}
        <div className="mr-5">
          <p className="font-medium mb-1 text-[#636363]">Moderator Notes</p>
          <textarea
            placeholder="Add your note here..."
            className="w-full h-28 resize-none rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-gray-200"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button className="border rounded-md px-4 py-1 flex items-center gap-2 text-sm">
            <TriangleAlert size={16} /> Issue Warning
          </button>

          <button className="bg-[#ff7676] text-white rounded-md px-4 py-1 flex items-center gap-2 text-sm">
            <span className="text-white">$</span> Apply Fine
          </button>

          <button className="bg-[#ff5c5c] text-white rounded-md px-4 py-1 flex items-center gap-2 text-sm">
            <Ban size={16} /> Ban User
          </button>

          <button className="bg-[#2ecc71] text-white rounded-md px-4 py-1 flex items-center gap-2 text-sm">
            <CircleCheck size={16} /> Resolve
          </button>
        </div>
      </div>
    </>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-semibold text-[15px] mt-0.5">{value}</p>
    </div>
  );
}
