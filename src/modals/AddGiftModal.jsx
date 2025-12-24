import { Upload } from "lucide-react";

export default function AddGiftModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="w-full max-w-[650px] bg-white rounded-2xl shadow-lg p-4 sm:p-6 max-sm:h-[95vh] overflow-y-auto animatefadeIn hide_scrollbar max-sm:mx-3">
        {/* Title */}
        <h2 className="text-[20px] font-semibold text-gray-800 mb-1">
          Add New Gift
        </h2>
        <p className="text-gray-500 text-[14px] mb-6">
          Create a new virtual gift for users to send during livestreams
        </p>

        {/* Gift Name */}
        <label className="text-gray-700 text-[14px] font-medium">
          Gift Name
        </label>
        <input
          type="text"
          placeholder="Enter Gift name"
          className="w-full border rounded-lg px-3 py-2 text-[14px] mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Category */}
        <label className="text-gray-700 text-[14px] font-medium">
          Category
        </label>
        <div className="flex items-center gap-3 mt-1 mb-4">
          <input
            type="text"
            placeholder="Search Category"
            className="flex-1 border rounded-lg px-3 py-2 text-[14px] focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button className="px-4 py-2 text-[14px] bg-[#AC90EC] text-white rounded-lg">
            Add Custom Category
          </button>
        </div>

        {/* Price */}
        <label className="text-gray-700 text-[14px] font-medium">
          Price (Coins)
        </label>
        <input
          type="number"
          defaultValue={5000}
          className="w-full border rounded-lg px-3 py-2 text-[14px] mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Upload Logo */}
        <label className="text-gray-700 text-[14px] font-medium">
          Upload Gift Logo (SVG, PNG, Mp4)
        </label>
        <div className="relative border rounded-lg px-3 py-2 text-[14px] cursor-pointer flex items-center justify-start gap-2 mt-1 mb-4">
          <span className="text-gray-400 text-sm">upload</span>
          <span className="text-gray-500">
            <Upload size={15} />
          </span>
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        {/* Upload Sound */}
        <label className="text-gray-700 text-[14px] font-medium">
          Upload Sound
        </label>
        <div className="relative border rounded-lg px-3 py-2 text-[14px] cursor-pointer flex items-center justify-start gap-2 mt-1 mb-4">
          <span className="text-gray-400 text-sm">upload</span>
          <span className="text-gray-500">
            <Upload size={15} />
          </span>
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
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
}
