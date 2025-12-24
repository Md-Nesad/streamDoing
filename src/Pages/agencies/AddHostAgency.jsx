import React from "react";
import TitleAndSubTitle from "../../adminPanel/components/TitleAndSubTitle";
import AddHostAgencyForm from "../../adminPanel/components/agencies/AddHostAgency";

export default function AddHostAgency() {
  return (
    <>
      <TitleAndSubTitle
        title="Add New Host Agency"
        subtitle="Create a new Host agency to manage livestream hosts"
      />

      {/* form */}
      <AddHostAgencyForm />
    </>
  );
}
