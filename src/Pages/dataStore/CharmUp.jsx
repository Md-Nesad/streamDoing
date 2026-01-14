import React, { useState } from "react";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";
import CharmUpTable from "../../components/dataStores/CharmUpTable";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";

export default function CharmUp() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/charm-configs?page=${page}&limit=30`
  );

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <TitleAndSubTitle
        title="Charm Up Config"
        subtitle="Manage charm up packages and rewards"
      />
      <CharmUpTable data={data} setPage={setPage} />
    </div>
  );
}
