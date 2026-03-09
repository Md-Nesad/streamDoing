import { useState } from "react";
import { BASE_URL, formatOnlyTime } from "../../../utility/utility";
import PendingJoinRequestModal from "./PendingJoinRequestModal";
import { toast } from "react-toastify";

export default function PendingJoinRequest({ data, onRefresh }) {
  const hostRequest = data?.hostRequests;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  // const handleView = (host) => {
  //   setSelected(host);
  //   setOpen(true);
  // };
  const handleAction = async (requestId, action) => {
    try {
      const response = await fetch(
        `${BASE_URL}/agency/host/host-verification/review/${requestId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
          body: JSON.stringify({
            action: action, // approved or rejected
            rejectionReason:
              action === "rejected" ? "Not valid information" : "",
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        toast.success(`Request ${action} successfully`);
        onRefresh();
      } else {
        console.log(data);
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="hidden sm:flex items-center justify-between  mb-5 sm:px-5 px-3 pt-3">
          <h2 className="sm:text-xl text-sm font-semibold">
            Pending Join Requests
          </h2>

          <div>
            <span className="bg-[#EFEDED] rounded-full px-3 py-1">
              {hostRequest?.status === "pending" ? hostRequest?.length : 0} New
            </span>
          </div>
        </div>

        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-10">Request ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Level</th>
              <th className="p-3">Applied</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {hostRequest?.length > 0 ? (
              hostRequest?.map((request, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 font-medium pl-10">
                    {request?.hostId?.displayId}
                  </td>
                  <td className="p-3">{request.name}</td>
                  <td className="p-3">Lv{request.level || " 0"}</td>
                  <td className="p-3">{formatOnlyTime(request.updatedAt)}</td>
                  <td className="p-3">
                    <span
                      className={`px-4 py-2 text-xs ${
                        request.status === "approved"
                          ? "bg-[#E1F7E4] text-[#077414]"
                          : "bg-[#6FADFF] text-[#FFFFFF]"
                      } text-[#005D23] rounded-md font-semibold`}
                    >
                      {request.status[0].toUpperCase() +
                        request.status.slice(1)}
                    </span>
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleAction(request?._id, "approved")}
                      className="px-3 py-1 bg-[#BCFFC4] text-[#039314] rounded font-semibold"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() => handleAction(request._id, "rejected")}
                      className="px-3 py-1 bg-[#FFE9E9] text-[#CF0D13] font-semibold rounded"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No host requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {open && (
          <PendingJoinRequestModal
            open={open}
            onClose={() => setOpen(false)}
            host={selected}
          />
        )}
      </div>
    </>
  );
}
