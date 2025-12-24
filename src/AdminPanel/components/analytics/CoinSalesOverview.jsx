export default function CoinSalesOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:pr-2">
      <div className="bg-[#DEE8FF] py-4 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] font-medium mb-3">Today's Sales</p>
        <h3 className="text-xl font-bold text-[#0C00E6]">458K</h3>
        <small className="text-[#25C962] mt-4 font-medium">+12%</small>
      </div>

      <div className="bg-[#F4D5FCAB] py-4 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] font-medium mb-3">Weekly Sales</p>
        <h3 className="text-xl font-bold text-[#DE06ED]">2.8M</h3>
        <small className="text-[#25C962] mt-4 font-medium">+12%</small>
      </div>

      <div className="bg-[#D5FCDBAB] py-4 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] font-medium mb-3">Monthly Sales</p>
        <h3 className="text-xl font-bold text-[#16B340]">9.4M</h3>
        <small className="text-[#25C962] mt-4 font-medium">+12%</small>
      </div>

      <div className="bg-[#FCD5D5AB] py-4 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] font-medium mb-3">
          Total Transactions
        </p>
        <h3 className="text-xl font-bold text-[#ED0606]">24.5K</h3>
        <small className="text-[#25C962] mt-4 font-medium">+12%</small>
      </div>
    </div>
  );
}
