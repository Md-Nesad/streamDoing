import useFetch from "../../hooks/useFetch";
import {
  BASE_URL,
  formatNumber,
  totalViewersWithAvgDuration,
} from "../../utility/utility";

export default function LiveStat({ data }) {
  const {
    data: live,
    error,
    loading,
  } = useFetch(`${BASE_URL}/admin/live-streams?page=1&limit=200`);
  const liveStreams = live?.liveStreams;
  const { totalViewers } = totalViewersWithAvgDuration(liveStreams);

  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:pr-2">
      <div className="bg-[#DEE8FF] py-5 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] font-medium mb-3">
          Active Streams
        </p>
        <h3 className="text-xl font-bold text-[#0C00E6]">
          {loading ? "..." : liveStreams?.length}
        </h3>
      </div>

      <div className="bg-[#F4D5FCAB] py-5 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] font-medium mb-3">Viewers</p>
        <h3 className="text-xl font-bold text-[#DE06ED]">{totalViewers}</h3>
      </div>

      <div className="bg-[#D5FCDBAB] py-5 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] font-medium mb-3">
          Today’s Rewards
        </p>
        <h3 className="text-xl font-bold text-[#16B340]">
          {formatNumber(data?.todaysRewards)}
        </h3>
      </div>

      <div className="bg-[#FCD5D5AB] py-5 px-8 rounded-md shadow-sm">
        <p className="text-sm text-[#6F6E6E] font-medium mb-3">
          Coin Transactions
        </p>
        <h3 className="text-xl font-bold text-[#ED0606]">
          {formatNumber(data?.coinTransactions)}
        </h3>
      </div>
    </div>
  );
}
