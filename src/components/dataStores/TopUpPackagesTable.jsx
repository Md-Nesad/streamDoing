import { useState } from "react";
import { SquarePen, Trash2 } from "lucide-react";
import { BASE_URL, formatNumber } from "../../utility/utility";
import useDelete from "../../hooks/useDelete";
import AddTopUpPackages from "../../modals/dataSroreModals/AddTopUpPackages";
import UpdateTopUpPackage from "../../modals/dataSroreModals/UpdateTopUpPackage";
import Pagination from "../Pagination";
import { useGlobalConfirm } from "../../context/ConfirmProvider";

export default function TopUpPackagesTable({ data, setPage }) {
  const [open, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [salaries, setSalaries] = useState(data?.packages);
  const [selectedSalary, setSelectedSalary] = useState(null);
  const deleteUser = useDelete(`${BASE_URL}/admin/top-up-packages`);
  const pagination = data?.pagination;
  const { confirm } = useGlobalConfirm();

  const handleEdit = (top) => {
    setSelectedSalary(top);
    setEdit(true);
  };

  //handle delete
  const handleDelete = async (id) => {
    try {
      const ok = await confirm("Are you sure to delete?");
      if (!ok) return;
      const result = await deleteUser(id);
      if (!result) {
        alert("Failed to delete target");
      } else {
        alert(result.message);
      }
      setSalaries(salaries?.filter((top) => top._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="flex items-center justify-between mb-4 px-3 sm:px-5">
          <h2 className="text-xl font-semibold">Top Up Packages</h2>
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-1.5 text-sm sm:text-[17px] bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium"
          >
            Add Package
          </button>
        </div>
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-10">Name</th>
              <th className="p-3">Coins</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {salaries?.length > 0 ? (
              salaries?.map((top) => {
                return (
                  <tr
                    key={top._id}
                    className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                  >
                    <td className="p-3 font-medium pl-10">{top?.name}</td>
                    <td className="p-3">{formatNumber(top.coins)}</td>
                    <td className="p-3">{formatNumber(top.price)}</td>
                    <td className="p-3">
                      <span
                        className={`px-4 py-1 text-xs text-center  ${
                          top.isActive
                            ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                            : "bg-[#FF929296] text-[#D21B20]"
                        } text-[#005D23] rounded-full font-semibold`}
                      >
                        {top.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="flex items-center gap-4">
                        <button title="Edit" onClick={() => handleEdit(top)}>
                          <SquarePen size={17} />
                        </button>

                        <button
                          title="Delete"
                          onClick={() => handleDelete(top._id)}
                        >
                          <Trash2 size={17} className="text-red-500" />
                        </button>
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center pt-5">
                  No top found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          page={pagination?.page}
          total={pagination?.total}
          limit={pagination?.limit}
          onPageChange={setPage}
        />
        {open && (
          <AddTopUpPackages open={open} onClose={() => setIsOpen(false)} />
        )}
        {edit && (
          <UpdateTopUpPackage
            onClose={() => setEdit(false)}
            selected={selectedSalary}
          />
        )}
      </div>
    </>
  );
}
