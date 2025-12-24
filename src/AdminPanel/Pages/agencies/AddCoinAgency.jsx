import React from "react";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";
import AddCoinAgencyForm from "../../components/agencies/AddCoinAgencyForm";

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
