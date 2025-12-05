import TitleAndSubTitle from "../components/TitleAndSubTitle";
import TransactionTabs from "../components/transaction/TransactionTabs";

export default function Transaction() {
  return (
    <div>
      <TitleAndSubTitle
        title="Transaction History"
        subtitle="Manage host and Master Agencies"
      />
      <TransactionTabs />
    </div>
  );
}
