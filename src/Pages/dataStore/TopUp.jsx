import React, { useState } from "react";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";
import TopUpPackagesTable from "../../components/dataStores/TopUpPackagesTable";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function TopUp() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/top-up-packages?page=${page}&limit=30`
  );

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div>
      <TitleAndSubTitle
        title="Top Up Packages"
        subtitle="Manage top up packages and rewards"
      />
      <TopUpPackagesTable data={data} setPage={setPage} />
    </div>
  );
}
