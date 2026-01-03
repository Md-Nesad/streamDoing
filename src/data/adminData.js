import { BarChart3, Building2, Coins, Home, Mic, Users } from "lucide-react";

export const adminMenuItems = [
  { title: "Dashboard", icon: Home, link: "/admin-agency-portal" },
  {
    title: "Add Agency",
    icon: Users,
    link: "/admin-agency-portal/add-agency",
  },
  { title: "Moderator", icon: Mic, link: "/admin-agency-portal/moderator" },
];

// coin agency
export const coinMenuItems = [
  { title: "Dashboard", icon: Home, link: "/coin-agency-portal" },
  {
    title: "Transaction History",
    icon: Users,
    link: "/coin-agency-portal/transaction-history",
  },
  { title: "Coin Freeze", icon: Mic, link: "/coin-agency-portal/coin-freeze" },
];

// host agency
export const hostMenuItems = [
  { title: "Dashboard", icon: Home, link: "/host-agency-portal" },
  {
    title: "Join Requests",
    icon: Users,
    link: "/host-agency-portal/join-requests",
  },
  { title: "Salaries", icon: Mic, link: "/host-agency-portal/salaries" },
  {
    title: "Salary Target",
    icon: Mic,
    link: "/host-agency-portal/salary-target",
  },
  { title: "Official Pk", icon: Mic, link: "/host-agency-portal/official-pk" },
  { title: "Analytics", icon: Mic, link: "/host-agency-portal/analytics" },
];

//master menu items
export const masterMenuItems = [
  { title: "Dashboard", icon: Home, link: "/master-agency-portal" },
  {
    title: "Transaction History",
    icon: Users,
    link: "/master-agency-portal/transaction-history",
  },
  {
    title: "Agencies",
    icon: Building2,
    link: "/master-agency-portal/agencies",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    link: "/master-agency-portal/analytics",
  },
];
