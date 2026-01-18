import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SupportPortalSidebar from "./SupportPortalSidebar";

export default function SupportPortalHeader() {
  const [isToogleNav, setIsToogleNav] = useState(false);
  const [isToekn, setIsToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    if (token) {
      setIsToken(true);
    }
  }, []);

  return (
    <>
      <div className="w-full bg-white shadow-md border-b border-gray-100 lg:px-12 px-7 max-sm:pr-5 max-sm:pl-2 pt-7 pb-4 flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-16 h-16 rounded-full object-contain shrink-0 lg:block hidden"
            />
          </Link>

          <div className="leading-0.5">
            <h1 className="text-lg font-semibold bg-linear-to-r from-[#FF44E3] to-[#294599] text-transparent bg-clip-text">
              StreamDoing
            </h1>

            <p className="text-sm text-[#4473FF] font-semibold">
              Support agency portal
            </p>

            <small className="text-xs text-[#181717]">Agency ID: 011</small>
          </div>
        </div>
        {isToekn ? (
          <>
            <button
              onClick={() => {
                localStorage.removeItem("admin_token");
                alert("Logout Successfully");
                setIsToken(false);
                navigate("/support-dashboard-login");
              }}
              className="flex items-center gap-2 text-[18px] font-medium text-[#BE8283] hover:text-[#da9b9c] transition-colors duration-300"
            >
              <LogOut size={18} />
              <span>LogOut</span>
            </button>
          </>
        ) : (
          <>
            <Link to="/support-dashboard-login">
              <button className="flex items-center gap-2 text-[18px] font-medium text-[#BE8283] hover:text-[#da9b9c] transition-colors duration-300">
                <LogOut size={18} />
                <span>Login</span>
              </button>
            </Link>
          </>
        )}
      </div>
      {isToogleNav && (
        <SupportPortalSidebar
          isToogleNav={isToogleNav}
          onClose={() => setIsToogleNav(false)}
        />
      )}
    </>
  );
}
