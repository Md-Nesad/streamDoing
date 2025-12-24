import React from "react";
import HostAgencyTitle from "../../components/TitleAndSubTitle";
import HostAgnecyTable from "../../components/dataStores/HostAgencyTable";

export default function HostAgency() {
  return (
    <div>
      <HostAgencyTitle
        title=" Host Agency"
        subtitle="Manage all agency records and profiles"
      />
      <HostAgnecyTable />
    </div>
  );
}
