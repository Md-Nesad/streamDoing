import { LogOut, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CoinPortalSidebar from "./CoinPortalSidebar";

export default function CoinPortalHeader() {
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
      <div className="w-full bg-white shadow-md border-b border-gray-100 lg:px-12 px-7 max-sm:pr-5 max-sm:pl-2 pt-10 pb-4 flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-13 h-13 rounded-full  lg:block hidden"
              loading="lazy"
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

          <div>
            <h1 className="text-lg font-semibold bg-linear-to-r from-[#FF44E3] to-[#294599] text-transparent bg-clip-text">
              StreamDoing
            </h1>
            <p className="text-sm text-[#4473FF] font-semibold max-sm:-mt-0.5">
              Coin agency portal
            </p>
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
                navigate("/coin-portal-login");
              }}
              className="flex items-center gap-2 text-[18px] font-medium text-[#BE8283] hover:text-[#da9b9c] transition-colors duration-300"
            >
              <LogOut size={18} />
              <span>LogOut</span>
            </button>
          </>
        ) : (
          <>
            <Link to="/coin-portal-login">
              <button className="flex items-center gap-2 text-[18px] font-medium text-[#BE8283] hover:text-[#da9b9c] transition-colors duration-300">
                <LogOut size={18} />
                <span>Login</span>
              </button>
            </Link>
          </>
        )}
      </div>
      {isToogleNav && (
        <CoinPortalSidebar
          isToogleNav={isToogleNav}
          onClose={() => setIsToogleNav(false)}
        />
      )}
    </>
  );
}
