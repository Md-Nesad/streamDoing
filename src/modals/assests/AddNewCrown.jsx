import { Upload } from "lucide-react";
import useFormDataPost from "../../hooks/useFormDataPost";
import { BASE_URL } from "../../utility/utility";
import { crownSchema } from "../../utility/validator";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

export default function AddNewCrown({ open, onClose, onSuccess }) {
  if (!open) return null;
  const [loading, setLoading] = useState(false);
  const [isSell, setIsSell] = useState(false);
  const [isExhibit, setIsExhibit] = useState(false);
  const handleFormData = useFormDataPost(`${BASE_URL}/crowns`);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(crownSchema),
  });

  // form submission handler
  const handleSave = async (data) => {
    const formData = new FormData();

    formData.append("name", data.crownName);
    formData.append("price", data.crownPrice);
    formData.append("validity", data.crownValidity);
    formData.append("isSell", isSell);
    formData.append("isExhibit", isExhibit);

    if (data.crownFile) {
      formData.append("image", data.crownFile?.[0]);
    }

    setLoading(true);
    const result = await handleFormData(formData);
    if (result.success === false) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }

    setLoading(false);

    // reset();

    // onSuccess();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <form
        onSubmit={handleSubmit(handleSave)}
        className="w-full max-w-[650px] bg-white rounded-2xl shadow-lg p-4 sm:p-6 max-sm:h-[95vh] overflow-y-auto animatefadeIn hide_scrollbar max-sm:mx-3"
      >
        {/* Title */}
        <h2 className="text-[20px] font-semibold text-gray-800 mb-1">
          Add New Crown
        </h2>
        <p className="text-gray-500 text-[14px] mb-6">
          Create a new virtual gift for users to send during livestreams
        </p>

        {/* Gift Name */}
        <div className="mb-3">
          <label className="text-gray-700 text-[14px] font-medium">
            Crown Level
          </label>
          <input
            type="text"
            {...register("crownName")}
            placeholder="add crown level here"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.crownName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.crownName.message}
            </p>
          )}
        </div>

        {/* <div className="mb-3">
          <label className="text-gray-700 text-[14px] font-medium">
            Description
          </label>
          <input
            type="text"
            {...register("badgeDescription")}
            placeholder="Enter description"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.badgeDescription && (
            <p className="text-red-500 text-xs mt-1">
              {errors.badgeDescription.message}
            </p>
          )}
        </div> */}

        <div className="mb-3">
          <label className="text-gray-700 text-[14px] font-medium">Price</label>
          <input
            type="number"
            {...register("crownPrice")}
            placeholder="add crown price here"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.crownPrice && (
            <p className="text-red-500 text-xs mt-1">
              {errors.crownPrice.message}
            </p>
          )}
        </div>

        <div className="mb-3">
          <label className="text-gray-700 text-[14px] font-medium">
            Validity(in days)
          </label>
          <input
            type="number"
            {...register("crownValidity")}
            placeholder="add validity here"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
        </div>

        {/* Position */}
        {/* <div className="mb-3">
          <label className="text-sm text-gray-700">Position</label>
          <div className="grid grid-cols-5 gap-2 mt-1">
            {[...Array(5)].map((_, i) => (
              <input
                key={i}
                type="text"
                className="border border-[#626060] rounded-md px-3 py-1.5 text-sm focus:outline-none"
              />
            ))}
          </div>
        </div> */}

        {/* Upload Logo */}
        <div>
          <label className="text-gray-700 text-[14px] font-medium">
            Upload Banner (SVG, PNG, Mp4)
          </label>
          <div className="relative w-full cursor-pointer mt-1">
            <input
              type="file"
              {...register("crownFile")}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />

            <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
              <span className="text-[#686868A6] font-medium py-2 flex items-center gap-2">
                Upload <Upload size={15} />
              </span>
              <span className="w-px h-7 bg-gray-300"></span>
              <span className="text-[#686868A6] font-medium truncate">
                {watch("crownFile")?.[0]?.name || "No file choosen"}
              </span>
            </div>
          </div>
          {errors.crownFile && (
            <p className="text-red-500 text-xs mt-1">
              {errors.crownFile.message}
            </p>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between max-sm:justify-center gap-4 w-full">
          <div className="flex items-center max-sm:justify-between gap-8 border border-gray-300 rounded-md px-3 py-2 w-full sm:w-[48%]">
            <span className="text-gray-700 text-[14px] font-medium">
              For Sale
            </span>
            <div
              onClick={() => {
                setIsSell(!isSell);
              }}
              className={`w-10 h-3 rounded-full cursor-pointer flex items-center transition-all duration-300 ${
                isSell ? "bg-pink-400" : "bg-pink-200"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full shadow-xl transition-all duration-300 bg-linear-to-br from-pink-600 to-pink-400 relative ${
                  isSell ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex items-center max-sm:justify-between gap-8 border border-gray-300 rounded-md px-3 py-2 w-full sm:w-[48%]">
            <span className="text-gray-700 text-[14px] font-medium">
              For Exhibit
            </span>
            <div
              onClick={() => {
                setIsExhibit(!isExhibit);
              }}
              className={`w-10 h-3 rounded-full cursor-pointer flex items-center transition-all duration-300 ${
                isExhibit ? "bg-pink-400" : "bg-pink-200"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full shadow-xl transition-all duration-300 bg-linear-to-br from-pink-600 to-pink-400 relative ${
                  isExhibit ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
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

          <button
            onClick={handleSubmit(handleSave)}
            className="px-10 py-1 btn_gradient"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}
