import AddAdminAgencyForm from "../../components/agencies/AddAdminAgencyForm";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";

export default function AddAdminAgency() {
  return (
    <>
      <TitleAndSubTitle
        title="Add New Admin Agency"
        subtitle="Create a new Admin agency to manage livestream hosts"
      />

      {/* form */}
      <AddAdminAgencyForm />
    </>
  );
}
