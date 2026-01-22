import { formatNumber, formatStreamingHours } from "../../../utility/utility";

export default function HostSalariesTable({ data }) {
  const salarySheet = data?.hostSalaries;
  return (
    <>
      <div className=" bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full border-collapse text-sm overflow-x-auto">
          {/* HEADER */}
          <thead>
            <tr>
              <th rowSpan="2" className="border-b border-r p-3">
                #
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Profile Picture
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Name
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                User ID
              </th>
              <th colSpan="2" className="border-b border-r p-3 text-center">
                Total Day
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Video Time
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Audio Time
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Diamond Share
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Basic Salary
              </th>
              <th rowSpan="2" className="border-b border-r p-3">
                Total Salary
              </th>
              <th rowSpan="2" className="border-b p-3">
                Agency Share
              </th>
            </tr>

            <tr>
              <th className="border p-2">Video</th>
              <th className="border p-2">Audio</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="text-nowrap">
            {salarySheet?.length > 0 ? (
              salarySheet.map((item, index) => (
                <tr key={item.id} className="text-center">
                  <td className="border-t border-r p-3">{index + 1}</td>

                  <td className="border-t border-r p-3">
                    <img
                      src={item?.profilePic}
                      alt={item.name}
                      className="w-10 h-10 rounded-full mx-auto"
                    />
                  </td>

                  <td className="border-t border-r p-3">{item.name}</td>
                  <td className="border-t border-r p-3">{item.displayId}</td>
                  <td className="border-t border-r p-3">
                    {item.totalVideoDay}
                  </td>
                  <td className="border-t border-r p-3">
                    {item.totalAudioDay}
                  </td>
                  <td className="border-t border-r p-3">
                    {formatStreamingHours(item.totalVideoTime)}
                  </td>
                  <td className="border-t border-r p-3">
                    {formatStreamingHours(item.totalAudioTime)}
                  </td>
                  <td className="border-t border-r p-3">
                    {formatNumber(item.totalDiamonds)}
                  </td>
                  <td className="border-t border-r p-3">${item.basicSalary}</td>
                  <td className="border-t border-r p-3">${item.totalSalary}</td>
                  <td className="border-r-0 border-t p-3">
                    ${item.agencyShare}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={12} className="p-3 text-center py-6">
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
