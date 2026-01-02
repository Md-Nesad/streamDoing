import { Home, Mic, Users } from "lucide-react";

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
