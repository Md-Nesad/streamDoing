import { useState } from "react";
import ChatHeader from "../components/inboxAssests/ChatHeader";
import ChatMessages from "../components/inboxAssests/ChatMessage";
import ChatInput from "../components/inboxAssests/ChatInput";
import UserDetails from "../components/inboxAssests/UserDetails";
import { chatUsers } from "../../data/data";
import InBoxSidebar from "../components/inboxAssests/InboxSidebar";

export default function InboxPage() {
  const [selectedUser, setSelectedUser] = useState(chatUsers[0]);
  const [accessStatus, setAccessStatus] = useState("NONE");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex h-[80vh]">
      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-40 w-[330px]
        bg-white rounded-md border-t border-[#c6c6c68d] lg:shadow-[0_2px_10px_rgba(0,0,0,0.06)] transform transition-transform
        ${showSidebar ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <InBoxSidebar
          users={chatUsers}
          selectedUser={selectedUser}
          onSelect={(user) => {
            setSelectedUser(user);
            setAccessStatus("NONE");
            setShowSidebar(false);
          }}
          onClose={() => setShowSidebar(false)}
        />
      </div>

      {/* Chat */}
      <div className="flex flex-col flex-1 mx-5 bg-white rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
        <ChatHeader
          user={selectedUser}
          accessStatus={accessStatus}
          onMenu={() => setShowSidebar(true)}
          onDetails={() => setShowDetails(true)}
          onTakeAccess={() => setAccessStatus("TAKEN")}
          onLeaveAccess={() => setAccessStatus("LEFT")}
        />

        <ChatMessages messages={selectedUser.messages} />

        <ChatInput canReply={accessStatus === "TAKEN"} />
      </div>

      {/* User Details */}
      <div
        className={`fixed lg:static inset-y-0 right-0 z-40 w-[280px]
        bg-white rounded-md border-t border-[#c6c6c68d] lg:shadow-[0_2px_10px_rgba(0,0,0,0.06)] transform transition-transform
        ${showDetails ? "translate-x-0" : "translate-x-full"}
        lg:translate-x-0`}
      >
        <UserDetails
          user={selectedUser}
          onClose={() => setShowDetails(false)}
        />
      </div>
    </div>
  );
}
