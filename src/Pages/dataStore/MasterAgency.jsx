import React from "react";
import MasterAgencyTitle from "../../adminPanel/components/TitleAndSubTitle";
import MasterAgencyTable from "../../adminPanel/components/dataStores/MasterAgencyTable";

export default function MasterAgency() {
  return (
    <div>
      <MasterAgencyTitle
        title="Master Agency"
        subtitle="Manage top-tier master agencies"
      />
      <MasterAgencyTable />
    </div>
  );
}
