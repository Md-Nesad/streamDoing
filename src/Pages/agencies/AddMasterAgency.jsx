import React from "react";
import TitleAndSubTitle from "../../adminPanel/components/TitleAndSubTitle";
import AddMasterAgencyForm from "../../adminPanel/components/agencies/AddMasterAgencyForm";

export default function AddMasterAgency() {
  return (
    <>
      <TitleAndSubTitle
        title="Add New Master Agency"
        subtitle="Create a new Master agency to manage livestream hosts"
      />

      {/* form */}
      <AddMasterAgencyForm />
    </>
  );
}
