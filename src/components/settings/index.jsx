import { Save } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="w-full min-h-screen">
      {/* Platform Configuration */}
      <div className="bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06)] rounded-xl px-5 py-4 space-y-6">
        <h2 className="font-semibold text-lg">Platform Configuration</h2>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-20">
          <div className="space-y-1">
            <label className="text-sm font-medium">Streamdoing Live</label>
            <input
              className="border rounded-md w-full px-3 py-2 text-sm outline-none"
              type="text"
              defaultValue="Streamdoing Live"
            />
          </div>

          <div className="space-y-1 sm:w-80">
            <label className="text-sm font-medium">Support Email</label>
            <input
              className="border rounded-md w-full px-3 py-2 text-sm outline-none"
              type="email"
              defaultValue="support@streamkar.live"
            />
          </div>
        </div>

        {/* User Settings */}
        <div className="pt-4 border-t border-[#AAAAAA]">
          <h3 className="font-semibold text-md text-base">User Settings</h3>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-sm sm:text-md font-semibold">
                Livestream Unlock Level
              </p>
              <p className="text-xs sm:text-sm text-[#181717] max-sm:mt-1">
                Minimum level for users to go live
              </p>
            </div>
            <input
              type="number"
              defaultValue={3}
              className="px-3 py-1 border border-[#AAAAAA] rounded w-[60px] text-center pl-5"
            />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm sm:text-md font-semibold">
                New User Registration
              </p>
              <p className=" text-xs sm:text-sm text-[#181717] max-sm:mt-1">
                Allow new users to register
              </p>
            </div>

            <button
              onClick={() => setToggle(!toggle)}
              className={`w-11 h-6 flex items-center rounded-full transition px-1 ${
                toggle ? "bg-pink-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform transition ${
                  toggle ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>

      {/* Currency Settings */}
      <div className="bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06)] rounded-xl p-6 space-y-3 mt-6">
        <h2 className="font-semibold text-lg">Currency Settings</h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <div className="space-y-1 w-full">
            <label className="text-sm font-medium">
              Diamond to BDT Conversion Rate
            </label>
            <input
              type="number"
              defaultValue={100000}
              className="border rounded-md w-full px-3 py-2"
            />
          </div>

          <span className="text-sm w-50 font-medium sm:mt-5">diamonds =</span>

          <input
            className="border rounded-md px-3 py-2 w-full sm:mt-5"
            type="number"
            defaultValue={900}
          />

          <span className="text-sm font-medium sm:mt-5">BDT</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 max-sm:mt-5">
          <div className="space-y-0.5 sm:space-y-1 w-full">
            <label className="text-sm font-medium">
              Bean to Diamond Conversion Rate
            </label>
            <input
              type="number"
              defaultValue={1000}
              className="border rounded-md w-full px-3 py-2"
            />
          </div>

          <span className="text-sm font-medium w-45 mt-0 sm:mt-5">Beans =</span>

          <input
            className="border rounded-md px-3 py-2 w-full mt-0.5 sm:mt-5"
            type="number"
            defaultValue={100}
          />

          <span className="text-sm font-medium mt-0 sm:mt-5">diamond</span>
        </div>

        {/* Lower User Settings */}
        <div className="pt-4 border-t border-[#AAAAAA]">
          <h3 className="font-semibold text-md text-base">User Settings</h3>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-sm sm:text-md font-semibold">
                Host Agency Commission
              </p>
              <p className="text-xs sm:text-sm text-[#181717]">
                Percentage of host earnings
              </p>
            </div>
            <div>
              <input
                type="number"
                defaultValue={3}
                className="py-1 border border-[#AAAAAA] rounded w-[60px] text-center pl-5"
              />
              <span className="pl-1">%</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm sm:text-md font-semibold">
                Master Coin Portal
              </p>
              <p className="text-xs sm:text-sm text-[#181717]">
                Profit margin on coin sales
              </p>
            </div>
            <div>
              <input
                type="number"
                defaultValue={10}
                className=" py-1 border border-[#AAAAAA] rounded w-[60px] text-center pl-5.5"
              />
              <span className="pl-1">%</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-sm sm:text-md font-semibold">Coin Agency</p>
              <p className="text-xs sm:text-sm text-[#181717]">
                Profit margin on coin sales
              </p>
            </div>
            <div>
              <input
                type="number"
                defaultValue={10}
                className="py-1 border border-[#AAAAAA] rounded w-[60px] text-center pl-5.5"
              />
              <span className="pl-1">%</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
            <div className="max-sm:hidden">
              <p className="text-sm sm:text-md font-semibold">
                Monthly Diamond Reset
              </p>
              <p className="text-xs sm:text-sm text-[#181717]">
                Auto-reset host diamonds monthly
              </p>
            </div>
            <div className="flex justify-end">
              <button className="bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white px-5 py-1 rounded-md flex items-center gap-2 shadow-sm hover:bg-pink-600 transition text-nowrap">
                <Save size={18} /> Save All Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
