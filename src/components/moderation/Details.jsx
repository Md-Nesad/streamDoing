import { Ban, CircleCheck, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { useStream } from "../../context/streamContext";
import { BASE_URL, formatOnlyTime } from "../../utility/utility";
import Loading from "../Loading";
import Error from "../Error";

export default function Details({ report, loading, error, id }) {
  const [notes, setNotes] = useState(report?.moderatorNotes[0]?.note);
  const [actionType, setActionType] = useState("");
  const { agencies } = useStream();
  //find admin
  const admin = agencies?.agencies?.find(
    (item) => item._id === report?.actions[0]?.moderatorId
  );

  //handle action taken
  const handleAction = async () => {
    if (!notes) return alert("Please enter notes");
    if (!actionType) return alert("Please select an action");

    try {
      const data = {
        note: notes,
        actionType,
        amount: 0,
        duration: null,
      };

      const res = await fetch(`${BASE_URL}/admin/reports/take-action/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.message) {
        alert(result.message);
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <>
      <div className="py-6 space-y-4 sm:space-y-6">
        {/* Information Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 sm:gap-y-5">
          <Info
            label="Report Type"
            value={report?.actions[0]?.actionType || "N/A"}
          />
          <Info label="Admin Name" value={admin?.name || "N/A"} />
          <Info label="Admin Id" value={admin?.displayId || "N/A"} />
          <Info label="Report Time" value={formatOnlyTime(report?.createdAt)} />
        </div>

        <div className="space-y-2 sm:space-y-3">
          <Info
            label="Reporter"
            value={
              report?.reporterId?.name + " - " + report?.reporterId?.displayId
            }
          />
          <Info label="Reason" value={report?.reason} />
        </div>

        {/* Moderator Notes */}
        <div className="mr-5">
          <p className="font-medium mb-1 text-[#636363]">Moderator Notes</p>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your note here..."
            className="w-full h-20 sm:h-28 resize-none rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-gray-200"
          ></textarea>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap max-sm:justify-center gap-3 pt-0 sm:pt-2">
          <button
            onClick={() => setActionType("warning")}
            className="border rounded-md px-4 py-1 flex items-center gap-2 text-sm active:animate-bounce"
          >
            <TriangleAlert size={16} /> Issue Warning
          </button>

          <button
            onClick={() => setActionType("fine")}
            className="bg-[#ff7676] text-white rounded-md px-4 py-1 flex items-center gap-2 text-sm active:animate-bounce"
          >
            <span className="text-white">$</span> Apply Fine
          </button>

          <button
            onClick={() => setActionType("ban")}
            className="bg-[#ff5c5c] text-white rounded-md px-4 py-1 flex items-center gap-2 text-sm active:animate-bounce"
          >
            <Ban size={16} /> Ban User
          </button>

          <button
            onClick={() => setActionType("resolve")}
            className="bg-[#2ecc71] text-white rounded-md px-4 py-1 flex items-center gap-2 text-sm active:animate-bounce"
          >
            <CircleCheck size={16} /> Resolve
          </button>

          <button
            onClick={handleAction}
            className="btn_white rounded-md px-4 py-1 flex items-center gap-2 text-sm"
          >
            Submit
          </button>
        </div>
      </div>
    </>
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
