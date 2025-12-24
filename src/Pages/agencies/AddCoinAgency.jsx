import React from "react";
import TitleAndSubTitle from "../../adminPanel/components/TitleAndSubTitle";
import AddCoinAgencyForm from "../../adminPanel/components/agencies/AddCoinAgencyForm";

export default function AddCoinAgency() {
  return (
    <>
      <TitleAndSubTitle
        title="Add New Coin Agency"
        subtitle="Create a new Coin agency to manage livestream hosts"
      />

      {/* form */}
      <AddCoinAgencyForm />
    </>
  );
}
