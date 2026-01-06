import React from "react";
import HostTitle from "../../components/TitleAndSubTitle";
import HostManageMentTable from "../../components/dataStores/HostTable";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
export default function HostManagement() {
  const { data, loading, error } = useFetch(
    `${BASE_URL}/dashboard/hosts?page=1&limit=20`
  );

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <HostTitle
        title="Host Management"
        subtitle="Manage all host records and profiles"
      />
      <HostManageMentTable hostListData={data} />
    </div>
  );
}
