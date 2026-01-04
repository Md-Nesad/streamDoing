import { Outlet } from "react-router-dom";
import SupportPortalHeader from "../components/supportTeamPortal/common/SupportPortalHeader";
import SupportPortalSidebar from "../components/supportTeamPortal/common/SupportPortalSidebar";

export default function SupportPortalLayout() {
  return (
    <>
      <header className="w-full shrink-0 fixed top-0 z-10">
        <SupportPortalHeader />
      </header>

      <div className="flex flex-1 overflow-hidden hide_scrollbar pt-3 mt-30">
        <aside className="lg:w-55 lg:mr-13">
          <SupportPortalSidebar />
        </aside>

        <main className="flex-1 overflow-auto sm:px-6 px-4 sm:mr-9 sm:ml-2 hide_scrollbar">
          <Outlet />
        </main>
      </div>
    </>
  );
}
