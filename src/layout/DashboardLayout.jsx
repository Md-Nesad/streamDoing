import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen pt-3">
      <Sidebar />

      <main className="flex-1 sm:px-6 px-4 sm:mr-9 sm:ml-2">
        <Outlet />
      </main>
    </div>
  );
}
