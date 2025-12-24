import React from "react";

export default function ExchangesRateModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl shadow-xl p-4 sm:p-8 relative animatefadeIn">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          Update Exchange Rates
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Modify coin exchange rates for different tiers
        </p>

        {/* Form */}
        <div className="mt-6 space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700">
              User Id/ Transaction Id
            </label>
            <input
              type="text"
              className="w-full mt-1 rounded-md px-3 py-1.5 focus:outline-none border border-[#626060]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Balance</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md px-3 py-1.5 focus:outline-none border border-[#626060]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Coin Amount
            </label>
            <input
              type="number"
              className="w-full mt-1 rounded-md px-3 py-1.5 focus:outline-none border border-[#626060]"
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="sm:mt-10 mt-6 mb-2 sm:mb-0 flex justify-center sm:justify-end gap-4">
          <button onClick={onClose} className="border px-6 py-1 btn_white">
            Cancel
          </button>

          <button className="px-8 py-1 btn_gradient">Confirm</button>
        </div>
      </div>
    </div>
  );
}
