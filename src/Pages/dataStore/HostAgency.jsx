import React from "react";
import HostAgencyTitle from "../../adminPanel/components/TitleAndSubTitle";
import HostAgnecyTable from "../../adminPanel/components/dataStores/HostAgencyTable";

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
