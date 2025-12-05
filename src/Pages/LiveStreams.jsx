import React from "react";
import TitleAndSubTitle from "../components/TitleAndSubTitle";
import StatsSection from "../components/dashboard/StatsCard";
import { streams } from "../data/data";
import LiveStreamTable from "../components/LiveStreamTable";

export default function LiveStreams() {
  return (
    <div>
      <TitleAndSubTitle
        title="Live Stream Management"
        subtitle="Monitor and manage active streams"
      />

      <StatsSection data={streams} />
      <LiveStreamTable />
    </div>
  );
}
