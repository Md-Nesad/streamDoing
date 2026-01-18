import { zodResolver } from "@hookform/resolvers/zod";
import { Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { bannerSchema } from "../../utility/validator";
import useFormDataPost from "../../hooks/useFormDataPost";
import { BASE_URL } from "../../utility/utility";
import { useState } from "react";

export default function AddNewBannerModal({ open, onClose }) {
  if (!open) return null;
  const [loading, setLoading] = useState(false);
  const handleFormData = useFormDataPost(`${BASE_URL}/banner`);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(bannerSchema),
  });

  // form submission handler
  const handleSave = async (data) => {
    const formData = new FormData();

    formData.append("name", data.bannerName);
    formData.append("bannerLink", data.bannerLink);
    formData.append("webLink", data.webLink);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("isActive", "true");

    if (data.bannerFile) {
      formData.append("image", data.bannerFile?.[0]);
    }

    setLoading(true);
    const result = await handleFormData(formData);

    window.location.reload();

    if (!result == {}) {
      alert("Failed to create banner");
    } else {
      alert("Banner created successfully");
    }
    setLoading(false);
    reset();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <form
        onSubmit={handleSubmit(handleSave)}
        className="w-full max-w-[650px] bg-white rounded-2xl shadow-lg p-4 sm:p-6 h-[95vh] overflow-y-auto animatefadeIn hide_scrollbar max-sm:mx-3"
      >
        {/* Title */}
        <h2 className="text-[20px] font-semibold text-gray-800 mb-1">
          Add New Banner
        </h2>
        <p className="text-gray-500 text-[14px] mb-6">
          Create a new virtual gift for users to send during livestreams
        </p>

        {/* Gift Name */}
        <div className="mb-3.5">
          <label className="text-gray-700 text-[14px] font-medium">
            Banner Name
          </label>
          <input
            type="text"
            {...register("bannerName")}
            placeholder="Enter Banner name"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.bannerName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.bannerName.message}
            </p>
          )}
        </div>

        <div className="mb-3.5">
          <label className="text-gray-700 text-[14px] font-medium">
            Banner Link
          </label>
          <input
            type="text"
            {...register("bannerLink")}
            placeholder="Enter Banner Link"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.bannerLink && (
            <p className="text-red-500 text-xs mt-1">
              {errors.bannerLink.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div className="mb-3.5">
          <label className="text-gray-700 text-[14px] font-medium">
            Web Link
          </label>
          <input
            type="text"
            {...register("webLink")}
            placeholder="Enter web link"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.webLink && (
            <p className="text-red-500 text-xs mt-1">
              {errors.webLink.message}
            </p>
          )}
        </div>

        <div className="mb-3.5">
          <label className="text-gray-700 text-[14px] font-medium">
            Description
          </label>
          <input
            type="text"
            {...register("description")}
            placeholder="Enter Description"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="mb-3.5">
          <label className="text-gray-700 text-[14px] font-medium">Price</label>
          <input
            type="number"
            {...register("price")}
            placeholder="Enter Price"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>
          )}
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
          <label>Upload Banner (SVG, PNG, Mp4)</label>
          <div className="relative w-full cursor-pointer">
            <input
              type="file"
              {...register("bannerFile")}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />

            <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
              <span className="text-[#686868A6] font-medium py-2 flex items-center gap-2">
                Upload <Upload size={15} />
              </span>
              <span className="w-px h-7 bg-gray-300"></span>
              <span className="text-[#686868A6] font-medium truncate">
                {watch("bannerFile")?.[0]?.name || "No file choosen"}
              </span>
            </div>
          </div>
          {errors.bannerFile && (
            <p className="text-red-500 text-xs mt-1">
              {errors.bannerFile.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-11 flex justify-center sm:justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-1 btn_white"
          >
            Cancel
          </button>

          <button
            type="submit"
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
