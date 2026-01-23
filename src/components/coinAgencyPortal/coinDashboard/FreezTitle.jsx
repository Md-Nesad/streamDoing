import { useState } from "react";
import useJsonPost from "../../../hooks/useJsonPost";
import { BASE_URL } from "../../../utility/utility";
import { toast } from "react-toastify";

export default function FreezTitle() {
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = useJsonPost(`${BASE_URL}/agency/coin/coin-freeze/apply`);

  const handleCoinApply = async () => {
    if (!transactionId) return toast.error("Please enter Valid Transaction ID");
    setLoading(true);
    const result = await handleSubmit({ transactionId });

    if (result.success === false) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
      setTransactionId("");
    }
    setLoading(false);
    // if (result?.success === true) {
    //   setTransactionId("");
    // }
  };
  return (
    <>
      <div aria-label="rate transaction header" className="mb-5">
        <h2 className="text-xl font-semibold text-[#DB1A1A]">
          Coin will be Freez in 5 min after Transaction.
        </h2>
        <p className="text-md text-[#636363]">
          Freezed coin will be released in 15min
        </p>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-2">
        {/* user ID */}
        <div className="flex flex-col gap-2 mb-3 col-span-2">
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            placeholder="Transaction Id"
            className="border border-[#626060] rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex flex-col gap-2 w-60">
          <button
            type="button"
            onClick={handleCoinApply}
            className="px-12 py-2 text-md btn_gradient"
          >
            {loading ? "Freezing..." : "Apply"}
          </button>
        </div>
      </form>
    </>
  );
}
