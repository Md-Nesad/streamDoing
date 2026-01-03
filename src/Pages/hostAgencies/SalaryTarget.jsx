import React from "react";
import HostStats from "../../components/hostAgencyPortal/hostDashboard/HostStats";
import SalaryTargetTable from "../../components/hostAgencyPortal/hostDashboard/SalaryTargetTable";
import { useStream } from "../../context/streamContext";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function HostSalaryTarget() {
  const { salariesData } = useStream();
  const { data, loading, error } = salariesData;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <HostStats />
      <SalaryTargetTable data={data?.salaryTargets} />
    </div>
  );
}
