import AdminAgencyPortal from "./routers/agencies/AdminAgencyPortal";
import DashboardRouter from "./routers/dashboard/DashboardRouter";

export default function App() {
  console.log(window.location.hostname);

  const host = window.location.hostname;

  if (host.startsWith("admin")) {
    return <AdminAgencyPortal />;
  } else if (host === "localhost") {
    return <DashboardRouter />;
  } else {
    return <DashboardRouter />;
  }
}
