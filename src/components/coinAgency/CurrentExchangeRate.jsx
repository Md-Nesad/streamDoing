import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import Loading from "../Loading";

export default function CurrentExchangeRate() {
  const { data, loading } = useFetch(`${BASE_URL}/coins/rates/latest`);
  const tiers = [
    {
      title: "Master Tier",
      min: "100,000",
      price: "$" + data?.coinRate?.masterRate,
    },
    {
      title: "Agency Tier",
      min: "10,000",
      price: "$" + data?.coinRate?.agencyRate,
    },
    {
      title: "User Tier",
      min: "100",
      price: "$" + data?.coinRate?.userRate,
    },
  ];

  if (loading) return <Loading />;
  return (
    <div className="w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl p-3 sm:p-5 mt-6 mb-8">
      {/* Title */}
      <h2 className="text-xl font-bold text-[#1a1a1a] opacity-85 mb-5">
        Current Exchange Rate
      </h2>

      {/* Tiers */}
      <div className="flex flex-col gap-4">
        {tiers?.map((t, i) => (
          <div
            key={i}
            className="flex flex-col max-sm:gap-3 justify-start sm:flex-row sm:items-center sm:justify-between w-full border border-gray-200 rounded-lg sm:px-6 px-3 py-2 bg-white"
          >
            {/* Left */}
            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">
                {t.title}
              </h3>
              <p className="text-sm text-[#535353] font-medium">
                Min Purchase: {t.min} coins
              </p>
            </div>

            {/* Right */}
            <div className="sm:text-right text-left">
              <p className="text-xl font-bold text-[#1a1a1a]">{t.price}</p>
              <p className="text-sm text-[#535353] font-medium">per coin</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
