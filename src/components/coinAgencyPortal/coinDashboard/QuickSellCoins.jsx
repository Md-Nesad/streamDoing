// import { useState } from "react";
// import useFetch from "../../hooks/useFetch";
// import useJsonPost from "../../hooks/useJsonPost";
// import { BASE_URL } from "../../utility/utility";

export default function QuickSellCoins() {
  //   const { data } = useFetch(`${BASE_URL}/coins/rates/latest`);
  //   const handleSubmit = useJsonPost(`${BASE_URL}/coins/sales/admin-to-master`);
  //   const agenciesOverview = useFetch(
  //     `${BASE_URL}/dashboard/agencies-overview?limit=10`
  //   );
  //   const masterIds = agenciesOverview?.data?.agencies;

  //   const [masterId, setMasterId] = useState("");
  //   const [coins, setCoins] = useState("");
  //   const [loading, setLoading] = useState(false);

  //   const handleCoinSell = async () => {
  //     if (!masterId) return alert("Please enter Master ID");
  //     const masterExists = masterIds?.some(
  //       (item) => String(item?.displayId) === String(masterId)
  //     );

  //     if (!masterExists) return alert("Invalid Master ID");
  //     if (!coins) return alert("Please enter coin amount");

  //     setLoading(true);
  //     const result = await handleSubmit({ masterId, coins });
  //     alert(result.message);

  //     setMasterId("");
  //     setCoins("");
  //     setLoading(false);
  //   };

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
            placeholder="Enter Amount"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-2 mt-7">
          {/* <label className="text-sm font-medium text-gray-700">
            Number of Coins
          </label> */}
          <button className="px-12 py-2 text-md btn_gradient">
            Transfer Coins
          </button>
        </div>
      </form>
    </div>
  );
}
