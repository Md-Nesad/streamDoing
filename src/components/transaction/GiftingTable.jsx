import {
  BASE_URL,
  formatNumber,
  formatOnlyDate,
  formatOnlyTime,
} from "../../utility/utility";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading";
import Error from "../Error";
import { useDebounce } from "../../hooks/useDebounce";
import VideoThumbnail from "../giftAndAssests/VideoThumbnail";
export default function GiftingTable() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/transactions/gift-history?page=${page}&limit=40`,
  );
  console.log("gift transaction data", data);
  const [giftList, setGiftList] = useState(data?.giftTransactions);
  const pagination = data?.pagination;
  const debouncedText = useDebounce(text, 400);

  const filteredGifts = giftList?.filter((gift) => {
    const matchText = gift?.gift.name
      .toLowerCase()
      .includes(debouncedText.toLowerCase());

    return matchText;
  });

  console.log("filteredGifts", filteredGifts?.length);

  useEffect(() => {
    if (text === "") {
      setGiftList(data?.giftTransactions);
    }
  }, [text, data]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>
      {/* search area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 pt-7">
        {/* Search Input */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-full px-4 py-1.5 rounded-md"
          placeholder="Search by gift name"
        />

        {/* Buttons */}
        {/* <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={handleFilter}
            className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
          >
            <Funnel size={18} /> Filter
          </button>
          
        </div> */}
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
            {filteredGifts?.length > 0 ? (
              filteredGifts?.map((gift, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3">GFT-{gift?.gift.giftID} </td>
                  {/* <td className="p-3">
                    <img
                      src={gift?.gift.image}
                      alt="Sender GIft image"
                      width={35}
                      height={35}
                      loading="lazy"
                      className="ml-5"
                    />
                  </td> */}

                  {gift?.gift?.image.includes("gift-videos") ? (
                    <td className="p-2 mx-auto">
                      <VideoThumbnail
                        id={gift?.gift?._id}
                        src={gift?.gift?.image}
                        activeVideo={activeVideo}
                        setActiveVideo={setActiveVideo}
                      />
                    </td>
                  ) : (
                    <td className="p-3">
                      <img
                        src={gift?.gift?.image}
                        alt="Sender GIft image"
                        width={35}
                        height={35}
                        loading="lazy"
                        className="ml-5"
                      />
                    </td>
                  )}
                  <td className="p-3">{gift?.gift.name}</td>
                  <td className="p-3">{gift?.user.displayId}</td>
                  <td className="p-3">{gift?.sentTo.displayId}</td>
                  <td className="p-3">{gift?.streamId || "N/A"}</td>
                  <td className="p-3">{formatNumber(gift?.amount)}</td>
                  <td className="p-3 text-[#181717] text-sm font-semibold cursor-pointer">
                    {formatOnlyDate(gift?.date)}, {formatOnlyTime(gift?.date)}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 pt-6 text-center">
                  No gift transaction found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          page={pagination?.page}
          total={pagination?.total}
          limit={pagination?.limit}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
