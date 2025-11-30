export default function LiveStat() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-[#DEE8FF] py-4 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] mb-3">Active Streams</p>
        <h3 className="text-xl font-bold text-[#0C00E6]">156</h3>
      </div>

      <div className="bg-[#F4D5FCAB] py-4 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] mb-3">Viewers</p>
        <h3 className="text-xl font-bold text-[#DE06ED]">8,234</h3>
      </div>

      <div className="bg-[#D5FCDBAB] py-4 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] mb-3">Today’s Rewards</p>
        <h3 className="text-xl font-bold text-[#16B340]">458k</h3>
      </div>

      <div className="bg-[#FCD5D5AB] py-4 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] mb-3">Coin Transactions</p>
        <h3 className="text-xl font-bold text-[#ED0606]">1245</h3>
      </div>
    </div>
  );
}
