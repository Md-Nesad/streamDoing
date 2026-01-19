import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { BASE_URL } from "../../../utility/utility";
import { toast } from "react-toastify";

export default function UpdateFaq({ edit, onEdit, faq, onSuccess }) {
  if (!edit) return null;
  //   console.log(faqId);
  const [question, setQuestion] = useState(faq.question);
  const [answer, setAnswer] = useState(faq.answer);
  const [category, setCategory] = useState(faq.category);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    try {
      setLoading(true);
      const updatedFaq = { ...faq, question, answer, category };
      const res = await fetch(`${BASE_URL}/support-agency/faq/${faq._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
        body: JSON.stringify(updatedFaq),
      });
      const result = await res.json();
      toast.success(result.message);
      if (!res.ok) {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      onSuccess();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl shadow-xl p-4 sm:p-8 relative animatefadeIn">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">Create New FAQ</h2>

        {/* Form */}
        <div className="mt-6 space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-1 pl-5 rounded-md px-3 py-2 focus:outline-none border border-[#626060] appearance-none"
              >
                <option value="">Select Category</option>
                <option value="general">General</option>
                <option value="payment">Payment</option>
                <option value="account">Account</option>
                <option value="other">Other</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Question
            </label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="enter the question"
              className="w-full mt-1 rounded-md px-3 pl-5 py-2 focus:outline-none border border-[#626060]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Answer</label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="write answer.."
              rows={3}
              className="w-full mt-1 rounded-md pl-5 px-3 py-2 focus:outline-none border border-[#626060] resize-none"
            ></textarea>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="sm:mt-10 mt-6 mb-2 sm:mb-0 flex justify-center sm:justify-end gap-4">
          <button
            type="button"
            onClick={onEdit}
            className="border px-6 py-1 btn_white"
          >
            Cancel
          </button>

          <button onClick={handleSave} className="px-8 py-1 btn_gradient">
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}
