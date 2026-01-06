import { useState } from "react";
import useJsonPost from "../../../hooks/useJsonPost";
import { BASE_URL } from "../../../utility/utility";

export default function QuickSellCoins() {
  const [userId, setUserId] = useState("");
  const [coins, setCoins] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = useJsonPost(`${BASE_URL}/agency/coin/coin-sale/to-user`);

  const handleCoinSell = async () => {
    if (!userId) return alert("Please enter Valid User ID");
    if (!coins) return alert("Please enter coin amount");
    setLoading(true);
    const result = await handleSubmit({ userId, coins });
    setLoading(false);
    alert(result.message);

    setUserId("");
    setCoins("");
  };

  return (
    <div className="w-full px-5 py-7 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06)] rounded-md mt-8">
      {/* Title */}
      <h2 className="text-[22px] font-semibold text-gray-800">
        Quick Sell Coins
      </h2>
      <p className="text-gray-500 text-md mb-7">Transfer coins from platform</p>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:ml-10">
        {/* user ID */}
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-sm font-medium text-gray-700">User ID</label>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter User Id"
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
          {/* <label className="text-sm font-medium text-gray-700">
            Number of Coins
          </label> */}
          <button
            type="button"
            onClick={handleCoinSell}
            className="px-12 py-2 text-md btn_gradient"
          >
            {loading ? "transferring..." : "Transfer Coins"}
          </button>
        </div>
      </form>
    </div>
  );
}
