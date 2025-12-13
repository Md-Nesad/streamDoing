import { LogOut, Menu, SquareMenu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

export default function AdminHeader() {
  const [isToogleNav, setIsToogleNav] = useState(false);
  return (
    <>
      <div className="w-full bg-white shadow-md border-b border-gray-100 lg:px-12 px-7 max-sm:pr-5 max-sm:pl-2 pt-10 pb-4 flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 rounded-full border lg:block hidden"
              loading="lazy"
            />
          </Link>

          <div>
            <button
              onClick={() => setIsToogleNav(!isToogleNav)}
              className="mt-2 bg-linear-to-b from-[#FF44E3] to-[#294599] p-1 rounded-md opacity-70 hidden max-lg:block mr-2"
            >
              {isToogleNav ? (
                <X size={30} className="text-white" />
              ) : (
                <Menu size={30} className="text-white" />
              )}
            </button>
          </div>

          <div>
            <h1 className="text-lg font-semibold bg-linear-to-r from-[#FF44E3] to-[#294599] text-transparent bg-clip-text">
              StreamDoing
            </h1>
            <p className="text-sm text-[#4473FF] font-semibold">Admin Panel</p>
          </div>
        </div>

        <button className="flex items-center gap-2 text-[18px] font-medium text-[#BE8283] hover:text-[#da9b9c] transition-colors duration-300">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
      {isToogleNav && (
        <Sidebar
          isToogleNav={isToogleNav}
          onClose={() => setIsToogleNav(false)}
        />
      )}
    </>
  );
}
