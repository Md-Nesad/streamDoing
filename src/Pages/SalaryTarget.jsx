import { TrendingUp, Users } from "lucide-react";
import SalaryCard from "../components/dashboard/StatsCard";
import Error from "../components/Error";
import Loading from "../components/Loading";
import SalaryTable from "../components/SalaryTable";
import useFetch from "../hooks/useFetch";
import { BASE_URL, formatNumber, formatPercent } from "../utility/utility";
import Salary from "../../public/icons/Salary";
import Agency from "../../public/icons/Agency";
import { useState } from "react";

export default function SalaryTarget() {
  const [refresh, setRefresh] = useState(false);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/salary-targets`,
    refresh,
  );
  const {
    data: state,
    loading: stateLoading,
    error: stateError,
  } = useFetch(`${BASE_URL}/admin/salary-targets/stats`);

  if (loading || stateLoading) return <Loading />;
  if (error || stateError) return <Error error={error} />;

  const salaryTarget = [
    {
      title: "Total Hosts",
      value: state?.host?.totalHosts,
      change: `+${state?.host?.todayTotalHosts} today`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Salary",
      value: "$" + formatNumber(state?.totalSalary),
      change: "",
      icon: Salary,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Agency",
      value: state?.agency?.totalAgencies,
      change: formatPercent(state?.agency?.totalAgenciesGrowth),
      icon: Agency,
      iconBg: "bg-gradient-to-tl from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Share",
      value: "$" + formatNumber(state?.totalShares),
      change: "",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#73E113] to-[#83FF30]",
    },
  ];

  return (
    <div>
      <SalaryCard data={salaryTarget} />
      <SalaryTable data={data?.salaryTargets} setRefresh={setRefresh} />
    </div>
  );
}
