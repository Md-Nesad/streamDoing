import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/header/AdminHeader";

export default function DashboardLayout() {
  return (
    <>
      <header className="w-full shrink-0 fixed top-0 z-10">
        <AdminHeader />
      </header>

      <div className="flex flex-1 overflow-hidden pt-3 mt-30 hide_scrollbar">
        <aside className="lg:w-55 md:w-50 shrink-0 overflow-y-auto bg-[#FFFFFF] px-1 py-2 ml-13 shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-md lg:block hidden h-[80vh] hide_scrollbar">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-auto sm:px-6 px-4 sm:mr-9 sm:ml-2 hide_scrollbar">
          <Outlet />
        </main>
      </div>
    </>
  );
}
