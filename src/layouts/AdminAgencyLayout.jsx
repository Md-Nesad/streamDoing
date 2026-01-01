import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminAgencyLayout() {
  return (
    <div>
      <h1>Admin Agency</h1>

      <Outlet />
    </div>
  );
}
