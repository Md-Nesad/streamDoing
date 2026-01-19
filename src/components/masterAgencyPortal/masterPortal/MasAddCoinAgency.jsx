import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useFormDataPost from "../../../hooks/useFormDataPost";
import { BASE_URL } from "../../../utility/utility";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { agencySchema } from "../../../utility/validator";
import { useForm } from "react-hook-form";
import { countries } from "../../../data/adminData";
import { toast } from "react-toastify";

export default function AddCoinAgency() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleFormData = useFormDataPost(`${BASE_URL}/agency/master/agencies`);

  //validated form using react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(agencySchema),
  });

  // form submission handler
  const handleSave = async (data) => {
    const formData = new FormData();

    formData.append("name", data.agencyName);
    formData.append("password", data.password);
    formData.append("email", data.email);
    formData.append("phone", data.phoneNumber);
    formData.append("whatsapp", data.whatsapp);
    formData.append("country", data.country);
    formData.append("documentType", data.documentType);
    formData.append("status", data.agencyType);
    if (data.profilePic) {
      formData.append("profilePic", data.profilePic?.[0]);
    }
    if (data.documentFront) {
      formData.append("documentFront", data.documentFront?.[0]);
    }
    if (data.documentBack) {
      formData.append("documentBack", data.documentBack?.[0]);
    }

    setLoading(true);
    const result = await handleFormData(formData);
    console.log(result);
    if (result.success === false) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
    setLoading(false);

    reset();
  };

  return (
    <div className="w-full flex justify-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] mb-10">
      <div className="w-full bg-white rounded-xl py-5 sm:py-8 px-3 sm:px-12 border border-gray-100">
        <form
          onSubmit={handleSubmit(handleSave)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {/* Agency Type */}

          {/* Agency Name */}
          <div>
            <label>Agency Name</label>
            <input
              type="text"
              {...register("agencyName")}
              placeholder="StreamDoing Agency"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
            />
            {errors.agencyName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.agencyName.message}
              </p>
            )}
          </div>

          {/* User ID */}
          <div>
            <label>Phone</label>
            <input
              type="text"
              {...register("phoneNumber")}
              placeholder="000100"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label>E-mail</label>
            <input
              type="email"
              {...register("email")}
              placeholder="jon.doe@example.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Country */}
          <div>
            <label>Country</label>
            <div className="relative">
              <select
                {...register("country")}
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
            {errors.country && (
              <p className="text-red-500 text-xs mt-1">
                {errors.country.message}
              </p>
            )}
          </div>

          {/* WhatsApp Number */}
          <div>
            <label>WhatsApp Number</label>
            <input
              type="text"
              {...register("whatsapp")}
              placeholder="+1 (737)-123-3265"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-xs mt-1">
                {errors.whatsapp.message}
              </p>
            )}
          </div>

          {/* Document Type */}

          {/* Passwords */}
          <div>
            <label>Passwords</label>
            <div className="relative">
              <input
                type="text"
                {...register("password")}
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label>Status</label>
            <div className="relative mt-1">
              <select {...register("agencyType")}>
                <option value="">Select</option>
                <option value="active">Active</option>
                <option value="suspended">Suspended</option>
              </select>

              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            {errors.agencyType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.agencyType.message}
              </p>
            )}
          </div>

          <div>
            <label>Document Type</label>
            <div className="relative">
              <select {...register("documentType")}>
                <option value="">Select</option>
                <option value="NID">NID</option>
                <option value="Passport">Passport</option>
                <option value="Driving License">Driving License</option>
                <option value="Other">Other</option>
              </select>

              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            {errors.documentType && (
              <p className="text-red-500 text-xs mt-1">
                {errors.documentType.message}
              </p>
            )}
          </div>

          {/* NID Front */}
          <div>
            <label>NID Front</label>
            <div className="relative w-full cursor-pointer">
              <input
                type="file"
                {...register("documentFront")}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />

              <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
                <span className="text-[#686868A6] font-medium py-2">
                  Choose File
                </span>
                <span className="w-px h-7 bg-gray-300"></span>
                <span className="text-[#686868A6] font-medium truncate">
                  {watch("documentFront")?.[0]?.name || "No file choosen"}
                </span>
              </div>
            </div>
            {errors.documentFront && (
              <p className="text-red-500 text-xs mt-1">
                {errors.documentFront.message}
              </p>
            )}
          </div>

          {/* NID Back */}
          <div>
            <label>NID Back</label>
            <div className="relative w-full cursor-pointer">
              <input
                type="file"
                {...register("documentBack")}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />

              <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
                <span className="text-[#686868A6] font-medium py-2">
                  Choose File
                </span>
                <span className="w-px h-7 bg-gray-300"></span>
                <span className="text-[#686868A6] font-medium">
                  {watch("documentBack")?.[0]?.name || "No file choosen"}
                </span>
              </div>
            </div>
            {errors.documentBack && (
              <p className="text-red-500 text-xs mt-1">
                {errors.documentBack.message}
              </p>
            )}
          </div>

          {/* Profile Pic */}
          <div>
            <label>Profile Pic</label>
            <div className="relative w-full cursor-pointer">
              <input
                type="file"
                {...register("profilePic")}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />

              <div className="border border-gray-300 rounded-md px-3 text-sm flex items-center gap-3">
                <span className="text-[#686868A6] font-medium py-2">
                  Choose File
                </span>
                <span className="w-px h-7 bg-gray-300"></span>
                <span className="text-[#686868A6] font-medium">
                  {watch("profilePic")?.[0]?.name || "No file choosen"}
                </span>
              </div>
            </div>
            {errors.profilePic && (
              <p className="text-red-500 text-xs mt-1">
                {errors.profilePic.message}
              </p>
            )}
          </div>
        </form>

        {/* Buttons */}
        <div className="flex justify-center sm:justify-end mt-8 gap-4">
          <button
            type="button"
            onClick={() => navigate("/master-agency-portal/agencies")}
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
  );
}
