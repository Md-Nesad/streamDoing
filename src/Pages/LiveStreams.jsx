import React, { useState } from "react";
import TitleAndSubTitle from "../components/TitleAndSubTitle";
import StatsSection from "../components/dashboard/StatsCard";
import LiveStreamTable from "../components/LiveStreamTable";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utility/utility";
import Error from "../components/Error";
import { Clock, Eye, TrendingUp, Video } from "lucide-react";

export default function LiveStreams() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/live-streams?page=${page}&limit=30`
  );

  console.log(data);
  const streams = data?.summary;

  // if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const streamSummary = [
    {
      title: "Active Streams",
      value: streams?.totalActiveLives,
      change: "Currently live",
      icon: Video,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Viewers",
      value: streams?.totalViewers,
      change: "",
      icon: Eye,
      iconBg: "bg-gradient-to-b from-[#C213E1] to-[#30ACFF]",
    },
    {
      title: "Violations Today",
      value: streams?.totalViolations,
      change: "",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
    {
      title: "Avg Duration",
      value: streams?.avgDuration,
      change: "",
      icon: Clock,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
  ];
  return (
    <div>
      <TitleAndSubTitle
        title="Live Stream Management"
        subtitle="Monitor and manage active streams"
      />

      <StatsSection data={streamSummary} />
      <LiveStreamTable streamsData={data} loading={loading} setPage={setPage} />
    </div>
  );
}
