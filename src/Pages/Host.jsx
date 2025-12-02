import HostTable from "../components/host/HostTable";
import StatsSection from "../components/dashboard/StatsCard";
import { hosts } from "../data/data";

export default function Host() {
  return (
    <div>
      <StatsSection data={hosts} />
      <HostTable />
    </div>
  );
}
