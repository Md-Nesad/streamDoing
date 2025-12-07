import StatsSection from "../components/dashboard/StatsCard";
import KycCenterTable from "../components/KycCenterTable";
import { kyc } from "../data/data";
export default function KycCenter() {
  return (
    <div>
      <StatsSection data={kyc} />
      <KycCenterTable />
    </div>
  );
}
