import React from "react";
import HostTitle from "../../adminPanel/components/TitleAndSubTitle";
import HostManageMentTable from "../../adminPanel/components/dataStores/HostTable";
export default function HostManagement() {
  return (
    <div>
      <HostTitle
        title="Host Management"
        subtitle="Manage all host records and profiles"
      />
      <HostManageMentTable />
    </div>
  );
}
