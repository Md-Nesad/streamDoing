import SalaryCard from "../components/dashboard/StatsCard";
import Error from "../components/Error";
import Loading from "../components/Loading";
import SalaryTable from "../components/SalaryTable";
import { useStream } from "../context/streamContext";
import { salaryTarget } from "../data/data";

export default function SalaryTarget() {
  const { salariesData } = useStream();
  const { data, loading, error } = salariesData;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      <SalaryCard data={salaryTarget} />
      <SalaryTable data={data?.salaryTargets} />
    </div>
  );
}
