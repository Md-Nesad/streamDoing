import React, { useState } from "react";
import { BASE_URL, formatOnlyDate } from "../utility/utility";
import { toast } from "react-toastify";

export default function UserDetailsModal({ open, onClose, kyc, setRefresh }) {
  if (!open) return null;
  const [loading, setLoading] = useState(null);
  const downloadImage = async (url, filename = "image.jpg") => {
    try {
      const res = await fetch(url, { mode: "cors" });
      const blob = await res.blob();

      const blobUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");

      a.href = blobUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  //update status api
  const handleUpdateStatus = async (status) => {
    try {
      setLoading(status);
      const res = await fetch(`${BASE_URL}/admin/agencies/${kyc._id}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
        body: JSON.stringify({ status }),
      });
      const result = await res.json();

      toast.success("Update Successfully");
      // onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(null);
      setRefresh((prev) => !prev);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative overflow-y-auto max-h-[95vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-600 hover:text-black text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-center text-xl font-semibold mb-6">
          Details of {kyc.name}
        </h2>

        <div className="grid grid-cols-2 gap-y-2 gap-x-25">
          <p className="font-medium">Categories :</p>
          <p>Agency</p>
          <p className="font-medium">ID :</p>
          <p>{kyc.displayId}</p>
          <p className="font-medium">User :</p>
          <div className="flex items-center gap-2">
            <img
              src={kyc?.profilePic}
              className="w-10 h-10 rounded-full border"
            />
            <div>
              <p className="font-medium">{kyc.name}</p>
              <span
                className={`text-xs ${kyc.status === "Active" ? "bg-green-500" : "bg-red-400"} text-white px-2 rounded`}
              >
                {kyc.status}
              </span>
            </div>
          </div>
          <p className="font-medium">Country :</p>
          <p>{kyc?.country?.name}</p>
          <p className="font-medium">Phone Number :</p>
          <p>{kyc.phone}</p>
          <p className="font-medium">Nid No:</p>
          <p>0912321698412</p>
          <p className="font-medium">Reference ID</p>
          <p>{kyc?.parent?.displayId || "N/A"}</p>
          <p className="font-medium">Email Address</p>
          <p>{kyc.email.slice(5, kyc.email.length)}</p>
          <p className="font-medium">IP Address :</p>
          <p>{kyc.ipAddress}</p>
          <p className="font-medium">Registration Time :</p>
          <p>{formatOnlyDate(kyc.createdAt)}</p>
          <p className="font-medium">Last Login Time :</p>
          <p>{formatOnlyDate(kyc.updatedAt)}</p>
        </div>

        {/* Image Boxes */}
        <div className="flex items-center justify-between gap-4 mx-5 py-5">
          <div className="flex flex-col gap-1.5 items-center">
            <img
              src={kyc?.profilePic}
              alt="kyc profile"
              className="w-32 h-23 rounded-sm object-contain blur-xs hover:blur-none cursor-pointer"
              loading="lazy"
              onClick={() =>
                downloadImage(kyc?.profilePic, `${kyc.name}-profile.jpg`)
              }
            />
            <span className="text-sm">Profile</span>
          </div>

          <div className="flex flex-col gap-1.5 items-center">
            <img
              src={kyc?.documentFrontURL}
              alt="Document Front"
              className="w-32 h-23 rounded-sm object-contain blur-xs hover:blur-none cursor-pointer"
              loading="lazy"
              onClick={() =>
                downloadImage(kyc?.documentFrontURL, `${kyc.name}-front.jpg`)
              }
            />
            <span className="text-sm">Doc. Front</span>
          </div>

          <div className="flex flex-col gap-1.5 items-center">
            <img
              src={kyc?.documentBackURL}
              alt="Document Back"
              className="w-32 h-23 rounded-sm object-contain blur-xs hover:blur-none cursor-pointer"
              loading="lazy"
              onClick={() =>
                downloadImage(kyc?.documentBackURL, `${kyc.name}-back.jpg`)
              }
            />
            <span className="text-sm">Doc. Back</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-15 justify-center">
          <button
            onClick={() => handleUpdateStatus("pending")}
            className="px-4 py-2 border rounded bg-gray-200 hover:bg-gray-300 text-sm"
          >
            {loading === "pending" ? "Updating..." : "Hold"}
          </button>
          <button
            onClick={() => handleUpdateStatus("suspended")}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
          >
            {loading === "suspended" ? "Updating..." : "Decline"}
          </button>
          <button
            onClick={() => handleUpdateStatus("active")}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
          >
            {loading === "active" ? "Updating..." : "Approve"}
          </button>
        </div>
      </div>
    </div>
  );
}
