import { Ban, CircleCheck, TriangleAlert, X } from "lucide-react";
import { useState } from "react";
import { BASE_URL, formatOnlyTime } from "../../../utility/utility";
import { toast } from "react-toastify";

export default function ReportModal({ report, isOpen, onClose, onRefresh }) {
  if (!isOpen) return null;

  const [notes, setNotes] = useState(report?.moderatorNotes?.[0]?.note || "");
  const id = report?._id;

  const handleAction = async (actionType) => {
    try {
      const data = {
        note: notes,
        actionType,
        amount: 0,
        duration: null,
      };

      const res = await fetch(
        `${BASE_URL}/support-agency/reports/take-action/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
          body: JSON.stringify(data),
        },
      );

      const result = await res.json();
      console.log(result);

      if (result.message) {
        toast.success(result.message);
        onClose();
        onRefresh();
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      {/* Modal Box */}
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg relative max-h-[90vh] overflow-y-auto hide_scrollbar">
        <h2 className="text-xl font-semibold pl-6 pt-4">Report Details</h2>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        <div className="p-6 py-6 space-y-4 sm:space-y-6">
          {/* Information Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 sm:gap-y-5">
            <Info label="Report Status" value={report?.status || "N/A"} />

            <Info
              label="Reporter Name"
              value={report?.reporterId?.name || "Super Admin"}
            />

            <Info
              label="Reporter Id"
              value={report?.reporterId?.displayId || "N/A"}
            />

            <Info
              label="Report Time"
              value={formatOnlyTime(report?.createdAt)}
            />
          </div>

          <div className="space-y-2 sm:space-y-3">
            <Info
              label="Reporter"
              value={
                report?.reporterId?.name + " - " + report?.reporterId?.displayId
              }
            />

            <Info label="Reason" value={report?.reason} />

            {/* NEW FEATURE: Description */}
            <Info label="Details" value={report?.description || "N/A"} />

            {/* NEW FEATURE: Evidence Image */}
            {report?.evidence && (
              <div className="space-y-1">
                <p className="text-gray-500 text-sm">Evidence</p>
                <img
                  src={report?.evidence}
                  alt="Evidence"
                  className="w-40 h-40 object-cover rounded-md border"
                />
              </div>
            )}
          </div>

          {/* Moderator Notes */}
          <div className="mr-5">
            <p className="font-medium mb-1 text-[#636363]">Moderator Notes</p>

            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add your note here..."
              className="w-full h-20 sm:h-28 resize-none rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap max-sm:justify-center gap-2 pt-0 sm:pt-2">
            <button
              onClick={() => handleAction("warning")}
              className="border rounded-md px-2 py-1 flex items-center gap-2 text-sm active:animate-bounce"
            >
              <TriangleAlert size={16} /> Issue Warning
            </button>

            <button
              onClick={() => handleAction("fine")}
              className="bg-[#ff7676] text-white rounded-md px-4 py-1 flex items-center gap-2 text-sm active:animate-bounce"
            >
              <span className="text-white">$</span> Apply Fine
            </button>

            <button
              onClick={() => handleAction("ban")}
              className="bg-[#ff5c5c] text-white rounded-md px-2 py-1 flex items-center gap-2 text-sm active:animate-bounce"
            >
              <Ban size={16} /> Ban User
            </button>

            <button
              onClick={() => handleAction("resolve")}
              className="bg-[#2ecc71] text-white rounded-md px-2 py-1 flex items-center gap-2 text-sm active:animate-bounce"
            >
              <CircleCheck size={16} /> Resolve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-semibold text-[15px] mt-0.5">{value}</p>
    </div>
  );
}
