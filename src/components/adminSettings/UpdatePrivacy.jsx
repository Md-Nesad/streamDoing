import { useState } from "react";
import { toast } from "react-toastify";
import useJsonPost from "../../hooks/useJsonPost";
import { BASE_URL } from "../../utility/utility";

const UpdatePrivacy = ({ onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const handleSubmit = useJsonPost(`${BASE_URL}/admin/settings/privacy-policy`);

  const handleCreate = async () => {
    try {
      setLoading(true);
      const result = await handleSubmit({ content });
      console.log(result);
      toast.success("Privacy policy updated.");
      onClose();
      onSuccess();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 max-sm:px-3 ">
      <div className="bg-white rounded-xl p-4 sm:p-6 w-[600px] shadow-lg animate animatefadeIn">
        <h2 className="text-lg font-semibold mb-6">Update Refund Policy</h2>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Privacy Policy
          </label>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter privacy policy content..."
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm 
    focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center sm:justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-1 btn_white"
          >
            Cancel
          </button>

          <button onClick={handleCreate} className="px-10 py-1 btn_gradient">
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePrivacy;
