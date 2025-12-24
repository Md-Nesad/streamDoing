import { Funnel } from "lucide-react";
import giftImage from "../../../assests/giftImage.png";
export default function GiftingTable({ tableData }) {
  const giftList = tableData?.giftTransactions;
  return (
    <>
      {/* search area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 pt-7">
        {/* Search Input */}
        <input
          type="text"
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[75%] px-4 py-1.5 rounded-md"
          placeholder="Search by Agency ID or name"
        />

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto">
            <Funnel size={18} /> Filter
          </button>
          <button className="px-3 sm:px-6 py-1.5 text-sm sm:text-base bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium w-full sm:w-auto text-nowrap">
            Add Agency
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3">Gift ID</th>
              <th className="p-3">Gift Image</th>
              <th className="p-3">Gift Name</th>
              <th className="p-3">Sender User ID</th>
              <th className="p-3">Receive User ID</th>
              <th className="p-3">Stream ID</th>
              <th className="p-3">Price</th>
              <th className="p-3 sm:pl-4">Sent Date/Time</th>
            </tr>
          </thead>

          <tbody>
            {giftList?.length > 0 ? (
              giftList?.map((host, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3">GFT-042 </td>
                  <td className="p-3">
                    <img
                      src={giftImage}
                      alt="Sender GIft image"
                      width={35}
                      height={35}
                      loading="lazy"
                      className="ml-5"
                    />
                  </td>
                  <td className="p-3">Paper Crane</td>
                  <td className="p-3">001000</td>
                  <td className="p-3">002000</td>
                  <td className="p-3">007000</td>
                  <td className="p-3">50k</td>
                  <td className="p-3 text-[#181717] text-sm font-semibold cursor-pointer flex gap-5 items-center">
                    01-11-2025 21:55
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 pt-6 text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
