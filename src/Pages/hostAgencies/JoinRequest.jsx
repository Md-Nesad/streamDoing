import React from "react";
import HostStats from "../../components/hostAgencyPortal/hostDashboard/HostStats";
import PendingJoinRequest from "../../components/hostAgencyPortal/hostDashboard/PendingJoinRequest";

export default function JoinRequest() {
  return (
    <>
      <HostStats />
      <PendingJoinRequest />
    </>
  );
}
