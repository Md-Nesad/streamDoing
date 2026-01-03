import SalaryCard from "../components/dashboard/StatsCard";
import Error from "../components/Error";
import Loading from "../components/Loading";
import SalaryTable from "../components/SalaryTable";
import { salaryTarget } from "../data/data";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utility/utility";

export default function SalaryTarget() {
  const { data, loading, error } = useFetch(`${BASE_URL}/admin/salary-targets`);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <div>
      <SalaryCard data={salaryTarget} />
      <SalaryTable data={data?.salaryTargets} />
    </div>
  );
}
