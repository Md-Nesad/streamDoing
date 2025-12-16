export default function History({ logData }) {
  return (
    <div className="w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl p-3 sm:p-5 mt-6 mb-8">
      {/* Tiers */}
      <div className="flex flex-col gap-4">
        {logData.map((t, i) => (
          <div
            key={i}
            className="flex items-center justify-between w-full border border-gray-200 rounded-lg sm:px-6 px-2 py-2 bg-white"
          >
            {/* Left */}
            <div>
              <h3 className="text-sm sm:text-lg font-semibold text-[#1a1a1a] mb-1">
                {t.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#535353] font-medium">
                Min Purchase: {t.min}
              </p>
            </div>

            {/* Right */}
            <div className="text-right">
              <p
                className={`text-sm sm:text-md font-semibold py-1 px-2 rounded `}
              >
                {t.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
