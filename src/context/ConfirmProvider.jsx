import { createContext, useContext } from "react";
import { useConfirm } from "../hooks/useConfirm";

const ConfirmContext = createContext(null);

export function ConfirmProvider({ children }) {
  const confirmApi = useConfirm();

  return (
    <ConfirmContext.Provider value={confirmApi}>
      {children}
      <confirmApi.ConfirmUI />
    </ConfirmContext.Provider>
  );
}

export function useGlobalConfirm() {
  return useContext(ConfirmContext);
}
