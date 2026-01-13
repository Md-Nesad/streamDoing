import { formatNumber } from "../../../utility/utility";

export default function MasterHostPerformance({ data }) {
  const coinAgencyPerformance = data?.data;

  return (
    <>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="hidden sm:flex agencys-center justify-between  mb-5 sm:px-5 px-3 pt-3">
          <h2 className="sm:text-xl text-sm font-semibold">
            Coin Agencies Performance
          </h2>
        </div>

        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Agency ID</th>
              <th className="p-3">Agency Name</th>
              <th className="p-3">Level</th>
              <th className="p-3">Total amount sold</th>
              <th className="p-3">Total coins sold</th>
              <th className="p-3">Transactions</th>
              <th className="p-3 pl-5">Status</th>
            </tr>
          </thead>

          <tbody>
            {coinAgencyPerformance?.length > 0 ? (
              coinAgencyPerformance?.map((agency, index) => {
                // const host = agencies?.find(
                //   (agency) => agency?._id === agency?.agencyId
                // );
                // console.log(host);
                return (
                  <tr
                    key={index}
                    className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                  >
                    <td className="p-3 font-medium pl-5">
                      {agency?.agencyDisplayId}
                    </td>
                    <td className="p-3">{agency?.agencyName}</td>
                    <td className="p-3">{agency?.level || "N/A"}</td>
                    <td className="p-3 pl-15">
                      {formatNumber(agency?.totalAmountSold)}
                    </td>
                    <td className="p-3 pl-15 font-semibold">
                      {formatNumber(agency?.totalCoinsSold)}
                    </td>
                    <td className="p-3 pl-12">{agency?.transactionCount}</td>
                    <td className="p-3 ">
                      <span
                        className={`px-4 py-1 text-xs text-center block w-23 ${
                          agency.status === "active"
                            ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                            : "bg-[#FF929296] text-[#D21B20]"
                        } text-[#005D23] rounded-full font-semibold`}
                      >
                        {agency.status}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center pt-5">
                  No host found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
