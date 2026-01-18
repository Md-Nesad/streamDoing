import { Upload } from "lucide-react";
import useFormDataPost from "../../hooks/useFormDataPost";
import { BASE_URL } from "../../utility/utility";
import { crownSchema } from "../../utility/validator";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function AddNewCrown({ open, onClose }) {
  if (!open) return null;
  const [loading, setLoading] = useState(false);
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

    if (data.crownFile) {
      formData.append("image", data.crownFile?.[0]);
    }

    setLoading(true);
    await handleFormData(formData);
    window.location.reload();

    alert("Crown created");

    setLoading(false);

    reset();
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
            placeholder="Enter crown level"
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
            placeholder="Enter banner price"
            className="w-full border border-[#626060] rounded-lg px-3 py-2 text-[14px] mt-1 focus:outline-none"
          />
          {errors.crownPrice && (
            <p className="text-red-500 text-xs mt-1">
              {errors.crownPrice.message}
            </p>
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
