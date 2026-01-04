import RefundHistory from "../../components/supportTeamPortal/SupportDashboardComponents/RefundHistory";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";

export default function SupportRefundCoins() {
  return (
    <div>
      <TitleAndSubTitle
        title="Refund History"
        subtitle="View all previous refund transactions"
      />

      <RefundHistory />
    </div>
  );
}
