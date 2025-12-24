import SalaryCard from "../adminPanel/components/dashboard/StatsCard";
import SalaryTable from "../adminPanel/components/SalaryTable";
import { salaryTarget } from "../data/data";

export default function SalaryTarget() {
  return (
    <div>
      <SalaryCard data={salaryTarget} />
      <SalaryTable />
    </div>
  );
}
