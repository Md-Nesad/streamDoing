import { AlertTriangle } from "lucide-react";
import { useState } from "react";

export function useConfirm() {
  const [state, setState] = useState({
    open: false,
    message: "",
    resolve: null,
  });

  const confirm = (message = "Are you sure?") => {
    return new Promise((resolve) => {
      setState({ open: true, message, resolve });
    });
  };

  const close = () => setState({ open: false, message: "", resolve: null });

  const handleConfirm = () => {
    state.resolve(true);
    close();
  };

  const handleCancel = () => {
    state.resolve(false);
    close();
  };

  const ConfirmUI = () =>
    state.open ? (
      <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
        <div className="bg-white w-70 h-39 p-4 rounded-lg shadow justify-center">
          <AlertTriangle className="w-9 h-9 text-red-500 mx-auto" />
          <p className="text-lg mb-6 mt-2 text-center">{state.message}</p>

          <div className="flex justify-end gap-3">
            <button
              onClick={handleCancel}
              className="px-3 py-1 text-sm border rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="px-3 py-1 text-sm bg-red-500 text-white rounded"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    ) : null;

  return { confirm, ConfirmUI };
}
