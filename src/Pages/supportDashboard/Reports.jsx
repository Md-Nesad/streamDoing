import ReportsTable from "../../components/supportTeamPortal/SupportDashboardComponents/ReportsTable";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";

export default function Reports() {
  return (
    <div>
      <TitleAndSubTitle
        title="Reports & Violations"
        subtitle="Manage user reports and take moderation actions"
      />

      <ReportsTable />
    </div>
  );
}
