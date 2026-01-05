export default function PendingJoinRequest({ data }) {
  const hostRequest = data?.hostRequests;
  return (
    <>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="hidden sm:flex items-center justify-between  mb-5 sm:px-5 px-3 pt-3">
          <h2 className="sm:text-xl text-sm font-semibold">
            Pending Join Requests
          </h2>
        </div>

        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-10">Request ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Level</th>
              <th className="p-3">Applied</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {hostRequest?.length > 0 ? (
              hostRequest?.map((request, index) => (
                <tr
                  key={index}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 font-medium pl-10">{request.requestId}</td>
                  <td className="p-3">{request.name}</td>
                  <td className="p-3">{request.beans}</td>
                  <td className="p-3">{request.location}</td>
                  <td className="p-3">
                    <span
                      className={`px-4 py-1 text-xs ${
                        request.status === "active"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                          : "bg-[#FF929296] text-[#D21B20]"
                      } text-[#005D23] rounded-full font-semibold`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="p-3 ">
                    <button>View</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No host requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
