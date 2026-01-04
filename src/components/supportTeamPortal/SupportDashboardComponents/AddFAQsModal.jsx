import { ChevronDown } from "lucide-react";

export default function AddFAQsModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl shadow-xl p-4 sm:p-8 relative animatefadeIn">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">Create New FAQ</h2>

        {/* Form */}
        <div className="mt-6 space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <div className="relative">
              <select className="w-full mt-1 pl-5 rounded-md px-3 py-2 focus:outline-none border border-[#626060] appearance-none">
                <option value="">Select Category</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Question
            </label>
            <input
              type="text"
              placeholder="enter the question"
              className="w-full mt-1 rounded-md px-3 pl-5 py-2 focus:outline-none border border-[#626060]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Answer</label>
            <textarea
              placeholder="write answer.."
              rows={3}
              className="w-full mt-1 rounded-md pl-5 px-3 py-2 focus:outline-none border border-[#626060] resize-none"
            ></textarea>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="sm:mt-10 mt-6 mb-2 sm:mb-0 flex justify-center sm:justify-end gap-4">
          <button onClick={onClose} className="border px-6 py-1 btn_white">
            Save as Draft
          </button>

          <button className="px-8 py-1 btn_gradient">Publish</button>
        </div>
      </div>
    </div>
  );
}
