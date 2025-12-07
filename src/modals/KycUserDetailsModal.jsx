import React from "react";

export default function UserDetailsModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-black text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-center text-xl font-semibold mb-6">
          Details of Razia Sultana
        </h2>

        <div className="grid grid-cols-2 gap-y-2 gap-x-25">
          <p className="font-medium">Categories :</p>
          <p>Agency</p>
          <p className="font-medium">ID :</p>
          <p>256968</p>

          <p className="font-medium">User :</p>
          <div className="flex items-center gap-2">
            <img src="/user.png" className="w-10 h-10 rounded-full border" />
            <div>
              <p className="font-medium">Razia Sultana</p>
              <span className="text-xs bg-green-500 text-white px-2 rounded">
                active
              </span>
            </div>
          </div>

          <p className="font-medium">Country :</p>
          <p>Bangladesh</p>
          <p className="font-medium">Phone Number :</p>
          <p>017123214012</p>
          <p className="font-medium">Nid No:</p>
          <p>0912321698412</p>
          <p className="font-medium">Reference ID</p>
          <p>25111151</p>
          <p className="font-medium">Email Address</p>
          <p>ABC_10@gmail.com</p>
          <p className="font-medium">IP Address :</p>
          <p>82.84456.467.69</p>
          <p className="font-medium">Registration Time :</p>
          <p>12/4/2025 12:10:30</p>
          <p className="font-medium">Last Login Time :</p>
          <p>12/4/2025 12:10:30</p>
        </div>

        {/* Image Boxes */}
        <div className="flex justify-start gap-4 my-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-md h-24 w-full flex items-center justify-center bg-[#E8E8E8] text-gray-400"
            >
              <span className="text-xs">Image</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-15 justify-center">
          <button className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300 text-sm">
            Hold
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
            Decline
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
}
