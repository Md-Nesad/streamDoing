import { countries } from "../../../data/adminData";
import { formatNumber, formatOnlyDate } from "../../../utility/utility";

export default function MasterCoinAgencyDetailsModal({
  open,
  onClose,
  agency,
}) {
  if (!open) return null;

  const countryName = countries.find(
    (country) => country._id === agency.country
  )?.name;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <div className="bg-[#FDFDFD] w-full max-w-md rounded-xl shadow-lg sm:p-6 p-4 relative animatefadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-md sm:text-xl"
        >
          ✕
        </button>

        {/* Name */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          Agency Details
        </h2>

        {/* Rows */}
        <div className="space-y-3 text-sm sm:text-lg">
          {/* ID */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Agency Id :</p>
            <p className="text-gray-800">COIN-{agency?.displayId}</p>
          </div>

          {/* User */}
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700">Name :</p>
            <div className="flex items-center gap-3">
              <img
                src={agency.profilePic}
                className="sm:w-10 w-7 h-7 sm:h-10 rounded-full object-cover"
                fetchPriority="true"
                alt="agency profile pic"
              />
              <p className="text-gray-800">{agency?.name}</p>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Country :</p>
            <p className="text-gray-800">{countryName || "N/A"}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Coin Balance :</p>
            <p className="text-gray-800">{formatNumber(agency?.balance)}</p>
          </div>

          {/* Country */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Grand Total Sales :</p>
            <p className="text-gray-800">
              {formatNumber(agency?.totalSales) || "N/A"}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Email :</p>
            <p className="text-gray-800">{agency?.email || "N/A"}</p>
          </div>

          {/* Phone Number */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Phone Number : :</p>
            <p className="text-gray-800">{agency?.phone || "N/A"}</p>
          </div>

          {/* Registration Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Registration Time :</p>
            <p className="text-gray-800">
              {formatOnlyDate(agency?.createdAt) || "N/A"}
            </p>
          </div>

          {/* Last Login Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Last Login Time :</p>
            <p className="text-gray-800">{formatOnlyDate(agency?.updatedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
