import React, { useState } from "react";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";
import SendNotificationForm from "../../components/supportTeamPortal/SupportDashboardComponents/SendNotificationForm";
import NotificationHistory from "./NotificationHistory";

export default function SupportNotificationCenter() {
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <div>
        <TitleAndSubTitle
          title="Notification Center"
          subtitle="Send notifications to users, agencies, and hosts"
        />
        <SendNotificationForm setRefresh={setRefresh} />
        <NotificationHistory refresh={refresh} />
      </div>
    </>
  );
}
