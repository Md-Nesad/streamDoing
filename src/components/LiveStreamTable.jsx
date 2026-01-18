import {
  Activity,
  Ban,
  Eye,
  Funnel,
  Mic,
  UserRound,
  Video,
} from "lucide-react";
import star from "../assests/star.png";
import { getDurationFromStartDate } from "../utility/utility";
// import Pagination from "./Pagination";
import Loading from "./Loading";
import { useEffect, useState } from "react";
// import { useZegoVideoAdmin } from "../hooks/useZegoAdmin";

export default function LiveStreamTable({
  lives,
  setLives,
  setPage,
  loading,
  streamList,
  onView,
}) {
  const [text, setText] = useState("");
  // const { muteHost, unmuteHost, banHost } = useZegoVideoAdmin();

  const handleFilter = () => {
    if (text === "") {
      setLives(streamList);
    } else {
      const filtered = streamList.filter(
        (stream) =>
          stream?.host?.name.toLowerCase().includes(text.toLowerCase()) ||
          stream?.host?.displayId.toString().includes(text),
      );
      setLives(filtered);
    }
  };

  // Optional: live search when typing
  useEffect(() => {
    if (text === "") {
      setLives(streamList);
    }
  }, [text, streamList, setLives]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* search area */}
          <div className="mt-6 flex gap-10">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border border-[#BBBBBB] outline-[#BBBBBB] w-full px-4 py-1.5 rounded-md"
              placeholder="Search by ID or name"
            />

            <button
              onClick={handleFilter}
              className="sm:px-5 px-2 py-2 bg-[#FFFFFF] rounded-md font-medium border border-[#CCCCCC] flex items-center gap-2 text-sm sm:text-md"
            >
              <Funnel size={18} /> Filter
            </button>
          </div>

          {/* table area */}
          <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-4 sm:mt-7 mb-10">
            <table className="w-full text-left border-collapse text-nowrap">
              <thead>
                <tr className="text-[#535353] text-md font-medium">
                  <th className="p-3">User ID</th>
                  <th className="p-3">Name</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Level</th>
                  <th className="p-3">Viewers</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 sm:pl-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {lives?.length > 0 ? (
                  lives?.map((stream, index) => (
                    <tr
                      key={index}
                      className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                    >
                      <td className="p-3">{stream?.host?.displayId}</td>
                      <td className="p-3">{stream?.host?.name}</td>
                      <td className="p-3">{stream.type}</td>
                      <td className="p-3">
                        <span className="p-1 text-xs bg-linear-to-b from-[#FA77BD] to-[#940C44] rounded-lg font-semibold text-white flex items-center gap-2 w-14">
                          <img src={star} alt="" className="w-4 h-4" /> Lv
                          {stream?.host?.level}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="flex gap-1 items-center">
                          <UserRound
                            strokeWidth={1}
                            size={16}
                            className="text-[#1F80FF]"
                          />{" "}
                          {stream.viewers}
                        </span>
                      </td>
                      <td className="p-3">
                        {getDurationFromStartDate(stream.startTime)}
                      </td>
                      <td className="p-3">
                        <span
                          className={`px-4 py-1 text-sm bg-linear-to-r from-[#2FB6FF] to-[#447FFF] rounded-full text-white opacity-70 flex gap-3 items-center w-20`}
                        >
                          <Activity size={15} /> {stream.status || "N/A"}
                        </span>
                      </td>
                      <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                        <span className="flex items-center gap-4">
                          <button onClick={() => onView(stream)}>
                            <Video size={19} className="text-[#181717]" />
                          </button>
                          <Mic size={20} className="text-[#181717]" />
                          <Ban size={17} className="text-[#FF0037]" />
                          <button title="View">
                            <Eye size={19} />
                          </button>
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                    <td colSpan={9} className="p-3 text-center">
                      No stream found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            {/* <Pagination
              page={streamPagination?.page}
              total={streamPagination?.total}
              limit={streamPagination?.limit}
              onPageChange={setPage}
            /> */}
          </div>
        </>
      )}
    </>
  );
}
