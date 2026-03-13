import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import Loading from "../Loading";
import Error from "../Error";
import UpdateRefund from "./UpdateRefund";

export default function RefundPolicy() {
  const [refresh, setRefresh] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/settings/refund-policy`,
    refresh,
  );

  // const deleteAboutInfo = async () => {
  //   try {
  //     const token = localStorage.getItem("token"); // token যেখানে store করছো

  //     const res = await fetch(`${BASE_URL}/admin/settings/about`, {
  //       method: "DELETE",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       throw new Error(data.message || "Delete failed");
  //     }

  //     console.log(data);
  //     setRefresh((prev) => !prev);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
      <div className="flex items-center justify-between mb-4 px-3 sm:px-5">
        <h2 className="text-xl font-semibold">Refund</h2>

        <button
          onClick={() => setIsOpen(true)}
          className="px-5 py-1.5 text-sm sm:text-[17px] bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium"
        >
          Update Refund
        </button>
      </div>

      <table className="w-full text-left border-collapse text-nowrap">
        <thead>
          <tr className="text-[#535353] text-md font-medium">
            <th className="p-3 pl-10">Refund Policy</th>
            {/* <th className="p-3 text-right pr-16">Action</th> */}
          </tr>
        </thead>

        <tbody>
          <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
            <td className="p-3 pl-10">{data?.refundPolicy?.content}</td>

            {/* <td className="p-3 pr-10 text-right">
              <button
                className="font-semibold bg-[#FFE9E9] text-[#CF0D13] py-1 px-3 rounded w-20"
                onClick={deleteAboutInfo}
              >
                Delete
              </button>
            </td> */}
          </tr>
        </tbody>
      </table>
      {isOpen && (
        <UpdateRefund
          onClose={() => setIsOpen(false)}
          onSuccess={() => setRefresh((prev) => !prev)}
        />
      )}
    </div>
  );
}
