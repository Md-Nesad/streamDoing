import React, { useEffect, useState } from "react";
import TitleAndSubTitle from "../components/TitleAndSubTitle";
import StatsSection from "../components/dashboard/StatsCard";
import LiveStreamTable from "../components/LiveStreamTable";
import { BASE_URL, totalViewersWithAvgDuration } from "../utility/utility";
import Error from "../components/Error";
import { Clock, Eye, TrendingUp, Video } from "lucide-react";
import { socket } from "../socket/socket";
import Loading from "../components/Loading";

export default function LiveStreams() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [lives, setLives] = useState([]);
  const [streamList, setStreamList] = useState([]);
  const state = totalViewersWithAvgDuration(streamList);

  const fetchLiveStreams = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${BASE_URL}/admin/live-streams?page=${page}&limit=50`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("admin_token")}`,
          },
        }
      );
      const data = await res.json();
      setData(data);
      // Filter only live streams
      const liveStreams = data?.liveStreams?.filter((s) => s.status === "live");
      setLives(liveStreams);
      setStreamList(liveStreams);
    } catch (error) {
      console.error("Failed to fetch live streams:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial live streams on mount
  useEffect(() => {
    fetchLiveStreams();
  }, []);

  // Socket listeners
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socket");
    });
    // New live created
    socket.on("admin:new-live-created", (data) => {
      console.log("create event", data);
      fetchLiveStreams(); // re-fetch live streams
    });

    // Live ended
    socket.on("admin:live-ended", (data) => {
      console.log("end event", data);
      fetchLiveStreams(); // re-fetch live streams
    });

    // Viewers count update
    socket.on("admin:total-live-viewers", ({ roomId, viewers }) => {
      console.log(roomId, viewers);
      setLives((prev) =>
        prev.map((live) =>
          live.roomId === roomId ? { ...live, viewers } : live
        )
      );
      setStreamList((prev) =>
        prev.map((live) =>
          live.roomId === roomId ? { ...live, viewers } : live
        )
      );
    });

    return () => {
      socket.off("admin:new-live-created");
      socket.off("admin:live-ended");
      socket.off("admin:total-live-viewers");
    };
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const streamSummary = [
    {
      title: "Active Streams",
      value: streamList?.length,
      change: streamList?.length > 0 ? "currently live" : "currenly offline",
      icon: Video,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Viewers",
      value: state?.totalViewers,
      change: "",
      icon: Eye,
      iconBg: "bg-gradient-to-b from-[#C213E1] to-[#30ACFF]",
    },
    {
      title: "Violations Today",
      value: data?.totalViolations,
      change: "",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
    {
      title: "Avg Duration",
      value: state?.avgDuration,
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
      <LiveStreamTable
        lives={lives}
        setLives={setLives}
        streamList={streamList}
        setPage={setPage}
        loading={loading}
      />
    </div>
  );
}
