import {
  Armchair,
  Ban,
  Banknote,
  BarChart3,
  Bell,
  Building2,
  ChartColumn,
  Coins,
  Home,
  MessageCircleQuestionMark,
  MessageSquare,
  Mic,
  Snowflake,
  Timer,
  Users,
} from "lucide-react";

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
    icon: Timer,
    link: "/coin-agency-portal/transaction-history",
  },
  {
    title: "Coin Freeze",
    icon: Snowflake,
    link: "/coin-agency-portal/coin-freeze",
  },
];

// host agency
export const hostMenuItems = [
  { title: "Dashboard", icon: Home, link: "/host-agency-portal" },
  {
    title: "Join Requests",
    icon: Users,
    link: "/host-agency-portal/join-requests",
  },
  { title: "Salaries", icon: Banknote, link: "/host-agency-portal/salaries" },
  {
    title: "Salary Target",
    icon: Coins,
    link: "/host-agency-portal/salary-target",
  },
  {
    title: "Official Pk",
    icon: Armchair,
    link: "/host-agency-portal/official-pk",
  },
  {
    title: "Analytics",
    icon: ChartColumn,
    link: "/host-agency-portal/analytics",
  },
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

//support menu items
export const supportMenuItems = [
  { title: "Dashboard", icon: Home, link: "/support-dashboard" },
  {
    title: "Live Chat",
    icon: MessageSquare,
    link: "/support-dashboard/live-chat",
  },
  {
    title: "Tickets",
    icon: Building2,
    link: "/support-dashboard/tickets",
  },
  {
    title: "Delete/Ban",
    icon: Ban,
    link: "/support-dashboard/delete-ban",
  },
  {
    title: "Refund Coins",
    icon: Coins,
    link: "/support-dashboard/refund-coins",
  },
  {
    title: "Reports",
    icon: BarChart3,
    link: "/support-dashboard/reports",
  },
  {
    title: "Notification Center",
    icon: Bell,
    link: "/support-dashboard/notification-center",
  },
  {
    title: "Notification History",
    icon: Timer,
    link: "/support-dashboard/notification-history",
  },
  {
    title: "FAQs",
    icon: MessageCircleQuestionMark,
    link: "/support-dashboard/faqs",
  },
];
