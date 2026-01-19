import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { ConfirmProvider } from "./context/ConfirmProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <StreamProvider>
      <App />
    </StreamProvider> */}
    <ConfirmProvider>
      <App />
    </ConfirmProvider>
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar
      theme="light"
      toastStyle={{
        background: "#1F2937",
        color: "#F9FAFB",
        border: "1px solid #e5e7eb",
      }}
    />
  </StrictMode>,
);
