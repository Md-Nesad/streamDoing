import { TrendingUp, Users, Video } from "lucide-react";
import StatsSection from "../components/dashboard/StatsCard";
import Error from "../components/Error";
import KycCenterTable from "../components/KycCenterTable";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import {
  BASE_URL,
  formatNumber,
  formatStreamingHours,
} from "../utility/utility";
import { Coin } from "../../public/icons/Coin";
import { useState } from "react";
export default function KycCenter() {
  const [page, setPage] = useState(1);
  const {
    data: state,
    loading: stateLoading,
    error: stateError,
  } = useFetch(`${BASE_URL}/admin/kyc/stats`);

  //agency list
  const {
    data: agencyList,
    loading: agencyLoading,
    error: agencyError,
  } = useFetch(
    `${BASE_URL}/admin/agencies?page=${page}&limit=20&search=&status=&type=`
  );

  const kyc = [
    {
      title: "User Growth",
      value: state?.userStats?.totalUsers,
      change: `+${state?.userStats?.thisMonthUsers} this month`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Stream Hours",
      value: formatStreamingHours(state?.totalStreamHours),
      change: `+${state?.todayStreamHours.toFixed(2)} today`,
      icon: Video,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Coin Circulation",
      value: formatNumber(state?.thisMonthTotalCoinCirculation),
      change: "This month",
      icon: Coin,
      iconBg: "bg-gradient-to-tl from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "$ Revenue",
      value: "$" + formatNumber(state?.totalRevenue),
      change: "After expenses",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#1931B8] to-[#61B3BF]",
    },
  ];

  if (stateLoading || agencyLoading) return <Loading />;
  if (stateError || agencyError) return <Error error={stateError} />;
  return (
    <div>
      <StatsSection data={kyc} />
      <KycCenterTable data={agencyList} setPage={setPage} />
    </div>
  );
}
