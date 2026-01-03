import { Funnel } from "lucide-react";
import { usersTable } from "../../../data/data";

export default function OfficialPkList() {
  return (
    <>
      {/* table area */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">User ID</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time Select</th>
              <th className="p-3">Host Location</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {usersTable.map((user, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 font-medium pl-5">USR-823014</td>
                <td className="p-3">10-10-2025</td>
                <td className="p-3">10:00 AM</td>
                <td className="p-3">Los Angeles</td>
                <td className="p-3">New York</td>
                <td className="p-3 text-[#0AC6E3]">Checking....</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
