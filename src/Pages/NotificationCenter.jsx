import ComposeNotification from "../components/notificationCenter/ComposeNotification";
import NotificationHistoryTable from "../components/notificationCenter/NotificationHistoryTable";
import TitleAndSubTitle from "../components/TitleAndSubTitle";

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
