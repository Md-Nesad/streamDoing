import { Save } from "lucide-react";
import { useRef, useState } from "react";
import useJsonPost from "../../../hooks/useJsonPost";
import { BASE_URL } from "../../../utility/utility";

export default function SettingsPage() {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [platformConfig, setPlatformConfig] = useState({
    streamDoingLive: "",
    supportEmail: "",
  });

  const [userSettings, setUserSettings] = useState({
    livestreamUnlockLevel: 0,
    newUserRegistration: false,
  });

  const [currencySettings, setCurrencySettings] = useState({
    diamondToBDT: { diamonds: 0, bdt: 0 },
    beanToDiamond: { beans: 0, diamonds: 0 },
  });

  const [commissionSettings, setCommissionSettings] = useState({
    hostAgencyCommission: 0,
    masterCoinPortal: 0,
    coinAgency: 0,
  });

  const [monthlySettings, setMonthlySettings] = useState({
    monthlyDiamondReset: false,
  });
  const handleSubmit = useJsonPost(`${BASE_URL}/admin/platform-settings`);

  const handleSave = async () => {
    if (
      platformConfig.streamDoingLive === "" ||
      platformConfig.supportEmail === ""
    ) {
      return alert("Streamdoing Live and Support Email are required");
    }

    if (!inputRef.current.value.includes("@" && ".com")) {
      return alert("Please enter a valid email address.");
    }
    setLoading(true);

    const data = {
      platformConfig,
      userSettings,
      currencySettings,
      commissionSettings,
      monthlySettings,
    };

    const result = await handleSubmit(data);

    if (result?.success === false) {
      alert(result.message);
    } else {
      alert(result.message || "Saved successfully");
    }

    platformConfig.streamDoingLive = "";
    platformConfig.supportEmail = "";
    userSettings.livestreamUnlockLevel = 0;
    userSettings.newUserRegistration = false;
    currencySettings.diamondToBDT = { diamonds: 0, bdt: 0 };
    currencySettings.beanToDiamond = { beans: 0, diamonds: 0 };
    commissionSettings.hostAgencyCommission = 0;
    commissionSettings.masterCoinPortal = 0;
    commissionSettings.coinAgency = 0;
    monthlySettings.monthlyDiamondReset = false;
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen mb-10">
      {/* Platform Configuration */}
      <div className="bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06)] rounded-xl px-5 py-4 space-y-6">
        <h2 className="font-semibold text-lg">Platform Configuration</h2>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-20">
          <div className="space-y-1">
            <label className="text-sm font-medium">Streamdoing Live</label>
            <input
              className="border rounded-md w-full px-3 py-2 text-sm outline-none"
              type="text"
              value={platformConfig.streamDoingLive}
              placeholder="Streamdoing Live"
              onChange={(e) =>
                setPlatformConfig({
                  ...platformConfig,
                  streamDoingLive: e.target.value,
                })
              }
            />
          </div>

          <div className="space-y-1 sm:w-80">
            <label className="text-sm font-medium">Support Email</label>
            <input
              ref={inputRef}
              className="border rounded-md w-full px-3 py-2 text-sm outline-none"
              type="email"
              value={platformConfig.supportEmail}
              placeholder="Support Email"
              onChange={(e) =>
                setPlatformConfig({
                  ...platformConfig,
                  supportEmail: e.target.value,
                })
              }
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
              value={userSettings.livestreamUnlockLevel}
              onChange={(e) =>
                setUserSettings({
                  ...userSettings,
                  livestreamUnlockLevel: Number(e.target.value),
                })
              }
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

            <div
              onClick={() =>
                setUserSettings({
                  ...userSettings,
                  newUserRegistration: !userSettings.newUserRegistration,
                })
              }
              className={`w-10 h-3 rounded-full cursor-pointer flex items-center transition-all duration-300 ${
                userSettings.newUserRegistration ? "bg-pink-400" : "bg-pink-200"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full shadow-xl transition-all duration-300 bg-linear-to-br from-pink-600 to-pink-400 relative ${
                  userSettings.newUserRegistration
                    ? "translate-x-5"
                    : "translate-x-0"
                }`}
              ></div>
            </div>
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
              value={currencySettings.diamondToBDT.diamonds}
              onChange={(e) =>
                setCurrencySettings({
                  ...currencySettings,
                  diamondToBDT: {
                    ...currencySettings.diamondToBDT,
                    diamonds: Number(e.target.value),
                  },
                })
              }
              className="border rounded-md w-full px-3 py-2"
            />
          </div>

          <span className="text-sm w-50 font-medium sm:mt-5">diamonds =</span>

          <input
            className="border rounded-md px-3 py-2 w-full sm:mt-5"
            type="number"
            value={currencySettings.diamondToBDT.bdt}
            onChange={(e) =>
              setCurrencySettings({
                ...currencySettings,
                diamondToBDT: {
                  ...currencySettings.diamondToBDT,
                  bdt: Number(e.target.value),
                },
              })
            }
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
              className="border rounded-md w-full px-3 py-2"
              value={currencySettings.beanToDiamond.beans}
              onChange={(e) =>
                setCurrencySettings({
                  ...currencySettings,
                  beanToDiamond: {
                    ...currencySettings.beanToDiamond,
                    beans: Number(e.target.value),
                  },
                })
              }
            />
          </div>

          <span className="text-sm font-medium w-45 mt-0 sm:mt-5">Beans =</span>

          <input
            className="border rounded-md px-3 py-2 w-full mt-0.5 sm:mt-5"
            type="number"
            value={currencySettings.beanToDiamond.diamonds}
            onChange={(e) =>
              setCurrencySettings({
                ...currencySettings,
                beanToDiamond: {
                  ...currencySettings.beanToDiamond,
                  diamonds: Number(e.target.value),
                },
              })
            }
          />

          <span className="text-sm font-medium mt-0 sm:mt-5">diamond</span>
        </div>

        {/* Lower User Settings */}
        <div className="pt-4 border-t border-[#AAAAAA]">
          <h3 className="font-semibold text-md text-base">
            Commission Settings
          </h3>

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
                value={commissionSettings.hostAgencyCommission}
                onChange={(e) =>
                  setCommissionSettings({
                    ...commissionSettings,
                    hostAgencyCommission: Number(e.target.value),
                  })
                }
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
                value={commissionSettings.masterCoinPortal}
                onChange={(e) =>
                  setCommissionSettings({
                    ...commissionSettings,
                    masterCoinPortal: Number(e.target.value),
                  })
                }
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
                value={commissionSettings.coinAgency}
                onChange={(e) =>
                  setCommissionSettings({
                    ...commissionSettings,
                    coinAgency: Number(e.target.value),
                  })
                }
                className="py-1 border border-[#AAAAAA] rounded w-[60px] text-center pl-5.5"
              />
              <span className="pl-1">%</span>
            </div>
          </div>

          <div className="mt-6 flex flex-row items-center justify-between">
            <div>
              <p className="text-sm sm:text-md font-semibold">
                Monthly Diamond Reset
              </p>
              <p className="text-xs sm:text-sm text-[#181717]">
                Auto-reset host diamonds monthly
              </p>
            </div>
            <div
              onClick={() =>
                setMonthlySettings({
                  ...monthlySettings,
                  monthlyDiamondReset: !monthlySettings.monthlyDiamondReset,
                })
              }
              className={`w-10 h-3 rounded-full cursor-pointer flex items-center transition-all duration-300 ${
                monthlySettings.monthlyDiamondReset
                  ? "bg-pink-400"
                  : "bg-pink-200"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full shadow-xl transition-all duration-300 bg-linear-to-br from-pink-600 to-pink-400 relative ${
                  monthlySettings.monthlyDiamondReset
                    ? "translate-x-5"
                    : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>

          <div className="flex justify-center sm:justify-end mt-5 sm:mt-3">
            <button
              onClick={handleSave}
              className="bg-linear-to-r from-[#6DA5FF] to-[#F576D6] text-white px-5 py-1 rounded-md flex items-center gap-2 shadow-sm hover:bg-pink-600 transition text-nowrap"
            >
              <Save size={18} /> {loading ? "Saving..." : "Save All Settings"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
