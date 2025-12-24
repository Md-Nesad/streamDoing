import StatsSection from "../adminPanel/components/dashboard/StatsCard";
import KycCenterTable from "../adminPanel/components/KycCenterTable";
import { kyc } from "../data/data";
export default function KycCenter() {
  return (
    <div>
      <StatsSection data={kyc} />
      <KycCenterTable />
    </div>
  );
}
