import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import LevelUpTable from "../../components/dataStores/LevelUpTable";
import Error from "../../components/Error";
import TopPerformanceLoading from "../../components/TopPerformanceLoading";

export default function LevelUp() {
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/level-configs?page=${page}&limit=30`,
    refresh,
  );

  if (loading) return <TopPerformanceLoading length={5} />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <LevelUpTable data={data} setPage={setPage} setRefresh={setRefresh} />
    </div>
  );
}
