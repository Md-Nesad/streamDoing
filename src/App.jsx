import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Host from "./Pages/Host";
import CoinManageMent from "./Pages/CoinManageMent";
import RateTransaction from "./Pages/RateTransaction";
import ExchangeRate from "./Pages/ExchangeRate";
import MasterLedger from "./Pages/MasterLedger";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* dashboard nested routes here */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="host" element={<Host />} />
            <Route path="coins" element={<CoinManageMent />} />
            <Route path="rate-transaction" element={<RateTransaction />} />
            <Route path="exchange-rate" element={<ExchangeRate />} />
            <Route path="master-ledger" element={<MasterLedger />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
