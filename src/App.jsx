import AdminAgencyPortal from "./routers/agencies/AdminAgencyPortal";
import CoinAgencyPortal from "./routers/agencies/CoinAgencyPortal";
import DashboardRouter from "./routers/dashboard/DashboardRouter";

export default function App() {
  const host = window.location.hostname;

  if (host.startsWith("admin")) {
    return <AdminAgencyPortal />;
  } else if (host.startsWith("coin")) {
    return <CoinAgencyPortal />;
  } else if (host.startsWith("www")) {
    return <CoinAgencyPortal />;
  } else {
    return <DashboardRouter />;
  }
}
