export default function PaymentCards() {
  const data = [
    { name: "Stripe", transactions: 1245, revenue: 25000 },
    { name: "PayPal", transactions: 1245, revenue: 18000 },
    { name: "bKash", transactions: 1245, revenue: 25000 },
    { name: "Nagad", transactions: 1245, revenue: 25000 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-7">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-6 border border-gray-100"
        >
          {/* Title */}
          <h2 className="text-2xl max-sm:text-center font-semibold mb-6">
            {item.name}
          </h2>

          {/* Stats */}
          <div className="flex justify-between mb-2 text-gray-700">
            <span>Total Transactions</span>
            <span className="font-medium">{item.transactions}</span>
          </div>

          <div className="flex justify-between text-gray-700 mb-6">
            <span>Total Revenue</span>
            <span className="font-medium text-green-600">
              ${item.revenue.toLocaleString()}
            </span>
          </div>

          {/* Button */}
          <button className="text-center mx-auto block bg-[#E9F1FF] hover:bg-[#d8e8ff] transition text-gray-800 font-medium py-1 px-15 rounded-lg border border-[#C7D6F5]">
            Configure
          </button>
        </div>
      ))}
    </div>
  );
}
