import React, { useState } from "react";
import TopUpPackagesTable from "../../components/dataStores/TopUpPackagesTable";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import Error from "../../components/Error";
import TopPerformanceLoading from "../../components/TopPerformanceLoading";

export default function TopUp() {
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/top-up-packages?page=${page}&limit=30`,
    refresh,
  );

  if (loading) return <TopPerformanceLoading length={5} />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <TopUpPackagesTable
        data={data}
        setPage={setPage}
        setRefresh={setRefresh}
      />
    </div>
  );
}
