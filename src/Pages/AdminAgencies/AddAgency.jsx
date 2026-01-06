import TitleAndSubTitle from "../../components/TitleAndSubTitle";
import AddAdminHostAgency from "../../components/AdminAgenciesComponents/adminDashboard/AddAdminHostAgency";

export default function AddAgency() {
  return (
    <>
      <TitleAndSubTitle
        title="Add New Host Agency"
        subtitle="Create a new Host agency to manage livestream hosts"
      />
      <AddAdminHostAgency />
    </>
  );
}
