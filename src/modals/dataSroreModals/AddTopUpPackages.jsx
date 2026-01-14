import { useState } from "react";
import { BASE_URL } from "../../utility/utility";
import useJsonPost from "../../hooks/useJsonPost";

export default function AddTopUpPackages({ open, onClose }) {
  if (!open) return null;
  const [name, setName] = useState("");
  const [coins, setCoins] = useState("");
  const [price, setPrice] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleSubmit = useJsonPost(`${BASE_URL}/admin/top-up-packages`);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  //handle post
  const handleTarget = async () => {
    if ((!name, !coins, !price, !isActive)) {
      return alert("Please fill all the fields");
    }
    setLoading(true);
    const result = await handleSubmit({
      name,
      coins,
      price,
      isActive,
    });
    alert(result.message || "Level config added.");
    setName("");
    setCoins("");
    setPrice("");
    setIsActive(false);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 sm:px-4 px-2">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl shadow-xl sm:p-8 p-4 relative animatefadeIn">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          Add Top Up Packages
        </h2>

        {/* Form */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-6">
          <div>
            <label className="text-sm font-medium text-gray-700 flex">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Coins</label>
            <input
              type="number"
              placeholder="Enter coins"
              value={coins}
              onChange={(e) => setCoins(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          {/* Toggle */}
          <div className="flex items-center h-9.5 gap-4 border px-4 rounded-md mt-6.5">
            <span className="text-gray-700 font-medium">Update Status</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={isActive}
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
          <button
            type="button"
            onClick={onClose}
            className="btn_white px-6 py-1"
          >
            Cancel
          </button>

          <button
            onClick={handleTarget}
            className="px-8 py-1 rounded-md text-white btn_gradient"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
