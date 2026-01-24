import React, { useState } from "react";
import CharmUpTable from "../../components/dataStores/CharmUpTable";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import TopPerformanceLoading from "../../components/TopPerformanceLoading";

export default function CharmUp() {
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/charm-configs?page=${page}&limit=20`,
    refresh,
  );

  if (loading) return <TopPerformanceLoading length={5} />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <CharmUpTable data={data} setPage={setPage} setRefresh={setRefresh} />
    </div>
  );
}
