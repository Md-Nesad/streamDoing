import AgenciesTable from "../components/AgenciesTable";
import LiveStat from "../components/LiveState";
import Sidebar from "../components/Sidebar";
import StatsSection from "../components/StatsCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen pt-3">
      <Sidebar />

      {/* stats section here */}
      <main className="flex-1 sm:px-6 px-4 sm:mr-7">
        <section>
          <StatsSection />
        </section>

        {/* live state section here */}
        <section className="bg-[#FFFFFF] shadow-[0_0_5px_1px_rgba(0,0,0,0.15)] pb-10 pt-1 mt-7 pl-5 pr-7 rounded-md">
          <h3 className="mt-6 mb-6 font-semibold text-[#181717] text-lg">
            Live Platform Stats
          </h3>
          <LiveStat />
        </section>

        {/* agescies table here */}
        <AgenciesTable />
      </main>
    </div>
  );
}
