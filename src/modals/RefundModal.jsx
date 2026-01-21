import React, { useEffect, useState } from "react";
import useJsonPost from "../hooks/useJsonPost";
import { BASE_URL } from "../utility/utility";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";

export default function RefundModal({ open, onClose }) {
  if (!open) return null;
  const [userOrtransactionId, setUserOrtransactionId] = useState("");
  const [reason, setReason] = useState("");
  const [refundCoins, setRefundCoins] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = useJsonPost(`${BASE_URL}/coins/refunds`);

  //Auto fetch when masterId exists
  const { data: referenceData } = useFetch(
    userOrtransactionId
      ? `${BASE_URL}/coins/transaction/${userOrtransactionId}`
      : null,
  );

  useEffect(() => {
    if (referenceData?.transaction) {
      setCategory(referenceData.transaction.userType);
    } else {
      setCategory("");
    }
  }, [referenceData]);

  const handleRefund = async () => {
    if (!userOrtransactionId || !refundCoins) {
      return toast.error("Display Id and coins are required.");
    }
    setLoading(true);
    const result = await handleSubmit({
      userOrtransactionId,
      reason,
      refundCoins,
      category,
    });
    console.log(result);
    toast.success(result.message || "Refund added.");
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl shadow-xl sm:p-8 p-4 relative animatefadeIn">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">Refund Coin</h2>
        <p className="text-sm text-gray-500 mt-1">Refund coin to all</p>

        {/* Form */}
        <div className="grid sm:grid-cols-2 sm:gap-6 gap-3 mt-6">
          <div>
            <label className="text-sm font-medium text-gray-700">
              User Id/ Agency Id
            </label>
            <input
              type="text"
              value={userOrtransactionId}
              onChange={(e) => setUserOrtransactionId(e.target.value)}
              placeholder="user or agency id"
              className="w-full mt-1 rounded-md px-3 py-1.5 focus:outline-none border border-[#626060]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Reason</label>
            <input
              type="text"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter reason"
              className="w-full mt-1 rounded-md px-3 py-1.5 focus:outline-none border border-[#626060]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Coin Amount
            </label>
            <input
              type="number"
              value={refundCoins}
              onChange={(e) => setRefundCoins(e.target.value)}
              placeholder="Enter coin amount"
              className="w-full mt-1 rounded-md px-3 py-1.5 focus:outline-none border border-[#626060]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-2 text-gray-500 focus:outline-none  appearance-none"
            >
              <option>Category</option>
              <option value="coin">Coin</option>
              <option value="master">Master</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="sm:mt-10 mt-6 mb-2 sm:mb-0 flex justify-center sm:justify-end gap-4">
          <button onClick={onClose} className="border px-6 py-1 btn_white">
            Cancel
          </button>

          <button onClick={handleRefund} className="px-8 py-1 btn_gradient">
            {loading ? "submiting..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
}
