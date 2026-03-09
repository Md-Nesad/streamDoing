import { useState } from "react";
import useJsonPost from "../../../hooks/useJsonPost";
import { BASE_URL } from "../../../utility/utility";
import { toast } from "react-toastify";

export default function CoinFreez() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = useJsonPost(
    `${BASE_URL}/agency/coin/coin-freeze/apply-by-user`,
  );
  const [freez, setFreez] = useState({
    userId: "",
    coinAmount: "",
    transactionPeriod: "",
  });

  //reset state
  const resetForm = () => {
    setFreez({
      userId: "",
      coinAmount: "",
      transactionPeriod: "",
    });
  };

  const payload = {
    userId: freez.userId,
    coins: freez.coinAmount,
    priode: freez.transactionPeriod,
  };

  //handle submit
  const handleFreez = async () => {
    if (!freez.userId || !freez.coinAmount || !freez.transactionPeriod) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    const result = await handleSubmit(payload);

    if (result.success === false) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
      resetForm();
    }
    setLoading(false);
  };

  return (
    <div className="w-full bg-white mt-12">
      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Research ID */}
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-sm font-medium text-gray-700">User ID</label>
          <input
            type="text"
            value={freez.userId}
            onChange={(e) => setFreez({ ...freez, userId: e.target.value })}
            placeholder="Enter User Id"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-2 mb-3">
          <label className="text-sm font-medium text-gray-700">
            Coin Amout
          </label>
          <input
            type="number"
            value={freez.coinAmount}
            onChange={(e) => setFreez({ ...freez, coinAmount: e.target.value })}
            placeholder="Enter Coin Amount"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* period */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">
            Transaction period
          </label>
          <input
            type="date"
            value={freez.transactionPeriod}
            onChange={(e) =>
              setFreez({ ...freez, transactionPeriod: e.target.value })
            }
            placeholder="12.09.25"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Price */}
        <div className=" flex-col gap-2 hidden">
          <label className="text-sm font-medium text-gray-700">Location</label>
          <input
            disabled
            type="text"
            placeholder="Los Angeles"
            className="border  border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </form>

      {/* Buttons */}
      <div className="flex justify-center sm:justify-end items-center gap-3 mt-8">
        <button
          type="button"
          onClick={resetForm}
          className="px-10 py-1 rounded-md border border-[#CCCCCC] text-[#181717] bg-white hover:bg-gray-200 font-[490]"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={handleFreez}
          className="px-12 py-1 rounded-md text-white font-medium
          bg-[#FA8282]"
        >
          {loading ? "Processing..." : "Coin Freez"}
        </button>
      </div>
    </div>
  );
}
