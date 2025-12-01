import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminHeader from "./components/AdminHeader";
import DashboardLayout from "./layout/DashboardLayout";
import Host from "./Pages/Host";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AdminHeader />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          {/* dashboard nested routes here */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="host" element={<Host />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
