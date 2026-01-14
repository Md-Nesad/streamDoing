import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CoinAgencyLogin from "../../Pages/coinAgencies/CoinAgencyLogin";
import CoinPortalLayout from "../../layouts/CoinPortalLayout";
import CoinDashboard from "../../Pages/coinAgencies/CoinDashboard";
import CoinTranactionHistory from "../../Pages/coinAgencies/CoinTranactionHistory";
import FreezCoins from "../../Pages/coinAgencies/FreezCoins";
import NotFound from "../../Pages/NotFound";
import { CoinProtectedRoute } from "../ProtectedRoutes";

export default function CoinAgencyPortal() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/coin-portal-login" replace />}
          />
          <Route path="/coin-portal-login" element={<CoinAgencyLogin />} />

          <Route element={<CoinProtectedRoute />}>
            <Route path="/coin-agency-portal" element={<CoinPortalLayout />}>
              <Route index element={<CoinDashboard />} />
              <Route
                path="transaction-history"
                element={<CoinTranactionHistory />}
              />
              <Route path="coin-freeze" element={<FreezCoins />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
