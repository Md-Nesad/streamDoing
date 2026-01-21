import { formatOnlyDate } from "../../../utility/utility";

const getImg = (url, size = 300) => {
  if (!url) return "/avatar-placeholder.png";
  return `${url}?w=${size}&h=${size}&fit=cover&auto=compress`;
};

export default function PendingJoinRequestModal({ open, onClose, host }) {
  if (!open || !host) return null;

  const handleImgError = (e) => {
    e.target.src = "/avatar-placeholder.png";
  };

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
          {host?.name}
        </h2>

        {/* Info Rows */}
        <div className="space-y-3 text-sm sm:text-lg">
          <div className="flex justify-between">
            <p className="font-medium text-gray-700">ID :</p>
            <p className="text-gray-800">{host?.hostId?.displayId}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-700">Name :</p>
            <div className="flex items-center gap-3">
              <img
                src={getImg(host?.photo, 80)}
                srcSet={`
                  ${getImg(host?.photo, 80)} 80w,
                  ${getImg(host?.photo, 160)} 160w
                `}
                sizes="80px"
                onError={handleImgError}
                className="sm:w-10 w-7 h-7 sm:h-10 rounded-full object-cover"
                loading="lazy"
                decoding="async"
                alt="User"
              />
              <p className="text-gray-800">{host?.hostId?.name}</p>
            </div>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Phone Number :</p>
            <p className="text-gray-800">{host?.phone || "N/A"}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Location :</p>
            <p className="text-gray-800">{host?.country || "N/A"}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Status :</p>
            <p className="text-gray-800">{host?.status}</p>
          </div>

          <div className="flex justify-between">
            <p className="font-medium text-gray-700">Registration Time :</p>
            <p className="text-gray-800">{formatOnlyDate(host?.createdAt)}</p>
          </div>

          {/* Images */}
          <div className="flex gap-3 justify-between items-center mt-4">
            {[
              { label: "Profile", src: host?.photo },
              { label: "NID Front", src: host?.nidFront },
              { label: "NID Back", src: host?.nidBack },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <img
                  src={getImg(item.src, 250)}
                  srcSet={`
                    ${getImg(item.src, 80)} 80w,
                    ${getImg(item.src, 160)} 160w,
                    ${getImg(item.src, 240)} 240w
                  `}
                  sizes="(max-width: 640px) 120px, 150px"
                  onError={handleImgError}
                  className="w-28 h-28 object-cover rounded-md blur-xs hover:blur-none transition duration-300"
                  loading="lazy"
                  decoding="async"
                  alt={item.label}
                />
                <p className="text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
