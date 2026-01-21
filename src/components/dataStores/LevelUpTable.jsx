import { useState } from "react";
import { LoaderCircle, SquarePen, Trash2 } from "lucide-react";
import { BASE_URL } from "../../utility/utility";
import useDelete from "../../hooks/useDelete";
import AddLevelTarget from "../../modals/dataSroreModals/AddLevelTarget";
// import UpdateLevelConfig from "../../modals/dataSroreModals/UpdateLevelConfig";
import Pagination from "../Pagination";
import { toast } from "react-toastify";
import { useGlobalConfirm } from "../../context/ConfirmProvider";

export default function LevelUpTable({ data, setPage, setRefresh }) {
  const [open, setIsOpen] = useState(false);
  // const [edit, setEdit] = useState(false);
  const [salaries, setSalaries] = useState(data?.levelConfigs);
  // const [selectedSalary, setSelectedSalary] = useState(null);
  const deleteUser = useDelete(`${BASE_URL}/admin/level-configs`);
  const [loading, setLoading] = useState(null);
  const { confirm } = useGlobalConfirm();
  const pagination = data?.pagination;

  // const handleEdit = (level) => {
  //   setSelectedSalary(level);
  //   setEdit(true);
  // };

  //handle delete
  const handleDelete = async (id) => {
    try {
      const ok = await confirm("Are you sure to delete?");
      if (!ok) return;

      setLoading(id);
      const result = await deleteUser(id);
      if (!result) {
        toast.error("Failed to delete target");
      } else {
        toast.success(result.message);
      }
      setLoading(null);
      setSalaries(salaries?.filter((level) => level._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <div className="flex items-center justify-between mb-4 px-3 sm:px-5">
          <h2 className="text-xl font-semibold">Level Config</h2>
          <button
            onClick={() => setIsOpen(true)}
            className="px-5 py-1.5 text-sm sm:text-[17px] bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white rounded-md font-medium"
          >
            Add Config
          </button>
        </div>
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-10">Profile</th>
              <th className="p-3">Level</th>
              <th className="p-3">Required exp.</th>
              <th className="p-3">Description</th>
              <th className="p-3 pl-5">Action</th>
            </tr>
          </thead>

          <tbody>
            {salaries?.length > 0 ? (
              salaries?.map((level) => {
                return (
                  <tr
                    key={level._id}
                    className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                  >
                    <td className="p-3 pl-10">
                      <img
                        src={level?.badge}
                        alt="badge profile"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </td>
                    <td className="p-3">{level.level}</td>
                    <td className="p-3">{level.requiredExperience}</td>
                    <td className="p-3">
                      {level.description || "No description"}
                    </td>
                    <td className="p-3">
                      <span className="flex items-center gap-4">
                        {/* <button title="Edit" onClick={() => handleEdit(level)}>
                          <SquarePen size={17} />
                        </button> */}

                        <button
                          title="Delete"
                          className="font-semibold bg-[#FFE9E9] text-[#CF0D13] py-1 px-3 rounded w-20"
                          onClick={() => handleDelete(level._id)}
                        >
                          {loading === level._id ? (
                            <LoaderCircle
                              className="animate-spin text-center mx-auto"
                              size={17}
                            />
                          ) : (
                            "Delete"
                          )}
                        </button>
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center pt-5">
                  No level found.
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
          <AddLevelTarget
            open={open}
            onClose={() => setIsOpen(false)}
            onSuccess={() => {
              setRefresh((prev) => !prev);
              setIsOpen(false);
            }}
          />
        )}
        {/* {edit && (
          <UpdateLevelConfig
            onClose={() => setEdit(false)}
            selected={selectedSalary}
            onSuccess={() => {
              setRefresh((prev) => !prev);
              setIsOpen(false);
            }}
          />
        )} */}
      </div>
    </>
  );
}
