import { formatNumber } from "../../../utility/utility";

export default function SalaryTargetTable({ data }) {
  console.log(data);
  return (
    <>
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="flex items-center justify-between mb-4 px-3 sm:px-5">
          <h2 className="text-xl font-semibold">Salary Targets</h2>
        </div>
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">Target</th>
              <th className="p-3">Diamond Share</th>
              <th className="p-3">Basic Salary</th>
              <th className="p-3">Total Salary</th>
              <th className="p-3">Agency Share</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((salary) => (
              <tr
                key={salary._id}
                className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
              >
                <td className="p-3 font-medium pl-5">{salary.targetCoin}</td>
                <td className="p-3">{formatNumber(salary.targetDiamond)}</td>
                <td className="p-3">${formatNumber(salary.basicSalary)}</td>
                <td className="p-3">${formatNumber(salary.totalSalary)}</td>
                <td className="p-3">${formatNumber(salary.agencyShare)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
