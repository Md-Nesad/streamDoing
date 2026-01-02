import React from "react";
import AddHostAgencyForm from "../../components/agencies/AddHostAgency";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";

export default function AddAgency() {
  return (
    <>
      <TitleAndSubTitle
        title="Add New Host Agency"
        subtitle="Create a new Host agency to manage livestream hosts"
      />
      <AddHostAgencyForm />
    </>
  );
}
