import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHeader from "./components/AdminHeader";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AdminHeader />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
