import DashboardRouter from "./routers/dashboard/DashboardRouter";

export default function App() {
  // if (admin.localhost) return <h1>Admin Panel</h1>;
  return (
    <>
      <DashboardRouter />
    </>
  );
}
