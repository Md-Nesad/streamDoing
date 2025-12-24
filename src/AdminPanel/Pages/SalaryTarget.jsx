import SalaryCard from "../components/dashboard/StatsCard";
import SalaryTable from "../components/SalaryTable";
import { salaryTarget } from "../../data/data";

export default function SalaryTarget() {
  return (
    <div>
      <SalaryCard data={salaryTarget} />
      <SalaryTable />
    </div>
  );
}
