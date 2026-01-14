import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
import MasterPortalLayout from "../../layouts/MasterPortalLayout";
import MasterDashboard from "../../Pages/MasterAgencies/MasterDashboard";
import MasterAgencyLogin from "../../Pages/MasterAgencies/MasterAgencyLogin";
import MasterTransactionHistory from "../../Pages/MasterAgencies/MasterTransactionHistory";
import MasterPortalAgencies from "../../Pages/MasterAgencies/MasterPortalAgencies";
import MasterPortalAnalytics from "../../Pages/MasterAgencies/MasterPortalAnalytics";
import { MasterProtectedRoute } from "../ProtectedRoutes";

export default function MasterAgencyPortal() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/master-portal-login" replace />}
          />
          <Route path="/master-portal-login" element={<MasterAgencyLogin />} />

          <Route element={<MasterProtectedRoute />}>
            <Route
              path="/master-agency-portal"
              element={<MasterPortalLayout />}
            >
              <Route index element={<MasterDashboard />} />
              <Route
                path="transaction-history"
                element={<MasterTransactionHistory />}
              />
              <Route path="agencies" element={<MasterPortalAgencies />} />
              <Route path="analytics" element={<MasterPortalAnalytics />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
