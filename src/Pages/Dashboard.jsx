import AgenciesTable from "../components/dashboard/AgenciesTable";
import LiveStat from "../components/dashboard/LiveState";
import StatsSection from "../components/dashboard/StatsCard";
import { stats } from "../data/data";

export default function Dashboard() {
  return (
    <>
      <section>
        <StatsSection data={stats} />
      </section>

      {/* live state section here */}
      <section className="bg-[#FFFFFF] shadow-[0_2px_10px_rgba(0,0,0,0.06)] pb-10 pt-1 mt-7 pl-5 pr-7 rounded-md">
        <h3 className="mt-5 mb-6 font-semibold text-[#181717] text-xl">
          Live Platform Stats
        </h3>
        <LiveStat />
      </section>

      {/* agescies table here */}
      <AgenciesTable />
    </>
  );
}
