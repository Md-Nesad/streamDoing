import { Pen, Trash2 } from "lucide-react";
import TitleAndSubTitle from "../../TitleAndSubTitle";
import { kycTable } from "../../../data/data";
export default function RefundHistory() {
  return (
    <>
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-10">Refund ID</th>
              <th className="p-3">User ID</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Reason</th>
              <th className="p-3">Status</th>
              <th className="p-3">Agent</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {kycTable.map((kyc, index) => (
              <tr
                key={index}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 pl-10 font-medium">RF-042 </td>
                <td className="p-3 ">USR-001</td>
                <td className="p-3">100 Coins</td>
                <td className="p-3">Technical Error</td>
                <td className="p-3">
                  <span className="bg-[#E6F4EA] text-[#34A853] px-3 py-1 rounded-full text-sm font-medium">
                    Completed
                  </span>
                </td>
                <td className="p-3">Agent Smith</td>
                <td className="p-3">2024-01-15</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
