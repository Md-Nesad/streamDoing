import React from "react";
import TitleAndSubTitle from "../../components/TitleAndSubTitle";
import SendNotificationForm from "../../components/supportTeamPortal/SupportDashboardComponents/SendNotificationForm";
import NotificationHistory from "./NotificationHistory";

export default function SupportNotificationCenter() {
  return (
    <>
      <div>
        <TitleAndSubTitle
          title="Notification Center"
          subtitle="Send notifications to users, agencies, and hosts"
        />
        <SendNotificationForm />
        <NotificationHistory />
      </div>
    </>
  );
}
