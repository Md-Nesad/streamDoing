import UserManagementTitle from "../../components/TitleAndSubTitle";
import { Download } from "lucide-react";
import UserManagementTable from "../../components/dataStores/UserManagementTable";

export default function UserManagement() {
  return (
    <div>
      <header
        aria-label="user management title area"
        className="flex justify-between items-center"
      >
        <UserManagementTitle
          title="User Management"
          subtitle="Manage all user records and profiles"
        />

        <button className="sm:px-5 px-2 py-1.5 mb-3 rounded-md bg-[#074DFFBD] font-medium flex items-center gap-2 text-sm sm:text-md text-white">
          <Download size={18} /> Export Data
        </button>
      </header>
      <UserManagementTable />
    </div>
  );
}
