import { useState } from "react";
import { BASE_URL } from "../../utility/utility";
import useJsonPost from "../../hooks/useJsonPost";
import { toast } from "react-toastify";
import useJsonPut from "../../hooks/useJsonPut";

export default function UpdateCredentials({ open, onClose, onSuccess }) {
  if (!open) return null;
  const [audioAppID, setAudioAppID] = useState("");
  const [videoAppID, setVideoAppId] = useState("");
  const [audioAppSign, setAudioAppSign] = useState("");
  const [videoAppSign, setVideoAppSign] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = useJsonPut(`${BASE_URL}/admin/zego-cloud-credentials`);

  //handle post
  const handleTarget = async () => {
    if ((!audioAppID, !videoAppID, !audioAppSign, !videoAppSign)) {
      return toast.error("Please fill all the fields");
    }
    setLoading(true);
    const result = await handleSubmit({
      audioAppID,
      videoAppID,
      audioAppSign,
      videoAppSign,
    });
    console.log(result);
    toast.success(result.message || "Level config added.");
    setLoading(false);
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 sm:px-4 px-2">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl shadow-xl sm:p-8 p-4 relative animatefadeIn">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          Update Credential
        </h2>

        {/* Form */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-6">
          <div>
            <label className="text-sm font-medium text-gray-700 flex">
              Audio App Id
            </label>
            <input
              type="text"
              placeholder="Enter audio app id"
              value={audioAppID}
              onChange={(e) => setAudioAppID(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 flex">
              Video App Id
            </label>
            <input
              type="text"
              placeholder="Enter video app id"
              value={videoAppID}
              onChange={(e) => setVideoAppId(e.target.value)}
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-3">
          <label className="text-sm font-medium text-gray-700 flex">
            Audio App Sign
          </label>
          <input
            type="text"
            placeholder="Enter audio app sign"
            value={audioAppSign}
            onChange={(e) => setAudioAppSign(e.target.value)}
            className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
          />
        </div>

        <div className="mt-3">
          <label className="text-sm font-medium text-gray-700 flex">
            Video App Sign
          </label>
          <input
            type="text"
            placeholder="Enter video app sign"
            value={videoAppSign}
            onChange={(e) => setVideoAppSign(e.target.value)}
            className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
          />
        </div>

        {/* Footer Buttons */}
        <div className="mt-10 flex justify-center sm:justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="btn_white px-6 py-1"
          >
            Cancel
          </button>

          <button
            onClick={handleTarget}
            className="px-8 py-1 rounded-md text-white btn_gradient"
          >
            {loading ? "updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}
