import { NavLink, useLocation } from "react-router-dom";
import { coinMenuItems } from "../../../data/adminData";

export default function CoinPortalSidebar({ isToogleNav, onClose }) {
  const location = useLocation();

  // Helper function to handle parent + child route active
  const isMenuActive = (item) => {
    if (item.hasChildren) {
      return (
        location.pathname === item.link ||
        location.pathname.startsWith(item.link + "/")
      );
    }
    return location.pathname === item.link;
  };

  // Render menu items
  const renderMenuItems = (items) =>
    items.map((item) => (
      <NavLink
        key={item.title}
        to={item.link}
        className={() =>
          `flex items-center gap-3 px-3 py-3 rounded-md text-md font-medium 
          transition-all cursor-pointer hover:bg-[#EE4096] hover:text-white
          ${
            isMenuActive(item)
              ? "text-[#EE4096] font-semibold"
              : "text-[#181717]"
          }`
        }
        onClick={() => isToogleNav && setTimeout(onClose, 700)}
      >
        <item.icon size={18} />
        <span>{item.title}</span>
      </NavLink>
    ));

  return (
    <>
      {/* Mobile Sidebar */}
      {isToogleNav && (
        <aside
          className={`space-y-2 lg:w-55 shrink-0 overflow-y-auto bg-[#FFFFFF] px-1 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-md fixed top-26.5 z-10 left-0 h-[83vh] hide_scrollbar animatefadeInLeft`}
        >
          <nav aria-label="dashboard_navbar">
            {renderMenuItems(coinMenuItems)}
          </nav>
        </aside>
      )}

      {/* Desktop Sidebar */}
      <aside className="space-y-2 lg:w-55 md:w-50 shrink-0 overflow-y-auto bg-[#FFFFFF] px-1 py-2 lg:ml-13 shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-md hidden lg:block h-[80vh] hide_scrollbar">
        <nav aria-label="dashboard_navbar">
          {renderMenuItems(coinMenuItems)}
        </nav>
      </aside>
    </>
  );
}
