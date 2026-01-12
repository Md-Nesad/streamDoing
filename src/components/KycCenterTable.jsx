import { CircleCheckBig, CircleX, Ellipsis, Eye, Funnel } from "lucide-react";
import { useEffect, useState } from "react";
import UserDetailsModal from "../modals/KycUserDetailsModal";
import Pagination from "./Pagination";
import { formatOnlyTime } from "../utility/utility";

export default function KycCenterTable({ data, setPage }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [kycTable, setKycTable] = useState(data?.agencies);
  const pagination = data?.pagination;

  const handleFilter = () => {
    const filteredUsers = kycTable?.filter((kuc) => {
      return (
        kuc.name.toLowerCase().includes(text.toLowerCase()) ||
        kuc.displayId.toString().includes(text)
      );
    });
    setKycTable(filteredUsers);
  };

  useEffect(() => {
    if (text === "") {
      setKycTable(data?.agencies);
    }
  }, [text, data]);

  return (
    <>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="mb-4 px-2 flex gap-10">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border border-[#BBBBBB] outline-[#BBBBBB] w-full px-4 py-1.5 rounded-md"
            placeholder="Search by agency name or ID"
          />

          <button
            onClick={handleFilter}
            className="sm:px-5 px-2 py-2 bg-[#FFFFFF] rounded-md font-medium border border-[#CCCCCC] flex items-center gap-2 text-sm sm:text-md"
          >
            <Funnel size={18} /> Filter
          </button>
        </div>

        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-6">User ID</th>
              <th className="p-3">User Name</th>
              <th className="p-3">Agency ID</th>
              <th className="p-3">Agency Name</th>
              <th className="p-3">Categories</th>
              <th className="p-3">Approve in</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {kycTable?.length > 0 ? (
              kycTable?.map((kyc, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 pl-6">
                    {kyc?.parent ? `AGT-${kyc?.parent?.displayId}` : "N/A"}
                  </td>
                  <td className="p-3 font-medium">
                    {kyc?.parent?.name || "N/A"}
                  </td>
                  <td className="p-3">{kyc.displayId}</td>
                  <td className="p-3">{kyc.name}</td>
                  <td className="p-3">{kyc.type} agency</td>
                  <td className="p-3">{formatOnlyTime(kyc.createdAt)}</td>
                  <td className="p-3">
                    <span
                      className={`px-4 py-1 text-xs text-center block w-23 ${
                        kyc.status === "active"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                          : "bg-[#FF929296] text-[#D21B20]"
                      } text-[#005D23] rounded-full font-semibold`}
                    >
                      {kyc.status}
                    </span>
                  </td>
                  <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer">
                    <span className="flex items-center gap-4">
                      {/* <button onClick={() => setOpen(true)}>
                      <CircleCheckBig size={17} className="text-[#11B324]" />
                    </button>
                    <CircleX size={18} className="text-[#FF0037]" /> */}
                      <Ellipsis size={17} />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {open && (
          <UserDetailsModal open={open} onClose={() => setOpen(false)} />
        )}
        <Pagination
          page={pagination?.page}
          limit={pagination?.limit}
          total={pagination?.total}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
