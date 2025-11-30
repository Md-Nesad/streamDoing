import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <header className="w-full bg-white shadow-md border-b border-gray-100 sm:px-10 px-5 pt-10 pb-4 flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        <Link to="/">
          <img
            src="./logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-full border"
          />
        </Link>
        <div>
          <h1 className="text-lg font-semibold bg-linear-to-r from-[#FF44E3] to-[#294599] text-transparent bg-clip-text">
            StreamDoing
          </h1>
          <p className="text-sm text-[#4473FF] font-semibold">Admin Panel</p>
        </div>
      </div>

      <button className="flex items-center gap-2 text-[#BE8283]">
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </header>
  );
}
