import AdminAgencyPortal from "./routers/agencies/AdminAgencyPortal";
import DashboardRouter from "./routers/dashboard/DashboardRouter";

export default function App() {
  const host = window.location.hostname;

  if (host.startsWith("admin")) {
    return <AdminAgencyPortal />;
  } else if (host === "localhost") {
    return <DashboardRouter />;
  } else if (host.startsWith("www")) {
    return <AdminAgencyPortal />;
  } else {
    return <DashboardRouter />;
  }
}
