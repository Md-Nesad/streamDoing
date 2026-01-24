import { useState } from "react";
import { X } from "lucide-react";
import useJsonPost from "../hooks/useJsonPost";
import { BASE_URL } from "../utility/utility";
import { toast } from "react-toastify";
export default function BanUserModal({ isOpen, onClose, user, onSuccess }) {
  if (!isOpen) return null;
  const [isTempOn, setIsTempOn] = useState(true);
  const [isPerOn, setIsPerOn] = useState(false);
  const [reason, setReason] = useState("");
  const [until, setUntil] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = useJsonPost(`${BASE_URL}/admin/users/ban/${user._id}`);

  //handle ban
  const handleBan = async () => {
    const data = {
      isPermanent: String(isPerOn),
      isTemporary: String(isTempOn),
      reason: reason,
      until: until,
    };
    setLoading(true);
    const result = await handleSubmit(data);
    if (result.success === false) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
      onSuccess();
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/5 z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-md sm:p-6 p-4 relative h-[95vh] sm:h-91 animatefadeIn">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 cursor-auto">
          <h2 className="text-xl font-semibold cursor-auto">Ban User</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between max-sm:justify-center gap-4 w-full">
          <div className="flex items-center gap-8 border border-gray-300 rounded-md px-3 py-2 w-[48%]">
            <span className="text-sm">Temporary Ban</span>
            <div
              onClick={() => {
                setIsTempOn(!isTempOn);
                setIsPerOn(false);
              }}
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

          <div className="flex items-center gap-8 border border-gray-300 rounded-md px-3 py-2 w-[48%]">
            <span className="text-sm">Permanent Ban</span>
            <div
              onClick={() => {
                setIsPerOn(!isPerOn);
                setIsTempOn(false);
              }}
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

        {isTempOn && (
          <>
            <div className="flex flex-col mt-5">
              <label>Ban Reason</label>
              <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter reason (optional)"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mt-1"
              />
            </div>

            <div className="flex flex-col mt-5 mb-7">
              <label>Until</label>
              <input
                type="date"
                value={until}
                onChange={(e) => setUntil(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
              />
            </div>
          </>
        )}

        {/* Until (only temporary) */}
        {isPerOn && (
          <>
            <div className="flex flex-col mt-5 mb-7">
              <label>Reason</label>
              <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter reason (optional)"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mt-1"
              />
            </div>
          </>
        )}

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-md border">
            Cancel
          </button>
          <button
            onClick={handleBan}
            className="px-4 py-2 rounded-md bg-red-600 text-white"
          >
            {loading ? "Banning..." : "Confirm Ban"}
          </button>
        </div>
      </div>
    </div>
  );
}
