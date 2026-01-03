import React from "react";
import HostStats from "../../components/hostAgencyPortal/hostDashboard/HostStats";
import HostList from "../../components/hostAgencyPortal/hostDashboard/HostList";

export default function HostDashboard() {
  return (
    <div>
      <HostStats />
      <HostList />
    </div>
  );
}
