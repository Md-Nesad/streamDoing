import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useFormDataPost from "../../hooks/useFormDataPost";
import { BASE_URL } from "../../utility/utility";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { supportAgencySchema } from "../../utility/validator";
import { useForm } from "react-hook-form";
import TitleAndSubTitle from "../TitleAndSubTitle";
import { toast } from "react-toastify";
import { countries } from "../../data/adminData";

export default function AddSupportAgency() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleFormData = useFormDataPost(`${BASE_URL}/admin/support-agencies`);

  //validated form using react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(supportAgencySchema),
  });

  // form submission handler
  const handleSave = async (data) => {
    const formData = new FormData();

    formData.append("name", data.supportName);
    formData.append("email", data.supportEmail);
    formData.append("phone", data.supportPhone);
    formData.append("gender", data.supportGender);
    formData.append("password", data.supportPassword);
    formData.append("location", data.supportLocation);
    formData.append("nid", data.supportNID);

    if (data.supportProfilePic) {
      formData.append("profilePic", data.supportProfilePic?.[0]);
    }
    if (data.supportDocumentFront) {
      formData.append("nidFront", data.supportDocumentFront?.[0]);
    }
    if (data.supportDocumentBack) {
      formData.append("nidBack", data.supportDocumentBack?.[0]);
    }

    setLoading(true);
    const result = await handleFormData(formData);

    if (result.success === false) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
    setLoading(false);

    reset();
  };

  return (
    <>
      <TitleAndSubTitle
        title="Add Support Agency"
        subtitle="Manage Support Agency details and information"
      />

      <div className="w-full flex justify-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] mb-10">
        <div className="w-full bg-white rounded-xl py-5 sm:py-8 px-3 sm:px-12 border border-gray-100">
          <form
            onSubmit={handleSubmit(handleSave)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          >
            {/* Agency Name */}
            <div>
              <label>Agency Name</label>
              <input
                type="text"
                {...register("supportName")}
                placeholder="StreamDoing Agency"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
              />
              {errors.supportName && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.supportName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label>E-mail</label>
              <input
                type="email"
                {...register("supportEmail")}
                placeholder="jon.doe@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
              />
              {errors.supportEmail && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.supportEmail.message}
                </p>
              )}
            </div>

            {/* phone */}
            <div>
              <label>Phone</label>
              <input
                type="text"
                {...register("supportPhone")}
                placeholder="+1 (737)-123-3265"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
              />
              {errors.supportPhone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.supportPhone.message}
                </p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label>Gender</label>
              <div className="relative mt-1">
                <select {...register("supportGender")}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              {errors.supportGender && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.supportGender.message}
                </p>
              )}
            </div>
            {/* password */}
            <div>
              <label>Passwords</label>
              <div className="relative">
                <input
                  type="text"
                  {...register("supportPassword")}
                  placeholder="Enter password"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
                />
                {errors.supportPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.supportPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Locaton */}
            <div>
              <label>Location</label>
              <div className="relative">
                <select
                  {...register("supportLocation")}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm appearance-none"
                >
                  <option value="">Select</option>
                  {countries?.map((country) => (
                    <option key={country._id} value={country._id}>
                      {country.name}
                    </option>
                  ))}
                </select>

                <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
              {errors.supportLocation && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.supportLocation.message}
                </p>
              )}
            </div>

            {/* NID Number */}
            <div>
              <label>NID Number</label>
              <input
                type="text"
                {...register("supportNID")}
                placeholder="NID12345678"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
              />
              {errors.supportNID && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.supportNID.message}
                </p>
              )}
            </div>

            {/* NID Front */}
            <div>
              <label>NID Front</label>
              <div className="relative w-full cursor-pointer">
                <input
                  type="file"
                  {...register("supportDocumentFront")}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />

                <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
                  <span className="text-[#686868A6] font-medium py-2">
                    Choose File
                  </span>
                  <span className="w-px h-7 bg-gray-300"></span>
                  <span className="text-[#686868A6] font-medium truncate">
                    {watch("supportDocumentFront")?.[0]?.name ||
                      "No file choosen"}
                  </span>
                </div>
              </div>
              {errors.supportDocumentFront && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.supportDocumentFront.message}
                </p>
              )}
            </div>

            {/* NID Back */}
            <div>
              <label>NID Back</label>
              <div className="relative w-full cursor-pointer">
                <input
                  type="file"
                  {...register("supportDocumentBack")}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />

                <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
                  <span className="text-[#686868A6] font-medium py-2">
                    Choose File
                  </span>
                  <span className="w-px h-7 bg-gray-300"></span>
                  <span className="text-[#686868A6] font-medium">
                    {watch("supportDocumentBack")?.[0]?.name ||
                      "No file choosen"}
                  </span>
                </div>
              </div>
              {errors.supportDocumentBack && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.supportDocumentBack.message}
                </p>
              )}
            </div>

            {/* Profile Pic */}
            <div>
              <label>Profile Pic</label>
              <div className="relative w-full cursor-pointer">
                <input
                  type="file"
                  {...register("supportProfilePic")}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />

                <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
                  <span className="text-[#686868A6] font-medium py-2">
                    Choose File
                  </span>
                  <span className="w-px h-7 bg-gray-300"></span>
                  <span className="text-[#686868A6] font-medium">
                    {watch("supportProfilePic")?.[0]?.name || "No file choosen"}
                  </span>
                </div>
              </div>
              {errors.supportProfilePic && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.supportProfilePic.message}
                </p>
              )}
            </div>
          </form>

          {/* Buttons */}
          <div className="flex justify-center sm:justify-end mt-8 gap-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard/support-agency")}
              className="px-8 py-1 border border-gray-300 rounded-md text-[#181717]"
            >
              Cancel
            </button>

            <button
              type="submit"
              onClick={handleSubmit(handleSave)}
              className="px-10 py-1 rounded-md text-white text-sm font-medium 
            bg-linear-to-r from-[#6DA5FF] to-[#F576D6]"
            >
              {loading ? "Submiting..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
