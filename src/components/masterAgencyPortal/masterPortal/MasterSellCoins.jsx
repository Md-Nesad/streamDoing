import React, { useState } from "react";
import { BASE_URL } from "../../../utility/utility";
import useJsonPost from "../../../hooks/useJsonPost";
import { toast } from "react-toastify";

export default function MasterSellCoins() {
  const [coinAgencyId, setCoinAgencyId] = useState("");
  const [coins, setCoins] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = useJsonPost(`${BASE_URL}/agency/master/coin-sale`);

  const handleCoinSell = async () => {
    if (!coinAgencyId) return toast.error("Please enter coin Agency ID");
    if (!coins) return toast.error("Please enter coin amount");

    setLoading(true);
    const result = await handleSubmit({ coinAgencyId, coins });

    setLoading(false);

    if (result.success === false) {
      return toast.error(result.message);
    } else {
      setCoinAgencyId("");
      setCoins("");
      return toast.success(result.message);
    }
  };

  return (
    <div className="w-full px-5 py-7 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06)] rounded-md mt-8">
      {/* Title */}
      <h2 className="text-[22px] font-semibold text-gray-800">Sell Coins</h2>
      <p className="text-gray-500 text-md mb-7">Transfer coins from platform</p>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:ml-10">
        {/* user ID */}
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-sm font-medium text-gray-700">
            Coin Agency ID
          </label>
          <input
            type="number"
            value={coinAgencyId}
            onChange={(e) => setCoinAgencyId(e.target.value)}
            placeholder="Enter coin Agency Id"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Number of Coins */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Coin Amount
          </label>
          <input
            type="number"
            value={coins}
            onChange={(e) => setCoins(e.target.value)}
            placeholder="Enter Amount"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-2 mt-7">
          <button
            type="button"
            onClick={handleCoinSell}
            className="px-12 py-2 text-md btn_gradient"
          >
            {loading ? "Transferring..." : "Transfer Coins"}
          </button>
        </div>
      </form>
    </div>
  );
}
