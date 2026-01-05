import MasterAgencyTitle from "../../components/TitleAndSubTitle";
import MasterAgencyTable from "../../components/dataStores/MasterAgencyTable";

export default function MasterAgency() {
  return (
    <div>
      <MasterAgencyTitle
        title="Master Agency"
        subtitle="Manage top-tier master agencies"
      />
      <MasterAgencyTable />
    </div>
  );
}
