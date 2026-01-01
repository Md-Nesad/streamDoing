import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminAgencyLayout from "../../layouts/AdminAgencyLayout";
import AdminDashboard from "../../Pages/AdminAgencies/AdminDashboard";
import AddAgency from "../../Pages/AdminAgencies/AddAgency";
import AdminModerator from "../../Pages/AdminAgencies/AdminModerator";

export default function AdminAgencyPortal() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/admin-agency-portal" replace />}
          />
          {/* <Route path="/login" element={<AdminLogin />} /> */}

          {/* Admin agency nested routes */}
          <Route path="/admin-agency-portal" element={<AdminAgencyLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="add-agency" element={<AddAgency />} />
            <Route path="moderator" element={<AdminModerator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
