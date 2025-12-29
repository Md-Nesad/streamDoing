import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utility/utility";

export default function ExchangesRateModal({ open, onClose }) {
  if (!open) return null;
  // get latest coin rate
  const { data } = useFetch(`${BASE_URL}/coins/rates/latest`);

  const [masterRate, setMasterRate] = useState(data?.coinRate?.masterRate);
  const [agencyRate, setAgencyRate] = useState(data?.coinRate?.agencyRate);
  const [userRate, setUserRate] = useState(data?.coinRate?.userRate);
  const [loading, setLoading] = useState(false);

  //update coin rates
  const updateCoinRates = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/coins/rates`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
        body: JSON.stringify({ masterRate, agencyRate, userRate }),
      });
      const result = await res.json();
      alert(result.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMasterRate(data?.coinRate?.masterRate);
    setAgencyRate(data?.coinRate?.agencyRate);
    setUserRate(data?.coinRate?.userRate);
  }, [data]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl shadow-xl p-4 sm:p-8 relative animatefadeIn">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          Update Exchange Rates
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Modify coin exchange rates for different tiers
        </p>

        {/* Form */}
        <div className="mt-6 space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Master Rate
            </label>
            <input
              type="number"
              value={masterRate}
              onChange={(e) => setMasterRate(Number(e.target.value))}
              className="w-full mt-1 rounded-md px-3 py-1.5 focus:outline-none border border-[#626060]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Agency Rate
            </label>
            <input
              type="number"
              value={agencyRate}
              onChange={(e) => setAgencyRate(Number(e.target.value))}
              className="w-full mt-1 rounded-md px-3 py-1.5 focus:outline-none border border-[#626060]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              User Rate
            </label>
            <input
              type="number"
              value={userRate}
              onChange={(e) => setUserRate(Number(e.target.value))}
              className="w-full mt-1 rounded-md px-3 py-1.5 focus:outline-none border border-[#626060]"
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="sm:mt-10 mt-6 mb-2 sm:mb-0 flex justify-center sm:justify-end gap-4">
          <button onClick={onClose} className="border px-6 py-1 btn_white">
            Cancel
          </button>

          <button onClick={updateCoinRates} className="px-8 py-1 btn_gradient">
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}
