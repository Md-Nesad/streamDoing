import React from "react";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";
import MasterAgenciesTabs from "../../components/masterAgencyPortal/masterPortal/MasterAgenciesTabs";

export default function MasterPortalAgencies() {
  return (
    <div>
      <TitleAndSubTitle
        title="Agency Management"
        subtitle="Manage host and coin agencies"
      />
      <MasterAgenciesTabs />
    </div>
  );
}
