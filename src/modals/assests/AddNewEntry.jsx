import { ChevronDown, Upload } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { entrySchema } from "../../utility/validator";
import { useState } from "react";
import useFormDataPost from "../../hooks/useFormDataPost";
import { toast } from "react-toastify";

export default function AddNewEntryModal({ open, onClose, onSuccess }) {
  if (!open) return null;
  const { data } = useFetch(`${BASE_URL}/entries/categories`);
  const handleFormData = useFormDataPost(`${BASE_URL}/entrie`);
  const categoreis = data?.categories;
  const [loading, setLoading] = useState(false);
  const [isSell, setIsSell] = useState(false);
  const [isExhibit, setIsExhibit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(entrySchema),
  });

  // form submission handler
  const handleSave = async (data) => {
    const formData = new FormData();

    formData.append("name", data.entryName);
    formData.append("price", data.entryPrice);
    formData.append("categoryId", data.entryCategory);
    formData.append("validity", data.entryValidity);
    formData.append("isSell", isSell);
    formData.append("isExhibit", isExhibit);

    if (data.entryFile) {
      formData.append("image", data.entryFile?.[0]);
    }

    setLoading(true);
    const result = await handleFormData(formData);

    if (result.success === false) {
      toast.error(result.message || "Failed to create entry");
    } else {
      toast.success(result.message);
      onSuccess();
    }

    setLoading(false);

    reset();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <form className="w-full max-w-[650px] bg-white rounded-2xl shadow-lg p-4 sm:p-6 max-sm:h-[95vh] overflow-y-auto animatefadeIn hide_scrollbar max-sm:mx-3">
        {/* Title */}
        <h2 className="text-[20px] font-semibold text-gray-800 mb-1">
          Add New Entry
        </h2>
        <p className="text-gray-500 text-[14px] mb-6">
          Create a new virtual gift for users to send during livestreams
        </p>

        {/* Gift Name */}
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          <div className="sm:col-span-2 mb-3">
            <label className="text-gray-700 text-[14px] font-medium">
              Entry Name
            </label>
            <input
              type="text"
              {...register("entryName")}
              placeholder="Add Entry Name here"
              className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
            />
            {errors.entryName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.entryName.message}
              </p>
            )}
          </div>

          <div className="mt-1">
            <label className="text-gray-700 text-[14px] font-medium">
              Category
            </label>
            <div className="relative">
              <select
                {...register("entryCategory")}
                className="border border-[#626060] py-2"
              >
                <option value="">Search Category</option>
                {categoreis?.map((category) => (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            {errors.entryCategory && (
              <p className="text-red-500 text-xs mt-1">
                {errors.entryCategory.message}
              </p>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="text-gray-700 text-[14px] font-medium">Price</label>
          <input
            type="number"
            {...register("entryPrice")}
            placeholder="Add Entry Price here"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.entryPrice && (
            <p className="text-red-500 text-xs mt-1">
              {errors.entryPrice.message}
            </p>
          )}
        </div>

        <div className="mb-3">
          <label className="text-gray-700 text-[14px] font-medium">
            Validity(in days)
          </label>
          <input
            type="number"
            {...register("entryValidity")}
            placeholder="add validity here"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.entryValidity && (
            <p className="text-red-500 text-xs mt-1">
              {errors.entryValidity.message}
            </p>
          )}
        </div>

        {/* Upload Logo */}
        <div>
          <label className="text-gray-700 text-[14px] font-medium">
            Upload Banner (SVG, PNG, JPEG, GIF)
          </label>
          <div className="relative w-full cursor-pointer mt-1">
            <input
              type="file"
              {...register("entryFile")}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />

            <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
              <span className="text-[#686868A6] font-medium py-2 flex items-center gap-2">
                Upload <Upload size={15} />
              </span>
              <span className="w-px h-7 bg-gray-300"></span>
              <span className="text-[#686868A6] font-medium truncate">
                {watch("entryFile")?.[0]?.name || "No file choosen"}
              </span>
            </div>
          </div>
          {errors.entryFile && (
            <p className="text-red-500 text-xs mt-1">
              {errors.entryFile.message}
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
            {loading ? "creating..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}
