import { useState } from "react";
import ChatHeader from "../components/inboxAssests/ChatHeader";
import ChatMessages from "../components/inboxAssests/ChatMessage";
import ChatInput from "../components/inboxAssests/ChatInput";
import UserDetails from "../components/inboxAssests/UserDetails";
import InBoxSidebar from "../components/inboxAssests/InboxSidebar";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utility/utility";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function InboxPage() {
  const { data, loading, error } = useFetch(
    `${BASE_URL}/support-agency/conversations`,
  );
  const conversations = data?.conversations;
  const [selectedUser, setSelectedUser] = useState(conversations?.[0]);
  const [accessStatus, setAccessStatus] = useState("NONE");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

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
          users={conversations}
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

        <ChatMessages messages={selectedUser?.messages} />

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
