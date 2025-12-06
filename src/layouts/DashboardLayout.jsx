import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import AdminHeader from "../components/header/AdminHeader";

export default function DashboardLayout() {
  return (
    <>
      <header className="w-full shrink-0">
        <AdminHeader />
      </header>

      <div className="flex flex-1 overflow-hidden min-h-screen pt-3">
        <aside className="lg:w-55 md:w-50 shrink-0 overflow-auto bg-[#FFFFFF] mb-20 px-1 py-2 ml-13 shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-md lg:block hidden">
          <Sidebar />
        </aside>

        <main className="flex-1 overflow-auto sm:px-6 px-4 sm:mr-9 sm:ml-2">
          <Outlet />
        </main>
      </div>
    </>
  );
}
