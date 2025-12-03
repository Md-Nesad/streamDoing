import React from "react";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";
import AddHostAgencyForm from "../../components/agencies/AddHostAgency";

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
