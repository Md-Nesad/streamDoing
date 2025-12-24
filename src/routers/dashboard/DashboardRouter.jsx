import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import AdminLogin from "../../adminPanel/Pages/Login";
import Host from "../../adminPanel/Pages/Host";
import CoinManageMent from "../../adminPanel/Pages/CoinManageMent";
import RateTransaction from "../../adminPanel/Pages/RateTransaction";
import ExchangeRate from "../../adminPanel/Pages/ExchangeRate";
import MasterLedger from "../../adminPanel/Pages/MasterLedger";
import Agencies from "../../adminPanel/Pages/agencies";
import AddHostAgency from "../../adminPanel/Pages/agencies/AddHostAgency";
import AddCoinAgency from "../../adminPanel/Pages/agencies/AddCoinAgency";
import AddMasterAgency from "../../adminPanel/Pages/agencies/AddMasterAgency";
import AddAdminAgency from "../../adminPanel/Pages/agencies/AddAdminAgency";
import DashboardUsers from "../../adminPanel/Pages/Users";
import Transaction from "../../adminPanel/Pages/Transaction";
import LiveStreams from "../../adminPanel/Pages/LiveStreams";
import Moderation from "../../adminPanel/Pages/Moderation";
import Analytics from "../../adminPanel/Pages/Analytics";
import Finance from "../../adminPanel/Pages/Finance";
import PkMaster from "../../adminPanel/Pages/PkMaster";
import KycCenter from "../../adminPanel/Pages/KycCenter";
import SalaryTarget from "../../adminPanel/Pages/SalaryTarget";
import GiftAndAssests from "../../adminPanel/Pages/GiftAndAssests";
import NotificationCenter from "../../adminPanel/Pages/NotificationCenter";
import Setting from "../../adminPanel/Pages/Setting";
import HostManagement from "../../adminPanel/Pages/dataStore/Host";
import HostAgency from "../../adminPanel/Pages/dataStore/HostAgency";
import UserManagement from "../../adminPanel/Pages/dataStore/UserManagement";
import AdminAgency from "../../adminPanel/Pages/dataStore/AdminAgency";
import CoinAgency from "../../adminPanel/Pages/dataStore/CoinManagement";
import SupportAgency from "../../adminPanel/Pages/dataStore/SupportAgency";
import DeleteBan from "../../adminPanel/Pages/dataStore/DeleteBan";
import Dashboard from "../../adminPanel/Pages/Dashboard";
import InboxPage from "../../adminPanel/Pages/InboxAssests";
import MasterAgency from "../../adminPanel/Pages/dataStore/MasterAgency";

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
            <Route path="inbox" element={<InboxPage />} />
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
