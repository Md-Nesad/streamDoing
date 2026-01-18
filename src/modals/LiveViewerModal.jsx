import { useRef, useEffect } from "react";
import { useZegoVideoAdmin } from "../hooks/useZegoAdmin";

export default function LiveViewerModal({ open, onClose, stream }) {
  const videoRef = useRef(null);
  const { viewLive, exitRoom } = useZegoVideoAdmin();

  useEffect(() => {
    if (open && stream) {
      viewLive(stream, videoRef.current);
    }

    return () => {
      exitRoom();
    };
  }, [open, stream]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-[800px]">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full rounded"
        />

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
