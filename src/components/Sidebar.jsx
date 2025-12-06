import { NavLink } from "react-router-dom";
import { menuItems } from "../data/data";

export default function Sidebar() {
  return (
    <>
      <nav className="space-y-2">
        {menuItems.map((item) => (
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

      <div className=" text-[#868686] text-md font-medium flex items-center justify-between mt-10 mb-2 px-2 cursor-pointer">
        <span>Data Store</span>
        <span className="text-[#404040] text-xl">{">"}</span>
      </div>
    </>
  );
}
