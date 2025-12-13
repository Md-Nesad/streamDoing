import { NavLink } from "react-router-dom";
import { menuItems } from "../data/data";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Sidebar({ isToogleNav, onClose }) {
  const [isToogleDataStore, setIsToogleDataStore] = useState(false);

  const handleToogle = () => {
    setIsToogleDataStore(!isToogleDataStore);
  };
  return (
    <>
      {isToogleNav ? (
        <>
          <aside
            className={`space-y-2 lg:w-55 shrink-0 overflow-y-auto bg-[#FFFFFF] px-1 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-md block lg:hidden fixed top-26.5 z-10 left-0 h-[83vh] hide_scrollbar ${
              isToogleNav ? "animatefadeInLeft" : "animatefadeOutLeft"
            }`}
          >
            <nav aria-label="dashboard_navbar" className="">
              {menuItems.slice(0, 14).map((item) => (
                <NavLink
                  onClick={onClose}
                  key={item.title}
                  to={item.link}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-3 rounded-md text-md font-medium 
              transition-all cursor-pointer hover:bg-[#EE4096] hover:text-white hover:transition-colors hover:duration-300
              ${isActive ? "text-[#EE4096] font-semibold" : "text-[#181717]"}`
                  }
                >
                  <item.icon size={18} />
                  <span>{item.title}</span>
                </NavLink>
              ))}
            </nav>

            <div
              onClick={handleToogle}
              className=" text-[#868686] text-md font-medium flex items-center justify-between mt-3 mb-3 px-2 cursor-pointer"
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

            <nav
              aria-label="data_store_navbar"
              className="space-y-2 transition-all duration-500"
            >
              {isToogleDataStore ? (
                <>
                  {menuItems.slice(14).map((item) => (
                    <NavLink
                      key={item.title}
                      to={item.link}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-md text-md font-medium 
              transition-all cursor-pointer hover:bg-[#EE4096] hover:text-white hover:transition-colors hover:duration-300
              ${isActive ? "text-[#EE4096] font-semibold" : "text-[#181717]"}`
                      }
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </NavLink>
                  ))}
                </>
              ) : (
                <>
                  {menuItems.slice(22).map((item) => (
                    <NavLink
                      key={item.title}
                      to={item.link}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-md text-md font-medium 
              transition-all cursor-pointer hover:bg-[#EE4096] hover:text-white hover:transition-colors hover:duration-300
              ${isActive ? "text-[#EE4096] font-semibold" : "text-[#181717]"}`
                      }
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </NavLink>
                  ))}
                </>
              )}
            </nav>
          </aside>
        </>
      ) : (
        <>
          <aside className="space-y-2 lg:w-55 md:w-50 shrink-0 overflow-y-auto bg-[#FFFFFF] px-1 py-2 lg:ml-13 shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-md hidden lg:block h-[80vh] hide_scrollbar">
            <nav aria-label="dashboard_navbar" className="">
              {menuItems.slice(0, 14).map((item) => (
                <NavLink
                  key={item.title}
                  to={item.link}
                  end
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-3 rounded-md text-md font-medium 
              transition-all cursor-pointer hover:bg-[#EE4096] hover:text-white hover:transition-colors hover:duration-300
              ${isActive ? "text-[#EE4096] font-semibold" : "text-[#181717]"}`
                  }
                >
                  <item.icon size={18} />
                  <span>{item.title}</span>
                </NavLink>
              ))}
            </nav>

            <div
              onClick={handleToogle}
              className=" text-[#868686] text-md font-medium flex items-center justify-between mt-3 mb-3 px-2 cursor-pointer"
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

            <nav
              aria-label="data_store_navbar"
              className="space-y-2 transition-all duration-500"
            >
              {isToogleDataStore ? (
                <>
                  {menuItems.slice(14).map((item) => (
                    <NavLink
                      key={item.title}
                      to={item.link}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-md text-md font-medium 
              transition-all cursor-pointer hover:bg-[#EE4096] hover:text-white hover:transition-colors hover:duration-300
              ${isActive ? "text-[#EE4096] font-semibold" : "text-[#181717]"}`
                      }
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </NavLink>
                  ))}
                </>
              ) : (
                <>
                  {menuItems.slice(22).map((item) => (
                    <NavLink
                      key={item.title}
                      to={item.link}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-md text-md font-medium 
              transition-all cursor-pointer hover:bg-[#EE4096] hover:text-white hover:transition-colors hover:duration-300
              ${isActive ? "text-[#EE4096] font-semibold" : "text-[#181717]"}`
                      }
                    >
                      <item.icon size={18} />
                      <span>{item.title}</span>
                    </NavLink>
                  ))}
                </>
              )}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
