import { Outlet } from "react-router-dom";
import AdminAgencyHeader from "../components/AdminAgenciesComponents/common/AdminAgencyHeader";
import AdminAgencySidebar from "../components/AdminAgenciesComponents/common/AdminAgencySidebar";

export default function AdminAgencyLayout() {
  return (
    <>
      <header className="w-full shrink-0 fixed top-0 z-10">
        <AdminAgencyHeader />
      </header>

      <div className="flex flex-1 overflow-hidden hide_scrollbar pt-3 mt-30">
        <aside className="lg:w-55 lg:mr-13">
          <AdminAgencySidebar />
        </aside>

        <main className="flex-1 overflow-auto sm:px-6 px-4 sm:mr-9 sm:ml-2 hide_scrollbar">
          <Outlet />
        </main>
      </div>
    </>
  );
}
