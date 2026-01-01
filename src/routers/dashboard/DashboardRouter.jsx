import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import Host from "../../Pages/Host";
import CoinManageMent from "../../Pages/CoinManageMent";
import RateTransaction from "../../Pages/RateTransaction";
import ExchangeRate from "../../Pages/ExchangeRate";
import MasterLedger from "../../Pages/MasterLedger";
import Agencies from "../../Pages/agencies";
import AddHostAgency from "../../Pages/agencies/AddHostAgency";
import AddCoinAgency from "../../Pages/agencies/AddCoinAgency";
import AddMasterAgency from "../../Pages/agencies/AddMasterAgency";
import AddAdminAgency from "../../Pages/agencies/AddAdminAgency";
import DashboardUsers from "../../Pages/Users";
import Transaction from "../../Pages/Transaction";
import LiveStreams from "../../Pages/LiveStreams";
import Moderation from "../../Pages/Moderation";
import Analytics from "../../Pages/Analytics";
import Finance from "../../Pages/Finance";
import PkMaster from "../../Pages/PkMaster";
import KycCenter from "../../Pages/KycCenter";
import SalaryTarget from "../../Pages/SalaryTarget";
import GiftAndAssests from "../../Pages/GiftAndAssests";
import NotificationCenter from "../../Pages/NotificationCenter";
import Setting from "../../Pages/Setting";
import HostManagement from "../../Pages/dataStore/Host";
import HostAgency from "../../Pages/dataStore/HostAgency";
import UserManagement from "../../Pages/dataStore/UserManagement";
import AdminAgency from "../../Pages/dataStore/AdminAgency";
import CoinAgency from "../../Pages/dataStore/CoinManagement";
import SupportAgency from "../../Pages/dataStore/SupportAgency";
import DeleteBan from "../../Pages/dataStore/DeleteBan";
import Dashboard from "../../Pages/Dashboard";
import InboxPage from "../../Pages/InboxAssests";
import MasterAgency from "../../Pages/dataStore/MasterAgency";
import AdminLogin from "../../Pages/Login";
import AdminAgencyLayout from "../../layouts/AdminAgencyLayout";
import AdminDashboard from "../../components/AdminAgenciesComponents/dashboard/AdminDashboard";

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
          {/* Admin agency nested routes */}
          <Route path="/admin-agency-dashboard" element={<AdminAgencyLayout />}>
            <Route index element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
