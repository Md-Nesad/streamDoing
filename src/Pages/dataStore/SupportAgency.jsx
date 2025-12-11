import UserManagementTitle from "../../components/TitleAndSubTitle";
import { Download } from "lucide-react";
import AdminAgencyTable from "../../components/dataStores/AdminAgencyTable";

export default function SupportAgency() {
  return (
    <div>
      <header
        aria-label="support agency title and subtitle"
        className="flex justify-between items-center"
      >
        <UserManagementTitle
          title="Support Agency"
          subtitle="Manage all user records and profiles"
        />

        <button className="sm:px-5 px-2 py-1.5 mb-3 rounded-md bg-[#074DFFBD] font-medium flex items-center gap-2 text-sm sm:text-md text-white">
          <Download size={18} /> Export Data
        </button>
      </header>
      <AdminAgencyTable />
    </div>
  );
}
