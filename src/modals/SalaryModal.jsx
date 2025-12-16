import React from "react";

const SalaryModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 max-sm:px-3">
      <div className="bg-white rounded-xl p-4 sm:p-6 w-[600px] shadow-lg">
        <h2 className="text-lg font-semibold mb-6">Create New Salary Target</h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {/* Target Coin */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Target Coin :
            </label>
            <input
              type="number"
              defaultValue="10000"
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Diamond */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Diamond :
            </label>
            <input
              type="number"
              defaultValue="5000"
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Salary */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Salary :
            </label>
            <input
              type="number"
              defaultValue="5000"
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Total Salary */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Total Salary :
            </label>
            <input
              type="number"
              defaultValue="5000"
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Agency Share */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Agancy Share:
            </label>
            <input
              type="number"
              defaultValue="5000"
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Day */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Day :</label>
            <input
              type="text"
              defaultValue="30 days"
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Time */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Time :</label>
            <input
              type="text"
              defaultValue="12 hr"
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center sm:justify-end gap-4">
          <button onClick={onClose} className="px-8 py-1 btn_white">
            Cancel
          </button>

          <button className="px-10 py-1 btn_gradient">Create</button>
        </div>
      </div>
    </div>
  );
};

export default SalaryModal;
