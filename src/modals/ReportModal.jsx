import React from "react";
import { X } from "lucide-react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Details from "../components/moderation/Details";
import History from "../components/moderation/History";
import { logData } from "../data/data";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utility/utility";

export default function ReportModal({ open, onClose, id, refresh }) {
  if (!open) return null;
  const { data, loading, error } = useFetch(`${BASE_URL}/admin/reports/${id}`);
  const report = data?.report;
  const evidence = report?.evidence;
  const notes = report?.moderatorNotes;
  const history = report?.actions;

  // if (loading) return <Loading />;
  // if (error) return <Error error={error} />;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-2 sm:px-4">
      <div className="bg-[#FDFDFD] w-full max-w-2xl rounded-xl relative animatefadeIn max-sm:h-[95vh] overflow-y-auto">
        <div className="flex items-center justify-between px-4 sm:px-6 pt-5">
          <div>
            <h2 className="text-[18px] font-semibold">Report Details</h2>
            <p className="text-sm text-gray-500 -mt-0.5">
              Review and take action on this report
            </p>
          </div>

          <button onClick={onClose}>
            <X size={22} className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Tabs */}
        <Tabs className="px-3 sm:px-5">
          <TabList className="flex items-center gap-2 sm:gap-4 bg-[#F4F4F4] w-full text-nowrap sm:w-fit px-2 py-1 rounded mt-6 overflow-x-auto max-sm:text-sm">
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
            <Details
              report={report}
              loading={loading}
              error={error}
              id={id}
              setRefresh={refresh}
            />
          </TabPanel>

          <TabPanel>
            {/* Three Image Boxes */}
            <div className="flex items-center gap-4 my-6">
              {evidence?.length > 0 ? (
                evidence?.map((e, index) => (
                  <div key={index}>
                    <div className="text-gray-400 text-sm flex flex-col items-center">
                      <img
                        src={e || "No evidence found"}
                        alt="Evidence Image"
                        className="w-40 h-40 object-cover rounded-md"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 text-sm flex flex-col items-center">
                  <img
                    src="No evidence found"
                    alt="Evidence Image"
                    className="w-40 h-40 object-cover rounded-md"
                  />
                </div>
              )}
            </div>

            {/* Chat Transcript */}
            <h3 className="font-medium mb-2 mt-10">Chat Transcript</h3>

            <div className="mb-20">
              {notes?.map((note, index) => (
                <ul key={index} className="text-sm text-gray-700 space-y-1">
                  <li>• {note.note}</li>
                </ul>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <History logData={history} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

/* Small reusable component */
