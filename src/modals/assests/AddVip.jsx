import { ChevronDown, Upload } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { vipSchema } from "../../utility/validator";
import { useState } from "react";
import useFormDataPost from "../../hooks/useFormDataPost";

export default function AddVip({ open, onClose }) {
  if (!open) return null;
  const { data } = useFetch(`${BASE_URL}/vips/categories`);
  const handleFormData = useFormDataPost(`${BASE_URL}/vips`);
  const categoreis = data;
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(vipSchema),
  });

  // form submission handler
  const handleSave = async (data) => {
    const formData = new FormData();

    formData.append("name", data.vipName);
    formData.append("price", data.vipPrice);
    formData.append("category", data.vipCategory);

    if (data.vipFile) {
      formData.append("image", data.vipFile?.[0]);
    }

    setLoading(true);
    const result = await handleFormData(formData);
    window.location.reload();
    if (result.message) {
      alert("Failed to create VIP");
    } else {
      alert("VIP created");
    }

    setLoading(false);
    reset();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <form className="w-full max-w-[650px] bg-white rounded-2xl shadow-lg p-4 sm:p-6 max-sm:h-[95vh] overflow-y-auto animatefadeIn hide_scrollbar max-sm:mx-3">
        {/* Title */}
        <h2 className="text-[20px] font-semibold text-gray-800 mb-1">
          Add New VIP
        </h2>
        <p className="text-gray-500 text-[14px] mb-6">
          Create a new virtual gift for users to send during livestreams
        </p>

        {/* Gift Name */}
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          <div className="sm:col-span-2 mb-3">
            <label className="text-gray-700 text-[14px] font-medium">
              VIP Name
            </label>
            <input
              type="text"
              {...register("vipName")}
              placeholder="Enter VIP name"
              className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
            />
            {errors.vipName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.vipName.message}
              </p>
            )}
          </div>

          <div className="mt-1">
            <label className="text-gray-700 text-[14px] font-medium">
              Category
            </label>
            <div className="relative">
              <select
                {...register("vipCategory")}
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
            {errors.vipCategory && (
              <p className="text-red-500 text-xs mt-1">
                {errors.vipCategory.message}
              </p>
            )}
          </div>
        </div>

        {/* Price */}
        <div className="mb-3">
          <label className="text-gray-700 text-[14px] font-medium">Price</label>
          <input
            type="number"
            {...register("vipPrice")}
            placeholder="Enter price"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.vipPrice && (
            <p className="text-red-500 text-xs mt-1">
              {errors.vipPrice.message}
            </p>
          )}
        </div>

        {/* Upload Logo */}
        <div>
          <label className="text-gray-700 text-[14px] font-medium">
            Upload Banner (SVG, PNG, Mp4)
          </label>
          <div className="relative w-full cursor-pointer mt-1">
            <input
              type="file"
              {...register("vipFile")}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />

            <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
              <span className="text-[#686868A6] font-medium py-2 flex items-center gap-2">
                Upload <Upload size={15} />
              </span>
              <span className="w-px h-7 bg-gray-300"></span>
              <span className="text-[#686868A6] font-medium truncate">
                {watch("vipFile")?.[0]?.name || "No file choosen"}
              </span>
            </div>
          </div>
          {errors.vipFile && (
            <p className="text-red-500 text-xs mt-1">
              {errors.vipFile.message}
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
