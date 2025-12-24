import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import AdminLogin from "../../AdminPanel/Pages/Login";
import Host from "../../AdminPanel/pages/Host";
import CoinManageMent from "../../AdminPanel/pages/CoinManageMent";
import RateTransaction from "../../AdminPanel/pages/RateTransaction";
import ExchangeRate from "../../AdminPanel/pages/ExchangeRate";
import MasterLedger from "../../AdminPanel/pages/MasterLedger";
import Agencies from "../../AdminPanel/pages/agencies";
import AddHostAgency from "../../AdminPanel/pages/agencies/AddHostAgency";
import AddCoinAgency from "../../AdminPanel/pages/agencies/AddCoinAgency";
import AddMasterAgency from "../../AdminPanel/pages/agencies/AddMasterAgency";
import AddAdminAgency from "../../AdminPanel/pages/agencies/AddAdminAgency";
import Transaction from "../../AdminPanel/pages/Transaction";
import LiveStreams from "../../AdminPanel/pages/LiveStreams";
import Moderation from "../../AdminPanel/pages/Moderation";
import Analytics from "../../AdminPanel/pages/Analytics";
import Finance from "../../AdminPanel/pages/Finance";
import KycCenter from "../../AdminPanel/pages/KycCenter";
import PkMaster from "../../AdminPanel/pages/PkMaster";
import SalaryTarget from "../../AdminPanel/pages/SalaryTarget";
import GiftAndAssests from "../../AdminPanel/pages/GiftAndAssests";
import Setting from "../../AdminPanel/pages/Setting";
import HostManagement from "../../AdminPanel/pages/dataStore/Host";
import HostAgency from "../../AdminPanel/pages/dataStore/HostAgency";
import MasterAgency from "../../AdminPanel/pages/dataStore/MasterAgency";
import UserManagement from "../../AdminPanel/pages/dataStore/UserManagement";
import AdminAgency from "../../AdminPanel/pages/dataStore/AdminAgency";
import CoinAgency from "../../AdminPanel/pages/dataStore/CoinManagement";
import SupportAgency from "../../AdminPanel/pages/dataStore/SupportAgency";
import DeleteBan from "../../AdminPanel/pages/dataStore/DeleteBan";
import NotificationCenter from "../../AdminPanel/pages/NotificationCenter";
import InboxAssests from "../../AdminPanel/pages/InboxAssests";
import Dashboard from "../../AdminPanel/Pages/Dashboard";
import DashboardUsers from "../../AdminPanel/Pages/Users";

export default function DashboardRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<AdminLogin />} />
          {/* dashboard nested routes here */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="host" element={<Host />} />
            <Route path="coins" element={<CoinManageMent />} />
            <Route
              path="coins/rate-transaction"
              element={<RateTransaction />}
            />
            <Route path="coins/exchange-rate" element={<ExchangeRate />} />
            <Route path="coins/master-ledger" element={<MasterLedger />} />
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
            <Route path="users" element={<DashboardUsers />} />
            <Route path="transaction-history" element={<Transaction />} />
            <Route path="live-streams" element={<LiveStreams />} />
            <Route path="moderation" element={<Moderation />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="finance" element={<Finance />} />
            <Route path="pk-masters" element={<PkMaster />} />
            <Route path="kyc-centre" element={<KycCenter />} />
            <Route path="salary-target" element={<SalaryTarget />} />
            <Route path="gifts-assets" element={<GiftAndAssests />} />
            <Route
              path="notification-center"
              element={<NotificationCenter />}
            />
            <Route path="inbox" element={<InboxAssests />} />
            <Route path="settings" element={<Setting />} />
            {/* data store routes */}
            <Route path="host-management" element={<HostManagement />} />
            <Route path="host-agency" element={<HostAgency />} />
            <Route path="master-agency" element={<MasterAgency />} />
            <Route path="user-management" element={<UserManagement />} />
            <Route path="admin-agency" element={<AdminAgency />} />
            <Route path="coin-agency" element={<CoinAgency />} />
            <Route path="support" element={<SupportAgency />} />
            <Route path="delete-ban" element={<DeleteBan />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
