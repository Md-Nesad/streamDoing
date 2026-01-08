import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import useJsonPost from "../../hooks/useJsonPost";
import { BASE_URL } from "../../utility/utility";
import downArrow from "/icons/Vector 151.png";

export default function SellCoins() {
  const { data } = useFetch(`${BASE_URL}/coins/rates/latest`);
  const handleSubmit = useJsonPost(`${BASE_URL}/coins/sales/admin-to-master`);
  const agenciesOverview = useFetch(
    `${BASE_URL}/dashboard/agencies-overview?limit=10`
  );
  const masterIds = agenciesOverview?.data?.agencies;

  const [masterId, setMasterId] = useState("");
  const [coins, setCoins] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCoinSell = async () => {
    if (!masterId) return alert("Please enter Agency ID");
    const masterExists = masterIds?.some(
      (item) => String(item?.displayId) === String(masterId)
    );

    if (!masterExists) return alert("Invalid ID");
    if (!coins) return alert("Please enter coin amount");

    setLoading(true);
    const result = await handleSubmit({ masterId, coins });
    alert(result.message);

    setMasterId("");
    setCoins("");
    setLoading(false);
  };

  return (
    <div className="w-full bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] px-4 py-5 mt-4">
      {/* Title */}
      <h2 className="text-[22px] font-semibold text-gray-800 mt-2">
        Sell Coins
      </h2>
      <p className="text-gray-500 text-md mb-7">Transfer coins from platform</p>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:ml-10">
        {/* Research ID */}
        <div className="flex flex-col gap-1 mb-3">
          <label className="text-[15px] font-medium text-gray-700">
            Research ID
          </label>
          <input
            type="number"
            value={masterId}
            onChange={(e) => setMasterId(e.target.value)}
            placeholder="Enter Agency Id"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1 mb-3">
          <label className="text-[15px] font-medium text-gray-700">
            Category
          </label>
          <div className="relative">
            <select
              disabled
              className="border border-[#626060] rounded-md px-3 pl-4 py-2 w-full outline-none appearance-none focus:ring-2 text-[15px] text-[#636363] focus:ring-blue-400"
            >
              <option>Category</option>
              <option>Coin</option>
              <option>Master</option>
              <option>Host</option>
            </select>

            {/* Dropdown Icon */}
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
              <img src={downArrow} alt="" />
            </span>
          </div>
        </div>

        {/* Number of Coins */}
        <div className="flex flex-col gap-1">
          <label className="text-[15px] font-medium text-gray-700">
            Number of Coins
          </label>
          <input
            type="number"
            value={coins}
            onChange={(e) => setCoins(e.target.value)}
            placeholder="Enter Amount"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Price */}
        <div className="flex flex-col gap-1">
          <label className="text-[15px] font-medium text-gray-700">
            Price (Coins)
          </label>
          <input
            defaultValue={data?.coinRate?.masterRate}
            type="number"
            readOnly
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="flex justify-center sm:justify-end items-center gap-2 mt-4">
        <button className="px-10 py-1 rounded-md border border-[#CCCCCC] text-[#181717] bg-white hover:bg-gray-200 font-[490]">
          Cancel
        </button>

        <button
          onClick={handleCoinSell}
          className="px-12 py-1 rounded-md text-white font-medium
          btn_gradient"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}
