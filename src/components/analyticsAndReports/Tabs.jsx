import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ThisMonthChart from "./UserGrowthChart";
import UserGrowthTrend from "./UserGrowthTrend";
import StatsSection from "../dashboard/StatsCard";
import { monitaization, salaryTarget, streams } from "../../data/data";
import PaymentDistribution from "./PaymentDistribution";
import PeakHours from "./PeakHours";
import RecentGift from "./RecentGift";
import RevenueBreakdown from "./RevenueBreakdown";

export default function ReportsTabs() {
  return (
    <section className="mb-10">
      <Tabs>
        <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-full sm:w-fit overflow-x-auto px-2 py-1 rounded mb-5 text-nowrap hide_scrollbar mt-6">
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            User
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Host
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Coin
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Revenue
          </Tab>

          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Engagement
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 ml-2 mb-6">
            <ThisMonthChart month="Previous Month" />
            <ThisMonthChart month="Previous Month" />
            <ThisMonthChart month="Previous Month" />
            <ThisMonthChart month="This Month" />
          </div>

          {/* user growth trend */}
          <UserGrowthTrend />

          <StatsSection data={monitaization} />
        </TabPanel>

        <TabPanel>
          <PaymentDistribution />
          <RecentGift />
        </TabPanel>

        <TabPanel>
          <UserGrowthTrend />

          <StatsSection data={monitaization} />
        </TabPanel>

        <TabPanel>
          <PeakHours />
          <StatsSection data={streams} />
          <RevenueBreakdown />
          <StatsSection data={salaryTarget} />
        </TabPanel>

        <TabPanel>
          <PeakHours />
          <StatsSection data={streams} />
        </TabPanel>
      </Tabs>
    </section>
  );
}
