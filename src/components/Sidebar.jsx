import { NavLink } from "react-router-dom";
import { menuItems } from "../data/data";

export default function Sidebar() {
  return (
    <aside className="w-50 bg-[#FFFFFF] mb-3 px-1 py-2 ml-10 shadow-[0_0_5px_1px_rgba(0,0,0,0.15)] rounded-md max-sm:hidden">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium 
              transition-all cursor-pointer
              ${isActive ? "text-[#EE4096] font-semibold" : "text-[#181717]"}`
            }
          >
            <item.icon size={18} />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className=" text-[#868686] text-md font-medium flex items-center justify-between mt-5 mb-2 px-2 cursor-pointer">
        <span>Data Store</span>
        <span className="text-[#404040] text-xl">{">"}</span>
      </div>
    </aside>
  );
}
