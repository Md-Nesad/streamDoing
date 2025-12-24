import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import StatsSection from "../dashboard/StatsCard";
import HostAgencyTable from "./HostAgencyTable";
import CoinsTable from "./CoinsTable";
import MastersTable from "./MastersTable";
import AdminAgencyTable from "./AdminAgencyTable";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../utility/utility";
import Loading from "../Loading";
import { RadioTower, TrendingUp, Users, Wallet } from "lucide-react";
import { useState } from "react";
import Error from "../Error";

export default function AgencisTabs() {
  const [page, setPage] = useState(1);
  const hostAgencies = useFetch(`${BASE_URL}/admin/agencies/host-stats`);
  const coinAgencies = useFetch(`${BASE_URL}/admin/agencies/coin-stats`);
  const masterAgencies = useFetch(`${BASE_URL}/admin/agencies/master-stats`);
  const adminAgencies = useFetch(`${BASE_URL}/admin/agencies/admin-stats`);
  const agenciesList = useFetch(
    `${BASE_URL}/admin/agencies?page=${page}&limit=10&search=`
  );

  const agenciesData = agenciesList?.data;
  console.log(agenciesData);
  const loading = hostAgencies.loading || coinAgencies.loading;
  const error =
    hostAgencies.error ||
    coinAgencies.error ||
    masterAgencies.error ||
    adminAgencies.error ||
    agenciesList.error;

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  // host agencies
  const agencies = [
    {
      title: "Total Agencies",
      value: hostAgencies?.data?.totalAgencies,
      change: `+${hostAgencies?.data?.thisMonthTotalAgencies} this month`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Host",
      value: hostAgencies?.data?.totalHosts,
      change: "",
      icon: RadioTower,
      iconBg: "bg-gradient-to-b from-[#13E17D] to-[#30ACFF]",
    },
    {
      title: "Active Balance",
      value: `${hostAgencies?.data?.activeAgencyBalance}M`,
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Platform Revenue",
      value: `৳${hostAgencies?.data?.totalRevenue}k`,
      change: "",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];
  //coin agencies
  const coinAgenciesdata = [
    {
      title: "Total Agencies",
      value: coinAgencies?.data?.totalAgencies,
      change: `+${coinAgencies?.data?.thisMonthTotalAgencies} this month`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Coin Sales",
      value: coinAgencies?.data?.totalCoinSales + "M",
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Avg Commission",
      value: `${coinAgencies?.data?.avgCommission}%`,
      change: "",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];
  //master agencies
  const masterAgenciesData = [
    {
      title: "Total Agencies",
      value: masterAgencies?.data?.totalAgencies,
      change: `+${masterAgencies?.data?.thisMonthTotalAgencies} this month`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Coin Sales",
      value: masterAgencies?.data?.totalCoinSales + "M",
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Avg Commission",
      value: `${masterAgencies?.data?.avgCommission}%`,
      change: "",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];
  //admin agencies
  const adminAgenciesData = [
    {
      title: "Total Agencies",
      value: adminAgencies?.data?.totalAgencies,
      change: `+${adminAgencies?.data?.thisMonthTotalAgencies} this month`,
      icon: Users,
      iconBg: "bg-gradient-to-b from-[#9662FF] to-[#A1DAF1]",
    },
    {
      title: "Total Coin Sales",
      value: adminAgencies?.data?.totalCoinSales + "M",
      change: "",
      icon: Wallet,
      iconBg: "bg-gradient-to-b from-[#30ACFF] to-[#C213E1]",
    },
    {
      title: "Avg Commission",
      value: `${adminAgencies?.data?.avgCommission}%`,
      change: "",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-b from-[#E13913] to-[#30ACFF]",
    },
  ];

  return (
    <Tabs>
      <TabList className="flex items-center gap-4 bg-[#F4F4F4] w-full sm:w-fit overflow-x-auto px-2 py-1 rounded mb-5 text-nowrap hide_scrollbar">
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Host Agencies
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Coin Agencies
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Master Agencies
        </Tab>
        <Tab
          className="font-sans cursor-pointer"
          selectedClassName="active-tab"
        >
          Admin Agencies
        </Tab>
      </TabList>

      <TabPanel>
        <StatsSection data={agencies} />
        <HostAgencyTable
          tableData={agenciesData}
          setPage={setPage}
          loading={agenciesList.loading}
        />
      </TabPanel>

      <TabPanel>
        <StatsSection data={coinAgenciesdata} />
        <CoinsTable
          tableData={agenciesData}
          setPage={setPage}
          loading={agenciesList.loading}
        />
      </TabPanel>

      <TabPanel>
        <StatsSection data={masterAgenciesData} />
        <MastersTable
          tableData={agenciesData}
          setPage={setPage}
          loading={agenciesList.loading}
        />
      </TabPanel>

      <TabPanel>
        <StatsSection data={adminAgenciesData} />
        <AdminAgencyTable
          tableData={agenciesData}
          setPage={setPage}
          loading={agenciesList.loading}
        />
      </TabPanel>
    </Tabs>
  );
}
