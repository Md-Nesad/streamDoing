import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
import HostAgencyLogin from "../../Pages/hostAgencies/HostAgencyLogin";
import HostPortalLayout from "../../layouts/HostPortalLayout";
import HostDashboard from "../../Pages/hostAgencies/HostDashboard";
import JoinRequest from "../../Pages/hostAgencies/JoinRequest";
import HostSalaries from "../../Pages/hostAgencies/Salaries";
import HostSalaryTarget from "../../Pages/hostAgencies/SalaryTarget";
import OfficialPk from "../../Pages/hostAgencies/OfficialPk";
import HostAnalytics from "../../Pages/hostAgencies/HostAnalytics";
import { HostProtectedRoute } from "../ProtectedRoutes";

export default function HostAgencyPortal() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/host-portal-login" replace />}
          />
          <Route path="/host-portal-login" element={<HostAgencyLogin />} />

          <Route element={<HostProtectedRoute />}>
            <Route path="/host-agency-portal" element={<HostPortalLayout />}>
              <Route index element={<HostDashboard />} />
              <Route path="join-requests" element={<JoinRequest />} />
              <Route path="salaries" element={<HostSalaries />} />
              <Route path="salary-target" element={<HostSalaryTarget />} />
              <Route path="official-pk" element={<OfficialPk />} />
              <Route path="analytics" element={<HostAnalytics />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
