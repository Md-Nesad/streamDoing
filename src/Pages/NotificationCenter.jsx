import ComposeNotification from "../adminPanel/components/notificationCenter/ComposeNotification";
import NotificationHistoryTable from "../adminPanel/components/notificationCenter/NotificationHistoryTable";
import TitleAndSubTitle from "../adminPanel/components/TitleAndSubTitle";

export default function NotificationCenter() {
  return (
    <div>
      <TitleAndSubTitle
        title="Notification Center"
        subtitle="Send notifications to users, agencies, and hosts"
      />
      <ComposeNotification />
      <NotificationHistoryTable />
    </div>
  );
}
