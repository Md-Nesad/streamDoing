import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFormDataPost from "../../../hooks/useFormDataPost";
import { BASE_URL } from "../../../utility/utility";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminHostAgencySchema, hostAdd } from "../../../utility/validator";
import { ChevronDown } from "lucide-react";
import useJsonPost from "../../../hooks/useJsonPost";
import { toast } from "react-toastify";

export default function AddNewHost() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = useJsonPost(`${BASE_URL}/agency/host/hosts`);

  //validated form using react hook form + zod
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(hostAdd),
  });

  // form submission handler
  const handleSave = async (data) => {
    const formData = {
      name: data.hostName,
      email: data.email,
      phone: data.phoneNumber,
      gender: data.gender,
      password: data.password,
      dateOfBirth: data.dateOfBirth,
    };

    setLoading(true);
    const result = await handleSubmit(formData);
    if (result.success === false) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
    setLoading(false);

    // reset();
  };

  return (
    <div className="w-full flex justify-center shadow-[0_2px_10px_rgba(0,0,0,0.06)] mb-10">
      <div className="w-full bg-white rounded-xl py-5 sm:py-8 px-3 sm:px-12 border border-gray-100">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Agency Name */}
          <div>
            <label>Host Name</label>
            <input
              type="text"
              {...register("hostName")}
              placeholder="StreamDoing Agency"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
            />
            {errors.hostName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.hostName.message}
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

          {/* WhatsApp Number */}
          <div>
            <label>Phone</label>
            <input
              type="text"
              {...register("phoneNumber")}
              placeholder="+1 (737)-123-3265"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

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

          {/* Document Type */}
          <div>
            <label>Gender</label>
            <div className="relative">
              <select {...register("gender")}>
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Others</option>
              </select>

              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            {errors.gender && (
              <p className="text-red-500 text-xs mt-1">
                {errors.gender.message}
              </p>
            )}
          </div>

          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              {...register("dateOfBirth")}
              placeholder="+1 (737)-123-3265"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-xs mt-1">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>
        </form>

        {/* Buttons */}
        <div className="flex justify-center sm:justify-end mt-8 gap-4">
          <button
            type="button"
            onClick={() => navigate("/host-agency-portal")}
            className="px-8 py-1 border border-gray-300 rounded-md text-[#181717]"
          >
            Cancel
          </button>

          <button
            type="submit"
            onClick={handleFormSubmit(handleSave)}
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
