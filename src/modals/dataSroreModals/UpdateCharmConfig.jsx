import { useEffect, useState } from "react";
import { BASE_URL } from "../../utility/utility";
import { toast } from "react-toastify";
import { Upload } from "lucide-react";
import usePutApi from "../../hooks/usePutAPI";

export default function UpdateCharmConfig({
  open,
  onClose,
  onSuccess,
  selected,
}) {
  if (!open) return null;
  const [level, setLevel] = useState(selected?.level);
  const [requiredExperience, setRequiredExperience] = useState(
    selected?.requiredExperience,
  );
  const [badgeFile, setBadgeFile] = useState(null);
  const [description, setDescription] = useState(selected?.description);
  const [loading, setLoading] = useState(false);
  const handleFormData = usePutApi(
    `${BASE_URL}/admin/charm-configs/${selected?._id}`,
  );
  //handle post

  const handleTarget = async () => {
    const formData = new FormData();
    formData.append("level", level);
    formData.append("requiredExperience", requiredExperience);
    formData.append("badgeFile", badgeFile);
    formData.append("description", description);

    setLoading(true);
    const result = await handleFormData(formData);
    toast.success(result.message || "Level config updated.");
    setLoading(false);
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-xl mx-auto rounded-xl p-4 sm:p-6 overflow-y-auto max-h-[95vh] hide_scrollbar animatefadeIn">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          Update Charm Config
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
              Upload Badge (SVG, PNG)
            </label>
            <div className="relative w-full cursor-pointer">
              <input
                type="file"
                onChange={(e) => setBadgeFile(e.target.files[0])}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />

              <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
                <span className="text-[#686868A6] font-medium py-2 flex items-center gap-2">
                  Upload <Upload size={15} />
                </span>
                <span className="w-px h-7 bg-gray-300"></span>
                <span className="text-[#686868A6] font-medium truncate">
                  {badgeFile?.name || "No file choosen"}
                </span>
              </div>
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
