import React from "react";
import TitleAndSubTitle from "../components/TitleAndSubTitle";
import StatsSection from "../components/dashboard/StatsCard";
import { monitaization } from "../../data/data";
import ModerationTabs from "../components/moderation/Moderation";

export default function Moderation() {
  return (
    <div>
      <TitleAndSubTitle
        title="Content Moderation"
        subtitle="Review reports and manage violations"
      />

      <StatsSection data={monitaization} />

      <ModerationTabs />
    </div>
  );
}
