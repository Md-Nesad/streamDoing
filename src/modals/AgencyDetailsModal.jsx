import { formatNumber, formatOnlyDate } from "../utility/utility";

export default function AgencyDetailsModal({ open, onClose, agency }) {
  if (!open) return null;
  console.log(agency);

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
          {agency?.name}
        </h2>

        {/* Rows */}
        <div className="space-y-3 text-sm sm:text-lg">
          {/* ID */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">ID :</p>
            <p className="text-gray-800">{agency?.displayId}</p>
          </div>

          {/* User */}
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700">Name :</p>
            <div className="flex items-center gap-3">
              <img
                src={agency?.profilePic}
                className="sm:w-10 w-7 h-7 sm:h-10 rounded-full object-cover"
                fetchPriority="true"
              />
              <p className="text-gray-800">{agency?.name}</p>
            </div>
          </div>

          {/* Country */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Country :</p>
            <p className="text-gray-800">{agency?.country?.name || "N/A"}</p>
          </div>

          {/* Phone Number */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Phone Number :</p>
            <p className="text-gray-800">{agency?.phone}</p>
          </div>

          {/* Coin Balance */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Email :</p>
            <p className="text-gray-800">{agency?.email}</p>
          </div>

          {/* Coin Spend */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">WhatsApp :</p>
            <p className="text-gray-800">{agency?.whatsapp}</p>
          </div>

          {/* Earning Balance */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Type :</p>
            <p className="text-gray-800">{agency?.type}</p>
          </div>

          {/* Total Earning */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Balance :</p>
            <p className="text-gray-800">{formatNumber(agency?.balance)}</p>
          </div>

          {/* Video Live Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Dismonds :</p>
            <p className="text-gray-800">{formatNumber(agency?.dismonds)}</p>
          </div>

          {/* Video Live Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Status :</p>
            <p
              className={`${agency?.status === "active" ? "text-green-600" : "text-red-600"}`}
            >
              {agency?.status}
            </p>
          </div>

          {/* Audio Live Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Document Type :</p>
            <p className="text-gray-800">{agency?.documentType}</p>
          </div>

          {/* Registration Time */}
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Registration Time :</p>
            <p className="text-gray-800">{formatOnlyDate(agency?.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
