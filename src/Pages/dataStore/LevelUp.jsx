import React, { useState } from "react";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import LevelUpTable from "../../components/dataStores/LevelUpTable";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function LevelUp() {
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/level-configs?page=${page}&limit=30`,
    refresh,
  );

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <TitleAndSubTitle
        title="Level Up Config"
        subtitle="Manage level up packages and rewards"
      />
      <LevelUpTable data={data} setPage={setPage} setRefresh={setRefresh} />
    </div>
  );
}
