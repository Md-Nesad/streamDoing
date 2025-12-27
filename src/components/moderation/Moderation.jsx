import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AllReportsTable from "./AllReportsTable";
import ActionLog from "./ActionLog";
import StatsSection from "../dashboard/StatsCard";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utility/utility";
import { Check, Clock, Eye, TriangleAlert } from "lucide-react";
import Loading from "../Loading";
import Error from "../Error";

export default function ModerationTabs() {
  const { data, loading, error } = useFetch(
    `${BASE_URL}/admin/reports?status=&page=1&limit=10`
  );

  const moderationSummary = data?.summary;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const monitaization = [
    {
      title: "Pending Reports",
      value: moderationSummary?.totalPendingReports,
      change: "Currently live",
      icon: TriangleAlert,
      iconBg: "bg-[#FF4B4E6B] opacity-100",
    },
    {
      title: "Under Review",
      value: moderationSummary?.totalReviewedReports,
      change: "Currently live",
      icon: Eye,
      iconBg: "bg-gradient-to-tl from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Resolved Today",
      value: moderationSummary?.totalResolvedReports,
      change: "Cases closed",
      icon: Check,
      iconBg: "bg-gradient-to-tl from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "All Flag",
      value: "1",
      change: "",
      icon: Clock,
      iconBg: "bg-gradient-to-tl from-[#13E17D] to-[#30ACFF]",
    },
  ];

  return (
    <>
      <StatsSection data={monitaization} />
      <Tabs>
        <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-fit px-2 py-1 rounded mt-6">
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            All Reports
          </Tab>
          <Tab
            className="font-sans cursor-pointer"
            selectedClassName="active-tab"
          >
            Action Log
          </Tab>
        </TabList>

        <TabPanel>
          <AllReportsTable reports={data} />
        </TabPanel>

        <TabPanel>
          <ActionLog />
        </TabPanel>
      </Tabs>
    </>
  );
}
