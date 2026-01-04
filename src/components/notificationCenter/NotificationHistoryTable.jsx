import { Pen, Trash2 } from "lucide-react";
import { kycTable } from "../../data/data";
import TitleAndSubTitle from "../TitleAndSubTitle";

export default function NotificationHistoryTable() {
  return (
    <>
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mb-10">
        <div className="pl-5 mt-1">
          <TitleAndSubTitle
            title="See Notification History"
            subtitle="View all previously sent notifications"
          />
        </div>
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-10">Notification ID</th>
              <th className="p-3">Category</th>
              <th className="p-3">Title</th>
              <th className="p-3">Recipient Type</th>
              <th className="p-3">Recipient ID</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {kycTable.map((kyc, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 pl-10 font-medium">{kyc.userId}</td>
                <td className="p-3 ">System Notice</td>
                <td className="p-3">Account Warning</td>
                <td className="p-3">Broadcast</td>
                <td className="p-3">USR-001</td>
                <td className="p-3">2024-01-15</td>
                <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer">
                  <span className="flex items-center gap-4">
                    <button onClick={() => setOpen(true)}>
                      <Pen size={17} />
                    </button>
                    <Trash2 size={18} className="text-[#FF0037]" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
