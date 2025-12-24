import TitleAndSubTitle from "../adminPanel/components/TitleAndSubTitle";
import TransactionTabs from "../adminPanel/components/transaction/TransactionTabs";

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
