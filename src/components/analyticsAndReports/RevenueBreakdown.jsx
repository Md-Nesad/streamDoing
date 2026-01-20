export default function RevenueBreakdown() {
  const data = [
    {
      title: "Coin Purchases",
      amount: "$45,200",
      percent: 72,
    },
    {
      title: "Gifts & Features",
      amount: "$18,500",
      percent: 85,
    },
    {
      title: "Premium Features",
      amount: "$3,500",
      percent: 48,
    },
  ];

  return (
    <div className="w-full bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl p-6 my-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Revenue Breakdown
      </h2>

      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index}>
            {/* Top row */}
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-700 font-medium">{item.title}</p>
              <p className="text-sm font-semibold text-green-500">
                {item.amount}
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 rounded-full"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
