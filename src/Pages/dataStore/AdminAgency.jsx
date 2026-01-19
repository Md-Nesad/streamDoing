import AdminAgencyTable from "../../components/dataStores/AdminAgencyTable";
import AdminAgencyTitle from "../../components/TitleAndSubTitle";
import { Download } from "lucide-react";

export default function AdminAgency() {
  return (
    <div>
      <header
        aria-label="user management title area"
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center"
      >
        <AdminAgencyTitle
          title="Admin Agency"
          subtitle="Manage all user records and profiles"
        />

        {/* <button className="sm:px-5 px-2 sm:py-1.5 py-2 mb-3 rounded-md bg-[#074DFFBD] font-medium flex items-center gap-2 max-sm:-mt-1 text-sm sm:text-md text-white">
          <Download size={18} /> Export Data
        </button> */}
      </header>
      <AdminAgencyTable />
    </div>
  );
}
