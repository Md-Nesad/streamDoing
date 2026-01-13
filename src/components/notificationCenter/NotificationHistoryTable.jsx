import { Pen, Trash2 } from "lucide-react";
import TitleAndSubTitle from "../TitleAndSubTitle";
import useFetch from "../../hooks/useFetch";
import { BASE_URL, formatOnlyDate } from "../../utility/utility";
import Loading from "../Loading";
import Error from "../Error";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import useDelete from "../../hooks/useDelete";

export default function NotificationHistoryTable() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/support-agency/notification-center?page=${page}&limit=10`
  );
  const [notifications, setNotifications] = useState(data?.notifications);
  const pagination = data?.pagination;

  //handle delete
  const deleteUser = useDelete(
    `${BASE_URL}/support-agency/notification-center`
  );

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this notification?"
    );
    if (!confirmDelete) return;
    const result = await deleteUser(id);
    alert(result.message);
    setNotifications(
      notifications?.filter((notification) => notification._id !== id)
    );
  };

  useEffect(() => {
    setNotifications(data?.notifications);
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
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
            {notifications?.length > 0 ? (
              notifications?.map((notification) => (
                <tr
                  key={notification._id}
                  className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md"
                >
                  <td className="p-3 pl-10 font-medium">
                    {notification.displayId || "N/A"}
                  </td>
                  <td className="p-3 ">{notification.category} Notice</td>
                  <td className="p-3">{notification.title}</td>
                  <td className="p-3">{notification.targetType}</td>
                  <td className="p-3">{notification.targetId || "N/A"}</td>
                  <td className="p-3">
                    {formatOnlyDate(notification.createdAt)}
                  </td>
                  <td className="p-3 mt-1.5 text-[#181717] text-sm font-medium cursor-pointer">
                    <span className="flex items-center gap-4">
                      <button>
                        <Pen size={17} />
                      </button>
                      <button onClick={() => handleDelete(notification._id)}>
                        <Trash2 size={18} className="text-[#FF0037]" />
                      </button>
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
                <td colSpan={9} className="p-3 text-center">
                  No notifications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Pagination
          page={pagination?.page}
          limit={pagination?.limit}
          total={pagination?.total}
          onPageChange={setPage}
        />
      </div>
    </>
  );
}
