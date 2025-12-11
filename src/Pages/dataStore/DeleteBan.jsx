import UserManagementTitle from "../../components/TitleAndSubTitle";
import { Download } from "lucide-react";
import AdminAgencyTable from "../../components/dataStores/AdminAgencyTable";
import DeleteBanTable from "../../components/dataStores/DeleteBanTable";

export default function DeleteBan() {
  return (
    <div>
      <header
        aria-label="delete/ban title and subtitle"
        className="flex justify-between items-center"
      >
        <UserManagementTitle
          title="Delete / Ban Management"
          subtitle="Centralized control for all bans and deletions"
        />

        <button className="sm:px-5 px-2 py-1.5 mb-3 rounded-md bg-[#074DFFBD] font-medium flex items-center gap-2 text-sm sm:text-md text-white">
          <Download size={18} /> Export Data
        </button>
      </header>
      <DeleteBanTable />
    </div>
  );
}
