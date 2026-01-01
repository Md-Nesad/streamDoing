import { Home, Mic, Users } from "lucide-react";

export const adminMenuItems = [
  { title: "Dashboard", icon: Home, link: "/admin-agency-dashboard" },
  {
    title: "Add Agency",
    icon: Users,
    link: "/admin-agency-dashboard/add-agency",
  },
  { title: "Moderator", icon: Mic, link: "/admin-agency-dashboard/moderator" },
];
