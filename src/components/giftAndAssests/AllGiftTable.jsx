import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import AddGiftModal from "../../modals/AddGiftModal";
import AssestsDropdown from "./AssestsDropdown";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatNumber } from "../../utility/utility";
import Loading from "../Loading";

export default function AllGiftTable() {
  const [open, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const category = useFetch(`${BASE_URL}/gift-category/list?limit=20`);
  const { data, loading, error } = useFetch(`${BASE_URL}/gifts/list`);

  const allGifts = data?.gifts;
  const categories = category?.data?.categories;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <>
      {/* search area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 pt-7">
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[75%] px-4 py-1.5 rounded-md"
          placeholder="Search by Agency ID or name"
        />
        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-3 sm:px-4 py-1.5 rounded-md bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
            >
              {isDropdownOpen ? <ChevronUp /> : <ChevronDown />} Assests
            </button>
            {isDropdownOpen && (
              <div className="absolute top-12 sm:right-0 left-0 rounded-md z-10">
                <AssestsDropdown />
              </div>
            )}
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="sm:px-6 py-1.5 max-sm:py-2 text-sm sm:text-base bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium w-full sm:w-auto text-nowrap"
          >
            + Add Gift
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price (Coins)</th>
              <th className="p-3">Total Uses</th>
              <th className="p-3">Revenue</th>
              <th className="p-3">Status</th>
              <th className="p-3 sm:pl-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {allGifts?.map((gift) => {
              const categoryName = categories?.find(
                (category) => category._id === gift.category
              )?.name;
              return (
                <tr
                  key={gift._id}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 font-medium pl-5">{gift.name}</td>
                  <td className="p-3">{categoryName || "N/A"}</td>
                  <td className="p-3">{formatNumber(gift.cost)}</td>
                  <td className="p-3">{gift.totalUses || "N/A"}</td>
                  <td className="p-3">{formatNumber(gift.revenue) || "N/A"}</td>
                  <td className="p-3">
                    <span
                      className={`px-4 py-1 text-xs ${
                        gift.isActive === true
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                          : "bg-[#FF929296] text-[#D21B20]"
                      } text-[#005D23] rounded-full font-semibold`}
                    >
                      {gift.isActive === true ? "active" : "Inactive"}
                    </span>
                  </td>
                  <td className="p-3 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                    <button className="font-semibold">Edit</button>
                    <button className="font-semibold bg-[#FFE9E9] text-[#CF0D13] py-1 px-3 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {open && <AddGiftModal open={open} onClose={() => setIsOpen(false)} />}
      </div>
    </>
  );
}

// import { useState } from "react";
// import BannerGifts from "./BannerGifts";
// import LevelGifts from "./LevelGifts";
// import BadgeGifts from "./BadgeGifts";

// export default function AllGiftTable() {
//   const [activeGift, setActiveGift] = useState("banner");

//   return (
//     <div>
//       {/* INNER BUTTONS */}
//       <div className="flex gap-3 mb-4">
//         <button
//           onClick={() => setActiveGift("banner")}
//           className={`px-3 py-1 rounded text-sm
//             ${
//               activeGift === "banner"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-100 text-gray-700"
//             }`}
//         >
//           Banner Gifts
//         </button>

//         <button
//           onClick={() => setActiveGift("level")}
//           className={`px-3 py-1 rounded text-sm
//             ${
//               activeGift === "level"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-100 text-gray-700"
//             }`}
//         >
//           Level Gifts
//         </button>

//         <button
//           onClick={() => setActiveGift("badge")}
//           className={`px-3 py-1 rounded text-sm
//             ${
//               activeGift === "badge"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-100 text-gray-700"
//             }`}
//         >
//           Badge Gifts
//         </button>
//       </div>

//       {/* DIFFERENT UI */}
//       {activeGift === "banner" && <BannerGifts />}
//       {activeGift === "level" && <LevelGifts />}
//       {activeGift === "badge" && <BadgeGifts />}
//     </div>
//   );
// }
