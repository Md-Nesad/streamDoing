import React from "react";
import TitleAndSubTitle from "../adminPanel/components/TitleAndSubTitle";
import StatsSection from "../adminPanel/components/dashboard/StatsCard";
import { monitaization } from "../data/data";
import ModerationTabs from "../adminPanel/components/moderation/Moderation";

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
