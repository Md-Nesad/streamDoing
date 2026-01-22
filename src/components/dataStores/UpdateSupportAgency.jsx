import { ChevronDown } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../utility/utility";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useStream } from "../../context/streamContext";
import TitleAndSubTitle from "../TitleAndSubTitle";
import useFetch from "../../hooks/useFetch";
import usePutApi from "../../hooks/usePutAPI";
import Loading from "../Loading";
import { toast } from "react-toastify";

export default function UpdateSupportAgency() {
  const { supportId } = useParams();
  const [isTempOn, setIsTempOn] = useState(false);
  const [isPerOn, setIsPerOn] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [reason, setReason] = useState("");
  const [until, setUntil] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch(
    `${BASE_URL}/admin/support-agencies/${supportId}`,
  );
  const handleFormData = usePutApi(
    `${BASE_URL}/admin/support-agencies/${supportId}`,
  );
  const { countries } = useStream();

  //validated form using react hook form
  const { register, handleSubmit, reset, watch } = useForm();

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
    formData.append("ban[isPermanent]", isPerOn);
    formData.append("ban[isTemporary]", isTempOn);
    formData.append("ban[reason]", reason);
    formData.append("ban[until]", until);

    if (data.supportProfilePic) {
      formData.append("profilePic", data.supportProfilePic?.[0]);
    }
    if (data.supportDocumentFront) {
      formData.append("nidFront", data.supportDocumentFront?.[0]);
    }
    if (data.supportDocumentBack) {
      formData.append("nidBack", data.supportDocumentBack?.[0]);
    }

    setIsLoading(true);
    const result = await handleFormData(formData);

    if (result.success === false) {
      toast.error(result.message);
    } else {
      toast.success(result.message);
    }
    setIsLoading(false);

    // reset();
  };

  useEffect(() => {
    if (data) {
      reset({
        supportName: data?.supportAgency.name,
        supportEmail: data?.supportAgency.email,
        supportPhone: data?.supportAgency.phone,
        supportGender: data?.supportAgency.gender,
        supportLocation: data?.supportAgency.location,
        supportNID: data?.supportAgency.nid,
      });
    }
  }, [data, reset]);

  if (loading) return <Loading />;

  return (
    <>
      <TitleAndSubTitle
        title="Update Support Agency"
        subtitle="Update Support Agency details and information"
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
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between max-sm:justify-center gap-4 w-full">
              <div className="flex items-center gap-8 border border-gray-300 rounded-md px-3 py-2 w-[48%]">
                <span className="text-sm">Temporary Ban</span>
                <div
                  onClick={() => {
                    setIsTempOn(!isTempOn);
                    setIsPerOn(false);
                  }}
                  className={`w-10 h-3 rounded-full cursor-pointer flex items-center transition-all duration-300 ${
                    isTempOn ? "bg-pink-400" : "bg-pink-200"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full shadow-xl transition-all duration-300 bg-linear-to-br from-pink-600 to-pink-400 relative ${
                      isTempOn ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </div>

              <div className="flex items-center gap-8 border border-gray-300 rounded-md px-3 py-2 w-[48%]">
                <span className="text-sm">Permanent Ban</span>
                <div
                  onClick={() => {
                    setIsPerOn(!isPerOn);
                    setIsTempOn(false);
                  }}
                  className={`w-10 h-3 rounded-full cursor-pointer flex items-center transition-all duration-300 ${
                    isPerOn ? "bg-pink-400" : "bg-pink-200"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full shadow-xl transition-all duration-300 bg-linear-to-br from-pink-600 to-pink-400 relative ${
                      isPerOn ? "translate-x-5" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </div>
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
            </div>

            {isTempOn && (
              <>
                <div>
                  <label>Ban Reason</label>
                  <input
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Enter reason (optional)"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mt-1"
                  />
                </div>

                <div>
                  <label>Until</label>
                  <input
                    type="date"
                    value={until}
                    onChange={(e) => setUntil(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
                  />
                </div>
              </>
            )}

            {isPerOn && (
              <>
                <div>
                  <label>Reason</label>
                  <input
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Enter reason (optional)"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mt-1"
                  />
                </div>
              </>
            )}
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
              {isloading ? "Updating..." : "Update"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
