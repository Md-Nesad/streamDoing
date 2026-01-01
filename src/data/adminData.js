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
