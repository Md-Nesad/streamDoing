import { Upload } from "lucide-react";

export default function AddNewBannerModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="w-full max-w-[650px] bg-white rounded-2xl shadow-lg p-4 sm:p-6 max-sm:h-[95vh] overflow-y-auto animatefadeIn hide_scrollbar max-sm:mx-3">
        {/* Title */}
        <h2 className="text-[20px] font-semibold text-gray-800 mb-1">
          Add New Banner
        </h2>
        <p className="text-gray-500 text-[14px] mb-6">
          Create a new virtual gift for users to send during livestreams
        </p>

        {/* Gift Name */}
        <label className="text-gray-700 text-[14px] font-medium">
          Banner Link
        </label>
        <input
          type="text"
          placeholder="Enter Gift name"
          className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 mb-4 focus:outline-none"
        />

        {/* Category */}
        <label className="text-gray-700 text-[14px] font-medium">
          Web Link
        </label>
        <input
          type="text"
          placeholder="Enter Gift name"
          className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 mb-4 focus:outline-none"
        />

        <label className="text-gray-700 text-[14px] font-medium">
          Description
        </label>
        <input
          type="text"
          placeholder="Enter Gift name"
          className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 mb-4 focus:outline-none"
        />

        {/* Price */}
        <label className="text-gray-700 text-[14px] font-medium">Price</label>
        <input
          type="number"
          defaultValue={5000}
          className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 mb-4 focus:outline-none"
        />

        {/* Position */}
        <div className="mb-3">
          <label className="text-sm text-gray-700">Position</label>
          <div className="grid grid-cols-5 gap-2 mt-1">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="text"
                className="border border-[#626060] rounded-md px-3 py-1.5 text-sm focus:outline-none"
              />
            ))}
          </div>
        </div>

        {/* Upload Logo */}
        <label className="text-gray-700 text-[14px] font-medium">
          Upload Banner (SVG, PNG, Mp4)
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
