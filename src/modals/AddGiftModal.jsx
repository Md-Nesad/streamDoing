import { Upload } from "lucide-react";
import useFetch from "../hooks/useFetch";
import useFormDataPost from "../hooks/useFormDataPost";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addGiftSchema } from "../utility/validator";
import { BASE_URL } from "../utility/utility";
import { toast } from "react-toastify";

export default function AddGiftModal({ open, onClose, onSuccess }) {
  if (!open) return null;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = useFetch(`${BASE_URL}/gift-category/list?limit=20`);
  const subCategories = useFetch(
    `${BASE_URL}/gift-subcategory/by-category/${selectedCategory || null}`,
  );
  const handleFormData = useFormDataPost(`${BASE_URL}/gifts/create`);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(addGiftSchema),
  });

  // form submission handler
  const handleSave = async (data) => {
    const formData = new FormData();

    formData.append("name", data.giftName);
    formData.append("cost", data.giftPrice);
    formData.append("category", data.giftCategory);
    formData.append("subCategory", data.giftSubCategory);

    if (data.giftLogo) {
      formData.append("image", data.giftLogo?.[0]);
    }

    if (data.giftThumbnail) {
      formData.append("thumbnail", data.giftThumbnail?.[0]);
    }

    if (data.giftSound) {
      formData.append("soundFile", data.giftSound?.[0]);
    }

    setLoading(true);
    const result = await handleFormData(formData);
    console.log("Gift creation result:", result);
    if (!result.message) {
      toast.error("Failed to create entry");
    } else {
      toast.success(result.message);
    }

    setLoading(false);
    reset();
    onSuccess();
  };

  const giftLogo = watch("giftLogo")?.[0];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <form className="w-full max-w-[650px] bg-white rounded-2xl shadow-lg p-4 sm:p-6 max-sm:h-[95vh] overflow-y-auto animatefadeIn hide_scrollbar max-sm:mx-3">
        {/* Title */}
        <h2 className="text-[20px] font-semibold text-gray-800 mb-1">
          Add New Gift
        </h2>
        <p className="text-gray-500 text-[14px] mb-6">
          Create a new virtual gift for users to send during livestreams
        </p>

        {/* Gift Name */}
        <div className="mb-3">
          <label className="text-gray-700 text-[14px] font-medium">
            Gift Name
          </label>
          <input
            type="text"
            {...register("giftName")}
            placeholder="Enter Gift name"
            className="w-full border rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.giftName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.giftName.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <div className="mt-1 w-full">
            <label className="text-gray-700 text-[14px] font-medium">
              Category
            </label>
            <div className="relative">
              <select
                {...register("giftCategory")}
                className="border border-[#626060] py-2"
                onChange={(e) => {
                  const selectedId = e.target.value;
                  const selectedCategory = categories?.data?.categories?.find(
                    (cat) => cat._id === selectedId,
                  );
                  setSelectedCategory(selectedCategory?._id || null);
                }}
              >
                <option value="">Search Category</option>

                {categories?.data?.categories?.map((category) => (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {/* <button
                type="button"
                className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-auto bg-[#AC90EC] py-1 px-4 rounded-md text-white"
              >
                Add custom
              </button> */}
            </div>
            {errors.giftCategory && (
              <p className="text-red-500 text-xs mt-1">
                {errors.giftCategory.message}
              </p>
            )}
          </div>

          <div className="mt-1 w-full">
            <label className="text-gray-700 text-[14px] font-medium">
              Sub-Category
            </label>
            <div className="relative">
              <select
                {...register("giftSubCategory")}
                className="border border-[#626060] py-2"
              >
                <option value="">Search Category</option>
                {subCategories?.data?.subcategories?.map((category) => (
                  <option value={category._id} key={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {/* <button
                type="button"
                className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-auto bg-[#AC90EC] py-1 px-4 rounded-md text-white"
              >
                Add custom
              </button> */}
            </div>
            {errors.giftSubCategory && (
              <p className="text-red-500 text-xs mt-1">
                {errors.giftSubCategory.message}
              </p>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="mt-3">
          <label className="text-gray-700 text-[14px] font-medium">
            Price (Coins)
          </label>
          <input
            type="number"
            {...register("giftPrice")}
            placeholder="Enter Price"
            className="w-full border rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.giftPrice && (
            <p className="text-red-500 text-xs mt-1">
              {errors.giftPrice.message}
            </p>
          )}
        </div>

        {/* Upload Logo */}
        <div className="mt-3">
          <label className="text-gray-700 text-[14px] font-medium">
            Upload Logo (SVG, PNG, Mp4)
          </label>
          <div className="relative w-full cursor-pointer mt-1">
            <input
              type="file"
              {...register("giftLogo")}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />

            <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
              <span className="text-[#686868A6] font-medium py-2 flex items-center gap-2">
                Upload <Upload size={15} />
              </span>
              <span className="w-px h-7 bg-gray-300"></span>
              <span className="text-[#686868A6] font-medium truncate">
                {watch("giftLogo")?.[0]?.name || "No file choosen"}
              </span>
            </div>
          </div>
          {errors.giftLogo && (
            <p className="text-red-500 text-xs mt-1">
              {errors.giftLogo.message}
            </p>
          )}
        </div>

        {giftLogo?.type === "video/mp4" && (
          <div className="mt-3">
            <label className="text-gray-700 text-[14px] font-medium">
              Upload Thumbnail (SVG, PNG, JPEG)
            </label>
            <div className="relative w-full cursor-pointer mt-1">
              <input
                type="file"
                {...register("giftThumbnail")}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />

              <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
                <span className="text-[#686868A6] font-medium py-2 flex items-center gap-2">
                  Upload <Upload size={15} />
                </span>
                <span className="w-px h-7 bg-gray-300"></span>
                <span className="text-[#686868A6] font-medium truncate">
                  {watch("giftThumbnail")?.[0]?.name || "No file choosen"}
                </span>
              </div>
            </div>
            {errors.giftThumbnail && (
              <p className="text-red-500 text-xs mt-1">
                {errors.giftThumbnail.message}
              </p>
            )}
          </div>
        )}

        {/* Upload Sound */}
        <div className="mt-3">
          <label className="text-gray-700 text-[14px] font-medium">
            Upload Sound
          </label>
          <div className="relative w-full cursor-pointer mt-1">
            <input
              type="file"
              {...register("giftSound")}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />

            <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
              <span className="text-[#686868A6] font-medium py-2 flex items-center gap-2">
                Upload <Upload size={15} />
              </span>
              <span className="w-px h-7 bg-gray-300"></span>
              <span className="text-[#686868A6] font-medium truncate">
                {watch("giftSound")?.[0]?.name || "No file choosen"}
              </span>
            </div>
          </div>
          {errors.giftSound && (
            <p className="text-red-500 text-xs mt-1">
              {errors.giftSound.message}
            </p>
          )}
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
            type="submit"
            onClick={handleSubmit(handleSave)}
            disabled={loading}
            className={`px-10 py-1 btn_gradient 
            ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
}
