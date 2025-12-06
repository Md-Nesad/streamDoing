import React from "react";
import { Ban, Check, CircleCheck, TriangleAlert, X } from "lucide-react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Details from "../components/moderation/Details";
import History from "../components/moderation/History";
import { logData } from "../data/data";

export default function ReportModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl relative animatefadeIn">
        <div className="flex items-center justify-between px-6 pt-5">
          <div>
            <h2 className="text-[18px] font-semibold">Report Details #1</h2>
            <p className="text-sm text-gray-500 -mt-0.5">
              Review and take action on this report
            </p>
          </div>

          <button onClick={onClose}>
            <X size={22} className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Tabs */}
        <Tabs className="pl-5">
          <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-fit px-2 py-1 rounded mt-6">
            <Tab
              className="font-sans cursor-pointer"
              selectedClassName="active-tab"
            >
              Details
            </Tab>
            <Tab
              className="font-sans cursor-pointer"
              selectedClassName="active-tab"
            >
              Evidence History
            </Tab>

            <Tab
              className="font-sans cursor-pointer"
              selectedClassName="active-tab"
            >
              History
            </Tab>
          </TabList>

          <TabPanel>
            <Details />
          </TabPanel>

          <TabPanel>
            {/* Three Image Boxes */}
            <div className="flex items-center gap-4 my-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-gray-100 rounded-md w-40 h-40 flex items-center justify-center border border-gray-200"
                >
                  <div className="text-gray-400 text-sm flex flex-col items-center">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5833 61.25C12.9792 61.25 11.6064 60.6793 10.465 59.5379C9.32361 58.3965 8.75194 57.0228 8.75 55.4167V14.5833C8.75 12.9792 9.32167 11.6064 10.465 10.465C11.6083 9.32361 12.9811 8.75194 14.5833 8.75H55.4167C57.0208 8.75 58.3946 9.32167 59.5379 10.465C60.6813 11.6083 61.2519 12.9811 61.25 14.5833V55.4167C61.25 57.0208 60.6793 58.3946 59.5379 59.5379C58.3965 60.6813 57.0228 61.2519 55.4167 61.25H14.5833ZM14.5833 55.4167H55.4167V14.5833H14.5833V55.4167ZM17.5 49.5833H52.5L41.5625 35L32.8125 46.6667L26.25 37.9167L17.5 49.5833Z"
                        fill="#5A5A5A"
                        fill-opacity="0.51"
                      />
                    </svg>
                    Image
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Transcript */}
            <h3 className="font-medium mb-2">Chat Transcript</h3>

            <div className="text-sm text-gray-700 space-y-1 mb-30">
              <p>[14:25] User: This is sample chat message</p>
              <p>[14:26] User: Another message here</p>
              <p>[14:27] User: Flagged content example</p>
            </div>
          </TabPanel>

          <TabPanel>
            <History logData={logData} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

/* Small reusable component */
