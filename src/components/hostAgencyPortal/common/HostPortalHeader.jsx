import { LogOut, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HostPortalSidebar from "./HostPortalSidebar";
import useFetch from "../../../hooks/useFetch";
import { BASE_URL } from "../../../utility/utility";

export default function HostPortalHeader() {
  const [isToogleNav, setIsToogleNav] = useState(false);
  const [isToekn, setIsToken] = useState(false);
  const navigate = useNavigate();
  const { data } = useFetch(`${BASE_URL}/agency/profile`);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    if (token) {
      setIsToken(true);
    }
  }, []);

  return (
    <>
      <div className="w-full bg-white shadow-md border-b border-gray-100 lg:px-12 px-7 max-sm:pr-2 max-sm:pl-1.5 pt-7 pb-4 flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-16 h-16 rounded-full object-contain shrink-0 lg:block hidden"
            />
          </Link>

          <div>
            <button
              onClick={() => setIsToogleNav(!isToogleNav)}
              className="mt-2 bg-linear-to-b from-[#FF44E3] to-[#294599] p-1 rounded-md opacity-70 hidden max-lg:block mr-1"
            >
              {isToogleNav ? (
                <X size={32} className="text-white" />
              ) : (
                <Menu size={32} className="text-white" />
              )}
            </button>
          </div>

          <div className="leading-0.5">
            <h1 className="text-lg font-semibold bg-linear-to-r from-[#FF44E3] to-[#294599] text-transparent bg-clip-text">
              StreamDoing
            </h1>

            <p className="text-sm text-[#4473FF] font-semibold">
              Host agency Dashboard
            </p>

            <small className="text-xs text-[#181717]">
              Agency ID: {data?.agency?.displayId}
            </small>
          </div>
        </div>
        {isToekn ? (
          <>
            <button
              onClick={() => {
                const confirm = window.confirm("Are you sure to logout?");
                if (!confirm) return;
                localStorage.removeItem("admin_token");
                setIsToken(false);
                navigate("/host-portal-login");
              }}
              className="flex items-center gap-2 text-[18px] font-medium text-[#BE8283] hover:text-[#da9b9c] transition-colors duration-300"
            >
              <LogOut size={18} />
              <span>LogOut</span>
            </button>
          </>
        ) : (
          <>
            <Link to="/host-portal-login">
              <button className="flex items-center gap-2 text-[18px] font-medium text-[#BE8283] hover:text-[#da9b9c] transition-colors duration-300">
                <LogOut size={18} />
                <span>Login</span>
              </button>
            </Link>
          </>
        )}
      </div>
      {isToogleNav && (
        <HostPortalSidebar
          isToogleNav={isToogleNav}
          onClose={() => setIsToogleNav(false)}
        />
      )}
    </>
  );
}
