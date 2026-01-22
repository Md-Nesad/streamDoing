import UserManagementTitle from "../../components/TitleAndSubTitle";
import CoinAgencyTable from "../../components/dataStores/CoinAgencyTable";

export default function CoinAgency() {
  return (
    <div>
      <header
        aria-label="user management title area"
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center"
      >
        <UserManagementTitle
          title="Coin Agency"
          subtitle="Manage all user records and profiles"
        />
      </header>
      <CoinAgencyTable />
    </div>
  );
}
