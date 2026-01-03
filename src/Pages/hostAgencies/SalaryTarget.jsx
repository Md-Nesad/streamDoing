import React from "react";
import HostStats from "../../components/hostAgencyPortal/hostDashboard/HostStats";
import SalaryTargetTable from "../../components/hostAgencyPortal/hostDashboard/SalaryTargetTable";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";

export default function HostSalaryTarget() {
  const { data, loading, error } = useFetch(`${BASE_URL}/admin/salary-targets`);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <HostStats />
      <SalaryTargetTable data={data?.salaryTargets} />
    </div>
  );
}
