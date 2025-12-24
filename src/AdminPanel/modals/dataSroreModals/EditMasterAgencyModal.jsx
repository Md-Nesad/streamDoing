import { useState } from "react";
import Image from "../../../../public/icons/Image";
import { Star } from "../../../../public/icons/Star";

export default function EditMasterAgencyModal({ open, onClose }) {
  if (!open) return null;
  const [isTempOn, setIsTempOn] = useState(false);
  const [isPerOn, setIsPerOn] = useState(false);
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-xl mx-auto rounded-xl p-4 sm:p-9 overflow-y-auto max-h-[95vh] hide_scrollbar animatefadeIn">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          Edit Master Agency Details
          <span className="text-purple-600 text-sm">
            <Star />
          </span>
        </h2>

        {/* GRID FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
          <div>
            <label className="block text-xs font-medium mb-1">
              Master Agency ID
            </label>
            <input
              className="w-full border border-[#CFCFCF] outline-none text-[#636363] text-xs rounded-md px-2 py-2"
              placeholder="User Id"
              defaultValue="AGS9102"
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">
              Master Agency Name
            </label>
            <input
              className="w-full border border-[#CFCFCF] text-[#636363] text-xs outline-none  rounded-md px-2 py-2"
              defaultValue="Alice Jhon"
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">
              Reference ID
            </label>
            <input
              className="w-full border border-[#CFCFCF] text-[#636363]  rounded-md px-2 py-2 outline-none text-xs"
              defaultValue="AGS9102"
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">Email</label>
            <input
              className="w-full border border-[#CFCFCF] text-[#636363]  rounded-md px-2 py-2 outline-none text-xs"
              defaultValue="aloicejon@gmail.com"
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">Phone</label>
            <input
              className="w-full border border-[#CFCFCF] text-[#636363]  rounded-md px-2 py-2 outline-none text-xs"
              defaultValue="+0914567890"
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">Location</label>
            <input
              className="w-full border border-[#CFCFCF] text-[#636363]  rounded-md px-2 py-2 outline-none text-xs"
              defaultValue="New York, USA"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-xs">
              Document Type
            </label>
            <select>
              <option>National ID Card</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-[#CFCFCF] text-[#636363]  rounded-md px-2 py-2 outline-none text-xs"
              placeholder="Enter password"
            />
          </div>
        </div>

        {/* IMAGE UPLOADS */}
        <div className="mt-6 flex items-center gap-3 justify-center">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-28 h-28 bg-gray-100 rounded-md flex items-center justify-center"
            >
              <span className="text-gray-400 text-sm">
                <Image />
              </span>
            </div>
          ))}
        </div>

        {/* SWITCHES */}
        <div className="mt-4 flex flex-wrap items-center justify-between max-sm:justify-center gap-4">
          <div className="flex items-center gap-8">
            <span className="text-sm">Temporary Ban</span>
            <div
              onClick={() => setIsTempOn(!isTempOn)}
              className={`w-10 h-3 rounded-full cursor-pointer flex items-center transition-all duration-300 ${
                isTempOn ? "bg-pink-400" : "bg-pink-200"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full shadow-xl transition-all duration-300 bg-linear-to-br from-pink-600 to-pink-400 relative ${
                  isTempOn ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <span className="text-sm">Permanent Ban</span>
            <div
              onClick={() => setIsPerOn(!isPerOn)}
              className={`w-10 h-3 rounded-full cursor-pointer flex items-center transition-all duration-300 ${
                isPerOn ? "bg-pink-400" : "bg-pink-200"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full shadow-xl transition-all duration-300 bg-linear-to-br from-pink-600 to-pink-400 relative ${
                  isPerOn ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex sm:justify-end justify-center gap-4 mt-8">
          <button
            onClick={onClose}
            className="px-7 py-1 btn_white text-gray-60"
          >
            Cancel
          </button>

          <button className="px-12 py-1 text-white btn_gradient hover:opacity-90">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
