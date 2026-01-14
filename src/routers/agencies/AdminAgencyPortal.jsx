import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminAgencyLayout from "../../layouts/AdminAgencyLayout";
import AdminDashboard from "../../Pages/AdminAgencies/AdminDashboard";
import AddAgency from "../../Pages/AdminAgencies/AddAgency";
import AdminModerator from "../../Pages/AdminAgencies/AdminModerator";
import AdminAgencyLogin from "../../Pages/AdminAgencies/AdminAgencyLogin";
import NotFound from "../../Pages/NotFound";
import { AdminProtectedRoute } from "../ProtectedRoutes";

export default function AdminAgencyPortal() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/admin-portal-login" replace />}
          />
          <Route path="/admin-portal-login" element={<AdminAgencyLogin />} />

          {/* Admin agency nested routes */}
          <Route element={<AdminProtectedRoute />}>
            <Route path="/admin-agency-portal" element={<AdminAgencyLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="add-agency" element={<AddAgency />} />
              <Route path="moderator" element={<AdminModerator />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
