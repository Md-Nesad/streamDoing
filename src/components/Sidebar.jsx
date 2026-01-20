import { NavLink, useLocation } from "react-router-dom";
import { menuItems } from "../data/data";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Sidebar({ isToogleNav, onClose }) {
  const [isToogleDataStore, setIsToogleDataStore] = useState(false);
  const location = useLocation();

  const handleToogle = () => {
    setIsToogleDataStore(!isToogleDataStore);
  };

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
            {renderMenuItems(menuItems.slice(0, 18))}
          </nav>

          <div
            onClick={handleToogle}
            className="flex items-center justify-between mt-3 mb-3 px-2 cursor-pointer text-[#868686] font-medium text-md"
          >
            <span>Data Store</span>
            <span
              className={`text-[#404040] text-xl transition-transform duration-300 ${
                isToogleDataStore ? "rotate-90" : ""
              }`}
            >
              <ChevronRight size={20} />
            </span>
          </div>

          <nav className="space-y-2 transition-all duration-500">
            {isToogleDataStore && renderMenuItems(menuItems.slice(18))}
          </nav>
        </aside>
      )}

      {/* Desktop Sidebar */}
      <aside className="space-y-2 lg:w-55 md:w-50 shrink-0 overflow-y-auto bg-[#FFFFFF] px-1 py-2 lg:ml-13 shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-md hidden lg:block h-[80vh] hide_scrollbar">
        <nav aria-label="dashboard_navbar">
          {renderMenuItems(menuItems.slice(0, 18))}
        </nav>

        <div
          onClick={handleToogle}
          className="flex items-center justify-between mt-3 mb-3 px-2 cursor-pointer text-[#868686] font-medium text-md"
        >
          <span>Data Store</span>
          <span
            className={`text-[#404040] text-xl transition-transform duration-300 ${
              isToogleDataStore ? "rotate-90" : ""
            }`}
          >
            <ChevronRight size={20} />
          </span>
        </div>

        <nav className="space-y-2 transition-all duration-500">
          {isToogleDataStore && renderMenuItems(menuItems.slice(18))}
        </nav>
      </aside>
    </>
  );
}
