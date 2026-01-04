import TicketsListTable from "../../components/supportTeamPortal/SupportDashboardComponents/TicketListTable";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";

export default function Tickets() {
  return (
    <div>
      <TitleAndSubTitle title="Tickets" subtitle="Manage all support tickets" />
      <TicketsListTable />
    </div>
  );
}
