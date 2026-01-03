import React from "react";
import HostStats from "../../components/hostAgencyPortal/hostDashboard/HostStats";
import HostPortalForm from "../../components/hostAgencyPortal/hostDashboard/HostPortalForm";
import OfficialPkList from "../../components/hostAgencyPortal/hostDashboard/OfficialPkList";

export default function OfficialPk() {
  return (
    <>
      <HostStats />
      <HostPortalForm />
      <OfficialPkList />
    </>
  );
}
