import {
  Ban,
  Eye,
  Trash2,
  Funnel,
  CheckCircle,
  LoaderCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import UserDetailsModal from "../../modals/UserDetailsModal";
import Pagination from "../Pagination";
import Loading from "../Loading";
import useDelete from "../../hooks/useDelete";
import { BASE_URL, formatNumber } from "../../utility/utility";
import star from "../../assests/star.png";
import { toast } from "react-toastify";
import { useGlobalConfirm } from "../../context/ConfirmProvider";
import BanUserModal from "../../modals/BanUserModal";

export default function HostAgencyTable({
  usersList,
  setPage,
  loading,
  setRefresh,
}) {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [banOpen, setBanOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(usersList?.users || []);
  const pagination = usersList?.pagination;
  const [isloading, setIsLoading] = useState(null);
  const { confirm } = useGlobalConfirm();

  // custom hook for delete that return a function
  const deleteUser = useDelete(`${BASE_URL}/admin/users`);

  //filtered users
  const handleFilter = () => {
    const filteredUsers = usersList?.users?.filter((user) => {
      return (
        user.name.toLowerCase().includes(text.toLowerCase()) ||
        user.displayId.toString().includes(text)
      );
    });
    setUsers(filteredUsers);
  };

  // Delete user by ID
  const handleDelete = async (id) => {
    const ok = await confirm("Are you sure to delete?");
    if (!ok) return;

    const result = await deleteUser(id);

    if (!result) {
      toast.error("Failed to delete user");
    } else {
      toast.success(result.message);
    }
    //fetching data after delete
    setUsers((prev) => prev.filter((user) => user._id !== id));
  };

  //handle unban
  const handleUnBan = async (id) => {
    try {
      setIsLoading(id);
      const res = await fetch(`${BASE_URL}/admin/users/unban/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
        },
        body: JSON.stringify({}),
      });

      const result = await res.json();
      toast.success(result.message);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(null);
      setRefresh((prev) => !prev);
    }
  };

  useEffect(() => {
    if (usersList?.users) {
      setUsers(usersList?.users);
    }
    setText("");
  }, [usersList]);

  useEffect(() => {
    if (text === "") {
      handleFilter();
    }
  }, [text]);

  if (loading) return <Loading />;

  return (
    <>
      {/* Search & Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-4 pt-7">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-[#BBBBBB] outline-[#BBBBBB] w-full sm:max-w-[88%] px-4 py-1.5 rounded-md"
          placeholder="Search by ID or name"
        />

        <div className="flex items-center justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={handleFilter}
            className="px-3 sm:px-4 py-1.5 rounded-md bg-white border border-[#CCCCCC] font-medium flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
          >
            <Funnel size={18} /> Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="py-4 bg-[#FFFFFF] rounded-md shadow-[0_2px_10px_rgba(0,0,0,0.06)] w-full overflow-x-auto mt-7 mb-10">
        <table className="w-full text-left border-collapse text-nowrap">
          <thead>
            <tr className="text-[#535353] text-md font-medium">
              <th className="p-3 pl-5">User ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Type</th>
              <th className="p-3">Level</th>
              <th className="p-3">Diamonds</th>
              <th className="p-3">Beans</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users?.length > 0 ? (
              users?.map((user) => (
                <tr
                  key={user._id}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 font-medium pl-5">{user.displayId}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 text-sm opacity-80 ${
                        user.type === "normal"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                          : "bg-linear-to-r from-[#EB57FF] px-5 to-[#3325C9] text-[#FFFFFF] font-thin"
                      } text-[#005D23] rounded-full font-semibold`}
                    >
                      {user.type.charAt(0).toUpperCase() + user.type.slice(1)}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className="px-1.5 py-1 text-xs bg-linear-to-b from-[#5DB90A] to-[#175111] rounded-lg font-semibold text-white flex items-center gap-1.5 w-14.5">
                      <img src={star} alt="" className="w-4 h-4" /> Lv
                      {user.level}
                    </span>
                  </td>
                  <td className="p-3">{formatNumber(user.diamonds)}</td>
                  <td className="p-3">{formatNumber(user.beans)}</td>
                  <td className="p-3">{user.location || "N/A"}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 text-xs text-center ${
                        user.status === "active"
                          ? "bg-linear-to-r from-[#79D49B] to-[#25C962]"
                          : "bg-[#FF929296] text-[#D21B20]"
                      } text-[#005D23] rounded-full font-semibold block w-22`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer flex gap-5 items-center">
                    <span className="flex items-center gap-3">
                      <button
                        title="View"
                        onClick={() => {
                          setSelectedUser(user);
                          setIsOpen(true);
                        }}
                      >
                        <Eye size={19} />
                      </button>
                      {/* ban modal */}
                      {user.status === "active" ? (
                        <div className="relative">
                          <button
                            title="Ban"
                            onClick={() => {
                              setBanOpen(true);
                              setSelectedUser(user);
                            }}
                          >
                            <Ban size={17} className="text-[#FF0037] mt-0.5" />
                          </button>

                          {banOpen && (
                            <BanUserModal
                              isOpen={banOpen}
                              onClose={() => setBanOpen(false)}
                              user={selectedUser}
                              onSuccess={() => {
                                setRefresh((prev) => !prev);
                                setBanOpen(false);
                              }}
                            />
                          )}
                        </div>
                      ) : (
                        <button
                          title="Unban"
                          onClick={() => handleUnBan(user._id)}
                        >
                          {isloading === user._id ? (
                            <LoaderCircle size={17} className="animate-spin" />
                          ) : (
                            <CheckCircle
                              size={17}
                              className="text-green-600 mt-0.5"
                            />
                          )}
                        </button>
                      )}

                      <button
                        title="Delete"
                        onClick={() => handleDelete(user._id)}
                      >
                        <Trash2 size={18} className="text-[#FF0037]" />
                      </button>
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF]">
                <td
                  colSpan={9}
                  className="text-center pt-5 text-[#555] font-medium"
                >
                  No users found.
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

        {isOpen && (
          <UserDetailsModal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            user={selectedUser}
          />
        )}
      </div>
    </>
  );
}
