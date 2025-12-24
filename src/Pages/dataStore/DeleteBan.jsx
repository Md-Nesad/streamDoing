import UserManagementTitle from "../../components/TitleAndSubTitle";
import { Download } from "lucide-react";
import DeleteBanTable from "../../components/dataStores/DeleteBanTable";

export default function DeleteBan() {
  return (
    <div>
      <header
        aria-label="user management title area"
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center"
      >
        <UserManagementTitle
          title="Delete / Ban Management"
          subtitle="Centralized control for all bans and deletions"
        />

        <button className="sm:px-5 px-2 sm:py-1.5 py-2 mb-3 rounded-md bg-[#074DFFBD] font-medium flex items-center gap-2 max-sm:-mt-1 text-sm sm:text-md text-white">
          <Download size={18} /> Export Data
        </button>
      </header>
      <DeleteBanTable />
    </div>
  );
}
