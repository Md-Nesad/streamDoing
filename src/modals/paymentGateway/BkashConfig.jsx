import { useState } from "react";
import { BASE_URL } from "../../utility/utility";
import { toast } from "react-toastify";

export default function BkashConfig({ open, onClose, selected }) {
  if (!open) return null;
  const [isHold, setIsHold] = useState(true);
  const [name, setName] = useState(selected?.name);
  const [appKey, setAppKey] = useState(selected?.config.appKey);
  const [appSecret, setAppSecret] = useState(selected?.config.appSecret);
  const [username, setUsername] = useState(selected?.config.username);
  const [password, setPassword] = useState(selected?.config.password);
  const [baseURL, setBaseURL] = useState(selected?.config.baseURL);
  const [loading, setLoading] = useState(false);

  const handleToggle = () => {
    setIsHold(!isHold);
    // setAction(isHold ? "f" : "hold");
  };

  // handle form submission
  const handleSubmit = async () => {
    const data = {
      name,
      config: {
        appKey,
        appSecret,
        username,
        password,
        baseURL,
      },
      isActive: isHold,
    };
    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}/admin/payment-gateways/${selected._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
          body: JSON.stringify(data),
        },
      );
      const result = await res.json();

      if (result.success === true) {
        toast.success("Updated successfully.");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 sm:px-4 px-2">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl shadow-xl sm:p-8 p-4 relative animatefadeIn">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          Update Bkash Config
        </h2>

        {/* Form */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-6">
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
            <label className="text-sm font-medium text-gray-700">app key</label>
            <input
              type="text"
              placeholder="Enter app key"
              value={appKey}
              onChange={(e) => setAppKey(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              app secret
            </label>
            <input
              type="text"
              placeholder="Enter app "
              value={appSecret}
              onChange={(e) => setAppSecret(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              password
            </label>
            <input
              type="text"
              placeholder="Enter password "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              base URL
            </label>
            <input
              type="text"
              placeholder="Enter base URL "
              value={baseURL}
              onChange={(e) => setBaseURL(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          {/* Toggle */}
          <div className="flex items-center h-9.5 w-50 gap-4 border px-4 rounded-md mt-3">
            <span className="text-gray-700 font-medium">Update Status</span>
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
          <button
            type="button"
            onClick={onClose}
            className="btn_white px-6 py-1"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-8 py-1 rounded-md text-white btn_gradient"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}
