import StatsSection from "../components/dashboard/StatsCard";
import { usersCard } from "../data/data";
import UsersTable from "../components/users/UsersTable";

export default function Users() {
  return (
    <div>
      <StatsSection data={usersCard} />

      <UsersTable />
    </div>
  );
}
