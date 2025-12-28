import StatsSection from "../components/dashboard/StatsCard";
import UsersTable from "../components/users/UsersTable";
import Loading from "../components/Loading";
import { Crown, Wallet, Users } from "lucide-react";
import { BASE_URL } from "../utility/utility";
import { useState } from "react";
import Error from "../components/Error";
import useFetch from "../hooks/useFetch";

export default function DashboardUsers() {
  const [page, setPage] = useState(1);
  const usersStats = useFetch(`${BASE_URL}/admin/users/stats`);
  const usersList = useFetch(`${BASE_URL}/admin/users?page=${page}&limit=20`);

  const loading = usersStats.loading;
  const error = usersStats.error || usersList.error;

  const statsData = usersStats.data;
  const usersListData = usersList.data;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const usersCard = [
    {
      title: "Total Users",
      value: statsData?.totalUsers,
      change: `+${statsData?.thisMonthUsers} this month`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Active Host",
      value: statsData?.activeHosts,
      change: `+${statsData?.todayActiveHosts} today`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Normal Users",
      value: statsData?.normalUsers,
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-tl from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Premium Users",
      value: statsData?.premiumUsers,
      change: `${statsData?.revenueGrowth || 0}%`,
      icon: Crown,
      iconBg: "bg-gradient-to-b from-[#1931B8] to-[#61B3BF]",
    },
  ];
  return (
    <div>
      <StatsSection data={usersCard} />

      <UsersTable
        usersList={usersListData}
        // page={page}
        setPage={setPage}
        loading={usersList.loading}
      />
    </div>
  );
}
