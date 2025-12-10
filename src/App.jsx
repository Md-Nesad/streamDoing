import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Host from "./Pages/Host";
import CoinManageMent from "./Pages/CoinManageMent";
import RateTransaction from "./Pages/RateTransaction";
import ExchangeRate from "./Pages/ExchangeRate";
import MasterLedger from "./Pages/MasterLedger";
import Agencies from "./Pages/agencies";
import AddHostAgency from "./Pages/agencies/AddHostAgency";
import AddCoinAgency from "./Pages/agencies/AddCoinAgency";
import AddMasterAgency from "./Pages/agencies/AddMasterAgency";
import AddAdminAgency from "./Pages/agencies/AddAdminAgency";
import Users from "./Pages/Users";
import Transaction from "./Pages/Transaction";
import LiveStreams from "./Pages/LiveStreams";
import Moderation from "./Pages/Moderation";
import Analytics from "./Pages/Analytics";
import Finance from "./Pages/Finance";
import KycCenter from "./Pages/KycCenter";
import PkMaster from "./Pages/PkMaster";
import SalaryTarget from "./Pages/SalaryTarget";
import GiftAndAssests from "./Pages/GiftAndAssests";
import Setting from "./Pages/Setting";

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
            <Route path="agencies" element={<Agencies />} />
            <Route
              path="agencies/add-host-agency"
              element={<AddHostAgency />}
            />
            <Route
              path="agencies/add-coin-agency"
              element={<AddCoinAgency />}
            />
            <Route
              path="agencies/add-master-agency"
              element={<AddMasterAgency />}
            />

            <Route
              path="agencies/add-admin-agency"
              element={<AddAdminAgency />}
            />
            <Route path="users" element={<Users />} />
            <Route path="transaction-history" element={<Transaction />} />
            <Route path="live-streams" element={<LiveStreams />} />
            <Route path="moderation" element={<Moderation />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="finance" element={<Finance />} />
            <Route path="pk-masters" element={<PkMaster />} />
            <Route path="kyc-centre" element={<KycCenter />} />
            <Route path="salary-target" element={<SalaryTarget />} />
            <Route path="gifts-assets" element={<GiftAndAssests />} />
            <Route path="settings" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
