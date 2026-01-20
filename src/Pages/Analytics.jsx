import React, { useEffect } from "react";
import TitleAndSubTitle from "../components/TitleAndSubTitle";
import StatsSection from "../components/dashboard/StatsCard";
import { kyc } from "../data/data";
import ReportsTabs from "../components/analyticsAndReports/Tabs";

export default function Analytics() {
  return (
    <>
      <TitleAndSubTitle
        title="Reports & Analytics"
        subtitle="Comprehensive platform insights"
      />
      <StatsSection data={kyc} />
      <ReportsTabs />
    </>
  );
}
