import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
import SupportPortalLayout from "../../layouts/SupportPortalLayout";
import SupportDashboard from "../../Pages/supportDashboard/SupportDashboard";
import SupportDashboardLogin from "../../Pages/supportDashboard/SupportDashboardLogin";
import LiveChat from "../../Pages/supportDashboard/LiveChat";
import Tickets from "../../Pages/supportDashboard/Tickets";
import SupportDeleteBan from "../../Pages/supportDashboard/SupportDeleteBan";
import SupportRefundCoins from "../../Pages/supportDashboard/SupportRefundCoins";
import Reports from "../../Pages/supportDashboard/Reports";
import FAQs from "../../Pages/supportDashboard/FAQs";
import SupportNotificationCenter from "../../Pages/supportDashboard/SupportNotificationCenter";
import SupportNotificationHistory from "../../Pages/supportDashboard/SupportNotificationHistory";
import { SupportProtectedRoute } from "../ProtectedRoutes";

export default function SupportDashboardPortal() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/support-dashboard-login" replace />}
          />
          <Route
            path="/support-dashboard-login"
            element={<SupportDashboardLogin />}
          />

          <Route element={<SupportProtectedRoute />}>
            <Route path="/support-dashboard" element={<SupportPortalLayout />}>
              <Route index element={<SupportDashboard />} />
              <Route path="live-chat" element={<LiveChat />} />
              <Route path="tickets" element={<Tickets />} />
              <Route path="delete-ban" element={<SupportDeleteBan />} />
              <Route path="refund-coins" element={<SupportRefundCoins />} />
              <Route path="reports" element={<Reports />} />
              <Route
                path="notification-center"
                element={<SupportNotificationCenter />}
              />
              <Route
                path="notification-history"
                element={<SupportNotificationHistory />}
              />
              <Route path="faqs" element={<FAQs />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
