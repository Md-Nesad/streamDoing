import { useState } from "react";
import { BASE_URL } from "../../utility/utility";
import useFetch from "../../hooks/useFetch";
import UpdateCredentials from "../../modals/dataSroreModals/UpdateCredentials";
import Error from "../Error";
import TopPerformanceLoading from "../TopPerformanceLoading";

export default function Credentials() {
  const [open, setIsOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/zego-cloud-credentials`,
    refresh,
  );
  const creadital = data?.credentials;

  if (loading) return <TopPerformanceLoading length={1} />;

  if (error) return <Error error={error} />;

  return (
    <>
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="flex items-center justify-between mb-4 px-3 sm:px-5">
          <h2 className="text-xl font-semibold">Zego Cloud Credential</h2>
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-1.5 text-sm sm:text-[17px] bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium"
          >
            Update Credential
          </button>
        </div>
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-10">Audio App Id</th>
              <th className="p-3">Vidoe App Id</th>
              <th className="p-3">Audio App Sign</th>
              <th className="p-3">Video App Sign</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
              <td className="p-3 font-medium pl-10">{creadital?.audioAppID}</td>
              <td className="p-3">{creadital?.videoAppID}</td>
              <td className="p-3">
                {creadital?.audioAppSign?.slice(0, 30)} <br />
                {creadital?.audioAppSign?.slice(30)}
              </td>
              <td className="p-3">
                {" "}
                {creadital?.videoAppSign?.slice(0, 30)} <br />
                {creadital?.videoAppSign?.slice(30)}
              </td>
            </tr>
          </tbody>
        </table>
        {open && (
          <UpdateCredentials
            open={open}
            onClose={() => setIsOpen(false)}
            onSuccess={() => {
              setRefresh((prev) => !prev);
              setIsOpen(false);
            }}
          />
        )}
      </div>
    </>
  );
}
