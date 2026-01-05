import { createContext, useContext } from "react";
import { BASE_URL } from "../utility/utility";
import useFetch from "../hooks/useFetch";

const HostContext = createContext();

export default function HostProvider({ children }) {
  const dashboardStats = useFetch(`${BASE_URL}/agency/host/dashboard/stats`);
  return (
    <HostContext.Provider value={{ dashboardStats }}>
      {children}
    </HostContext.Provider>
  );
}

export const useHost = () => {
  const context = useContext(HostContext);
  if (!context) {
    throw new Error("useHost must be used within a HostProvider");
  }
  return context;
};
