import StreamProvider from "./context/streamContext";
import AdminAgencyPortal from "./routers/agencies/AdminAgencyPortal";
import CoinAgencyPortal from "./routers/agencies/CoinAgencyPortal";
import HostAgencyPortal from "./routers/agencies/HostAgencyPortal";
import MasterAgencyPortal from "./routers/agencies/MasterAgencyPortal";
import SupportDashboardPortal from "./routers/agencies/SupportDashboardPortal";
import DashboardRouter from "./routers/dashboard/DashboardRouter";

export default function App() {
  const host = window.location.hostname;

  if (host.startsWith("admin")) {
    return <AdminAgencyPortal />;
  } else if (host.startsWith("coin")) {
    return <CoinAgencyPortal />;
  } else if (host.startsWith("host")) {
    return <HostAgencyPortal />;
  } else if (host.startsWith("master")) {
    return <MasterAgencyPortal />;
  } else if (host.startsWith("support")) {
    return <SupportDashboardPortal />;
  } else {
    return (
      <StreamProvider>
        <DashboardRouter />
      </StreamProvider>
    );
  }
}
