import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import AboutList from "./AboutList";
import RefundPolicy from "./RefundPolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import ChildSafety from "./ChildSafety";

export default function AdminTabs() {
  return (
    <div>
      <Tabs>
        <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-full sm:w-fit overflow-x-auto px-2 py-1 rounded mb-5 text-nowrap hide_scrollbar">
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            About
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Refund Policy
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Privacy Policy
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Child Safety
          </Tab>
        </TabList>

        <TabPanel>
          <AboutList />
        </TabPanel>

        <TabPanel>
          <RefundPolicy />
        </TabPanel>

        <TabPanel>
          <PrivacyPolicy />
        </TabPanel>

        <TabPanel>
          <ChildSafety />
        </TabPanel>

        {/*
        
              <TabPanel>
                <StatsSection data={coinAgenciesdata} />
                <CoinsTable />
              </TabPanel>
        
              <TabPanel>
                <StatsSection data={masterAgenciesData} />
                <MastersTable />
              </TabPanel>
        
              <TabPanel>
                <StatsSection data={adminAgenciesData} />
                <AdminAgencyTable
                  tableData={agenciesData}
                  setPage={setPage}
                  loading={agenciesList.loading}
                />
              </TabPanel> */}
      </Tabs>
    </div>
  );
}
