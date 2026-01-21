import { useEffect, useState } from "react";
import useJsonPost from "../hooks/useJsonPost";
import { BASE_URL } from "../utility/utility";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";
export default function ManualCoinModal({ open, onClose }) {
  if (!open) return null;
  const [action, setAction] = useState("");
  const [isHold, setIsHold] = useState(false);
  const [adjusted_id, setAdjusted_id] = useState("");
  const [coins, setCoins] = useState("");
  const [category, setCategory] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = useJsonPost(`${BASE_URL}/coins/adjustments`);

  const handleToggle = () => {
    setIsHold(!isHold);
    setAction(isHold ? "unhold" : "hold");
  };

  //Auto fetch when masterId exists
  const { data: referenceData } = useFetch(
    adjusted_id ? `${BASE_URL}/coins/transaction/${adjusted_id}` : null,
  );

  useEffect(() => {
    if (referenceData?.transaction) {
      setCategory(referenceData.transaction.userType);
    } else {
      setCategory("");
    }
  }, [referenceData]);

  const handleFormSubmit = async () => {
    if (!adjusted_id || !coins || !action)
      return toast.error("Id, Coins and action are required.");
    setLoading(true);
    const result = await handleSubmit({
      adjusted_id,
      coins,
      category,
      reason,
      action,
    });
    setLoading(false);
    toast.success(result.message);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 sm:px-4 px-2">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl shadow-xl sm:p-8 p-4 relative animatefadeIn">
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
            <label className="text-sm font-medium text-gray-700 flex">
              User Id <span className="hidden sm:block">/ Agency Id</span>
            </label>
            <input
              type="number"
              placeholder="User or Agency Id"
              value={adjusted_id}
              onChange={(e) => setAdjusted_id(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Reason</label>
            <input
              type="text"
              placeholder="Enter Reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Coin Amount
            </label>
            <input
              type="number"
              placeholder="Enter Coin Amount"
              value={coins}
              onChange={(e) => setCoins(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm z font-medium text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-2 text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400 appearance-none"
            >
              <option>Category</option>
              <option value="coin">Coin</option>
              <option value="master">Master</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex sm:flex-row flex-col items-center gap-4">
          <div className="flex gap-5">
            <button
              onClick={() => setAction("add")}
              className="border px-4 py-1.5 rounded-md text-gray-700 focus:bg-gray-300 active:scale-y-200"
            >
              Add Coin
            </button>

            <button
              onClick={() => setAction("remove")}
              className="border px-4 py-1.5 rounded-md text-gray-700 focus:bg-gray-300 active:scale-y-200"
            >
              Remove Coin
            </button>
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-4 border px-4 py-1.5 rounded-md">
            <span className="text-gray-700 font-medium">
              {isHold ? "Hold" : "Unhold"}
            </span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={isHold}
                onChange={handleToggle}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-pink-500 transition"></div>
              <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow peer-checked:translate-x-5 transition"></div>
            </label>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-10 flex justify-center sm:justify-end gap-4">
          <button onClick={onClose} className="btn_white px-6 py-1">
            Cancel
          </button>

          <button
            onClick={handleFormSubmit}
            className="px-8 py-1 rounded-md text-white btn_gradient"
          >
            {loading ? "Submitting..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}
