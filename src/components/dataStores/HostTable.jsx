import { Eye, Funnel } from "lucide-react";
import { useEffect, useState } from "react";
import { formatNumber } from "../../utility/utility";
import HostDetailsModal from "../../modals/HostDetailsModal";
import { useDebounce } from "../../hooks/useDebounce";
import FilterDropdown from "../../modals/FilterModal";

export default function HostManageMentTable({ hostListData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [filterOpen, setFilterOpen] = useState(false);
  const [hostList, setHostList] = useState(hostListData?.hosts);
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(null);
  const debouncedText = useDebounce(text, 400);

  const handleView = (host) => {
    setSelected(host);
    setIsOpen(true);
  };

  //handle filter
  const filteredUsers = hostList?.filter((user) => {
    const matchText =
      user.name.toLowerCase().includes(debouncedText.toLowerCase()) ||
      user.displayId.toString().includes(debouncedText);

    const matchStatus =
      statusFilter === "all" ? true : user.status === statusFilter;

    return matchText && matchStatus;
  });

  //update list when text empty
  useEffect(() => {
    if (text === "") {
      setHostList(hostListData?.hosts);
    }
  }, [text, hostListData]);

  return (
    <>
      {/* search area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4">
        {/* Search Input */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[87%] px-4 py-2 rounded-md"
          placeholder="Search by ID or name"
        />

        {/* Buttons */}
        <div className="relative">
          <button
            onClick={() => setFilterOpen((prev) => !prev)}
            className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center gap-2"
          >
            <Funnel size={18} /> Filter
          </button>

          {/* Filter Dropdown */}
          {filterOpen && (
            <div className="absolute right-0 top-full mt-2 z-50">
              <FilterDropdown
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                onClose={() => setFilterOpen(false)}
              />
            </div>
          )}
        </div>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse shrink text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5 max-xl:w-10">User ID</th>
              <th className="p-3 max-xl:w-10">Name</th>
              <th className="p-3">Level</th>
              <th className="p-3">Crown</th>
              <th className="p-3">Diamonds</th>
              <th className="p-3">Beans</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3 sm:pl-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers?.length > 0 ? (
              filteredUsers?.map((host) => (
                <tr
                  key={host._id}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 font-medium pl-5 max-xl:w-40">
                    {host.displayId}
                  </td>
                  <td className="p-3 max-xl:w-40">{host.name || "-"}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 pb-1 pt-0.5 text-xs bg-[#46934F] text-[#FFFFFF] rounded-lg font-semibold`}
                    >
                      Lv{host.level}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 pb-1 pt-0.5 text-xs bg-linear-to-b from-[#C5A175] to-[#F0242D] rounded-lg text-white font-semibold opacity-100`}
                    >
                      {host.crown || (host.crown === null && "N/A")}
                    </span>
                  </td>
                  <td className="p-3">{formatNumber(host.diamonds)}</td>
                  <td className="p-3">{formatNumber(host.beans)}</td>
                  <td className="p-3">{host.location || "N/A"}</td>
                  <td className="p-3">
                    <span className="px-4 py-1 text-xs bg-linear-to-r from-[#79D49B] to-[#25C962] text-[#005D23] rounded-full font-semibold">
                      {host.status || "N/A"}
                    </span>
                  </td>
                  <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                    <span className="flex items-center gap-3">
                      <button onClick={() => handleView(host)}>
                        <Eye size={17} />
                      </button>
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF]">
                <td
                  colSpan={9}
                  className="text-center pt-5 text-[#555] font-medium"
                >
                  No Host Found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {isOpen && (
          <HostDetailsModal
            agency={selected}
            open={isOpen}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
}
