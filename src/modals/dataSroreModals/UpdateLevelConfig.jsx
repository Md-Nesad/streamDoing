import { useState } from "react";
import { useStream } from "../../context/streamContext";
import { BASE_URL } from "../../utility/utility";
import useJsonPut from "../../hooks/useJsonPut";
import { toast } from "react-toastify";

export default function UpdateLevelConfig({ onClose, selected, onSuccess }) {
  if (!open) return null;
  const [level, setLevel] = useState(selected?.level);
  const [requiredExperience, setRequiredExperience] = useState(
    selected?.requiredExperience,
  );
  const [badgeId, setBadgeId] = useState(selected?.badge?._id);
  const [description, setDescription] = useState(selected?.description);
  const [loading, setLoading] = useState(false);
  const { badgeList } = useStream();
  const handleSubmit = useJsonPut(
    `${BASE_URL}/admin/level-configs/${selected._id}`,
  );
  //handle post

  const handleTarget = async () => {
    setLoading(true);
    const result = await handleSubmit({
      level,
      requiredExperience,
      badgeId,
      description,
    });
    toast.success(result.message || "Level config updated.");
    setLoading(false);
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-xl mx-auto rounded-xl p-4 sm:p-6 overflow-y-auto max-h-[95vh] hide_scrollbar animatefadeIn">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          Update Level Config
        </h2>

        {/* GRID FORM */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-6">
          <div>
            <label className="text-sm font-medium text-gray-700 flex">
              Level
            </label>
            <input
              type="number"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              placeholder="Enter level"
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Required Exp.
            </label>
            <input
              type="number"
              value={requiredExperience}
              onChange={(e) => setRequiredExperience(e.target.value)}
              placeholder="Enter required exp"
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Badge Id
            </label>
            <div className="relative">
              <select
                value={badgeId}
                onChange={(e) => setBadgeId(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-md appearance-none"
              >
                <option value="">Select</option>
                {badgeList?.map((badge) => (
                  <option key={badge._id} value={badge._id}>
                    {badge.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="w-full mt-1 border border-[#626060] rounded-md px-3 py-1.5 focus:outline-none"
            />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex sm:justify-end justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={onClose}
            className="px-7 py-1 btn_white text-gray-60"
          >
            Cancel
          </button>

          <button
            onClick={handleTarget}
            className="px-12 py-1 text-white btn_gradient hover:opacity-90"
          >
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}
