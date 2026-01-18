import { Funnel } from "lucide-react";
import { useEffect, useState } from "react";
import { formatNumber } from "../../../utility/utility";
import { useNavigate } from "react-router-dom";
import HostDetailsModalPortal from "./HostDetailsModal";

export default function HostList({ data }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [hosts, setHosts] = useState(data?.hosts);
  const [text, setText] = useState("");

  //handle filter
  const handleFilter = () => {
    const filteredUsers = hosts?.filter((host) => {
      return (
        host.name.toLowerCase().includes(text.toLowerCase()) ||
        host.displayId.toString().includes(text)
      );
    });
    setHosts(filteredUsers);
  };

  //handle edit
  const handleView = (host) => {
    setSelected(host);
    setOpen(true);
  };

  useEffect(() => {
    if (text === "") {
      setHosts(data?.hosts);
    }
  }, [text, data]);

  return (
    <>
      {/* search area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4">
        {/* Search Input */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[75%] px-4 py-1.5 rounded-md"
          placeholder="Search by ID or name"
        />

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={handleFilter}
            className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
          >
            <Funnel size={18} /> Filter
          </button>
          <button
            onClick={() => navigate("/host-agency-portal/add-host")}
            className="px-3 sm:px-6 py-1.5 text-sm sm:text-base bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium w-full sm:w-auto text-nowrap"
          >
            Add Host
          </button>
        </div>
      </div>

      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Host ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Level</th>
              <th className="p-3">Diamonds</th>
              <th className="p-3">Beans</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {hosts?.length > 0 ? (
              hosts?.map((host, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 font-medium pl-5">HST-{host.displayId}</td>
                  <td className="p-3">{host.name}</td>
                  <td className="p-3 text-[#FF00C8]">Lv {host.level}</td>
                  <td className="p-3">{formatNumber(host.diamonds)}</td>
                  <td className="p-3">{formatNumber(host.beans)}</td>
                  <td className="p-3">
                    <span
                      className={`px-4 py-1 text-xs ${
                        host.status === "active"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                          : "bg-[#FF929296] text-[#D21B20]"
                      } text-[#005D23] rounded-full font-semibold`}
                    >
                      {host.status}
                    </span>
                  </td>

                  <td className="p-3">
                    <button onClick={() => handleView(host)}>View</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No host found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {open && (
        <HostDetailsModalPortal
          open={open}
          onClose={() => setOpen(false)}
          host={selected}
        />
      )}
    </>
  );
}
