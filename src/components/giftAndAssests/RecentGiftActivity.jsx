import { useState } from "react";
import { timeAgo } from "../../utility/utility";
import VideoThumbnail from "./VideoThumbnail";

export default function RecentGiftActivity({ data, page }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const allGifts = data?.gifts;

  const recentGifts = (allGifts || []).sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  return (
    <div className="w-fullmx-auto bg-white rounded-lg p-3 sm:p-5 shadow mb-10">
      <h2 className="text-lg font-semibold mb-4">Recent Gift Activity</h2>

      <div className="space-y-3">
        {recentGifts?.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-[#ABABAB54] rounded-lg px-3 sm:px-4 py-3"
          >
            {/* Left */}
            <div className="flex items-center gap-2 sm:gap-4">
              {item?.imageUrl.includes("cloudinary") ? (
                <div className="pl-7.5">
                  <img
                    src={item?.imageUrl}
                    alt="Gift Image"
                    className="w-15 h-10 object-cover rounded-full"
                  />
                </div>
              ) : (
                <td className="p-2 mx-auto">
                  <VideoThumbnail
                    id={item._id}
                    src={item?.imageUrl}
                    poster={item?.thumbnailUrl}
                    activeVideo={activeVideo}
                    setActiveVideo={setActiveVideo}
                  />
                </td>
              )}

              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-900">
                  User sent {item.name}
                </p>
                <p className="text-xs text-gray-500 font-medium">
                  {timeAgo(item.createdAt)}
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="text-sm sm:text-md font-semibold text-gray-900">
              {item.cost} coins
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
