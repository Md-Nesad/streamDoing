export default function CurrentExchangeRate({ tiers, title }) {
  return (
    <div className="w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl p-5 mt-6">
      {/* Title */}
      <h2 className="text-xl font-bold text-[#1a1a1a] opacity-85 mb-5">
        {title}
      </h2>

      {/* Tiers */}
      <div className="flex flex-col gap-4">
        {tiers.map((t, i) => (
          <div
            key={i}
            className="flex items-center justify-between w-full border border-gray-200 rounded-lg px-6 py-2 bg-white"
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
            <div className="text-right">
              <p className="text-xl font-bold text-[#1a1a1a]">{t.price}</p>
              <p className="text-sm text-[#535353] font-medium">per coin</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
