import React from "react";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";
import CharmUpTable from "../../components/dataStores/CharmUpTable";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";

export default function CharmUp() {
  const { data, loading, error } = useFetch(`${BASE_URL}/admin/charm-configs`);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <TitleAndSubTitle
        title="Charm Up Config"
        subtitle="Manage charm up packages and rewards"
      />
      <CharmUpTable data={data} />
    </div>
  );
}
