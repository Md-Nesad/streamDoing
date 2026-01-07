import SupportDeleteBanTable from "../../components/supportTeamPortal/SupportDashboardComponents/SupportDeleteBanTable";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";

export default function SupportDeleteBan() {
  return (
    <>
      <TitleAndSubTitle
        title="Delete / Ban Management"
        subtitle="Centralized control for all bans and deletions"
      />
      <SupportDeleteBanTable />
    </>
  );
}
