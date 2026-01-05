import React from "react";
import StatsSection from "../../dashboard/StatsCard";

export default function HostStats({ data }) {
  return (
    <div className="mb-6">
      <StatsSection data={data} />
    </div>
  );
}
