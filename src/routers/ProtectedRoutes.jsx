import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utility/auth";

export function ProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

//host portal
export function HostProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/host-portal-login" replace />;
  }

  return <Outlet />;
}

//master portal
export function MasterProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/master-portal-login" replace />;
  }

  return <Outlet />;
}

//admin portal
export function AdminProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/admin-portal-login" replace />;
  }

  return <Outlet />;
}

//coin portal
export function CoinProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/coin-portal-login" replace />;
  }

  return <Outlet />;
}

//support portal
export function SupportProtectedRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/support-dashboard-login" replace />;
  }

  return <Outlet />;
}
