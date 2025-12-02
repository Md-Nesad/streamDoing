import React from "react";

export default function ManualCoinModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl shadow-xl p-8 relative animatefadeIn">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          Manual Coin Adjustment
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Add or remove coins from user balance
        </p>

        {/* Form */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <label className="text-sm font-medium text-gray-700">
              User Id/ Transaction Id
            </label>
            <input
              type="text"
              className="w-full mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Balance</label>
            <input
              type="text"
              className="w-full mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Coin Amount
            </label>
            <input
              type="number"
              className="w-full mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select className="w-full mt-1 border rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400 appearance-none">
              <option>Category</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center gap-4">
          <button className="border px-6 py-2 rounded-md text-gray-700">
            Add Coin
          </button>

          <button className="border px-6 py-2 rounded-md text-gray-700">
            Remove Coin
          </button>

          {/* Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">Hold</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-pink-500 transition"></div>
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition"></div>
            </label>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-10 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="border px-6 py-2 rounded-md text-gray-700"
          >
            Cancel
          </button>

          <button className="px-8 py-2 rounded-md text-white bg-linear-to-r from-purple-400 to-pink-500 shadow">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
