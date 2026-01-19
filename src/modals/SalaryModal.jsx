import { useState } from "react";
import useJsonPost from "../hooks/useJsonPost";
import { BASE_URL } from "../utility/utility";
import { toast } from "react-toastify";

const SalaryModal = ({ onClose }) => {
  const [targetCoin, setTargetCoin] = useState("");
  const [targetDiamond, setTargetDiamond] = useState("");
  const [basicSalary, setBasicSalary] = useState("");
  const [totalSalary, setTotalSalary] = useState("");
  const [agencyShare, setAgencyShare] = useState("");
  const [durationDays, setDurationDays] = useState("");
  const [dailyLiveHour, setDailyLiveHour] = useState("");
  const [frequency, setFrequency] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = useJsonPost(`${BASE_URL}/admin/salary-targets`);

  const handleClose = () => {
    setTargetCoin("");
    setTargetDiamond("");
    setBasicSalary("");
    setTotalSalary("");
    setAgencyShare("");
    setDurationDays("");
    setDailyLiveHour("");
    setFrequency("");
  };

  const handleCreate = async () => {
    try {
      if (
        !targetCoin ||
        !targetDiamond ||
        !basicSalary ||
        !totalSalary ||
        !agencyShare ||
        !durationDays ||
        !dailyLiveHour ||
        !frequency
      ) {
        return toast.error("Please fill all the fields.");
      }
      setLoading(true);
      await handleSubmit({
        targetCoin,
        targetDiamond,
        basicSalary,
        totalSalary,
        agencyShare,
        durationDays,
        dailyLiveHour,
        frequency,
      });
      toast.success("Salary target created.");
      handleClose();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 max-sm:px-3 ">
      <div className="bg-white rounded-xl p-4 sm:p-6 w-[600px] shadow-lg animate animatefadeIn">
        <h2 className="text-lg font-semibold mb-6">Create New Salary Target</h2>

        <div className="grid sm:grid-cols-2 gap-3">
          {/* Target Coin */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Target Coin :
            </label>
            <input
              type="number"
              placeholder="1000"
              value={targetCoin}
              onChange={(e) => setTargetCoin(e.target.value)}
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Diamond */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Diamond :
            </label>
            <input
              type="number"
              placeholder="5000"
              value={targetDiamond}
              onChange={(e) => setTargetDiamond(e.target.value)}
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Salary */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Salary :
            </label>
            <input
              type="number"
              placeholder="5000"
              value={basicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Total Salary */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Total Salary :
            </label>
            <input
              type="number"
              placeholder="5000"
              value={totalSalary}
              onChange={(e) => setTotalSalary(e.target.value)}
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Agency Share */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">
              Agancy Share:
            </label>
            <input
              type="number"
              placeholder="5000"
              value={agencyShare}
              onChange={(e) => setAgencyShare(e.target.value)}
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Day */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Day :</label>
            <input
              type="number"
              placeholder="30 days"
              value={durationDays}
              onChange={(e) => setDurationDays(e.target.value)}
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          {/* Time */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">Time :</label>
            <input
              type="number"
              placeholder="12 hour"
              value={dailyLiveHour}
              onChange={(e) => setDailyLiveHour(e.target.value)}
              className="border rounded-md px-3 py-2 w-32 text-sm"
            />
          </div>

          <div className="flex gap-4 text-base text-gray-700">
            {/* Monthly */}
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input
                type="radio"
                name="frequency"
                value="monthly"
                checked={frequency === "monthly"}
                onChange={(e) => setFrequency(e.target.value)}
                className="hidden"
              />
              <span className="w-4 h-4 rounded-full border-2 border-gray-700 flex items-center justify-center">
                {frequency === "monthly" && (
                  <span className="w-2 h-2 bg-gray-500 rounded-full" />
                )}
              </span>
              Monthly
            </label>

            {/* Weekly */}
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input
                type="radio"
                name="frequency"
                value="weekly"
                checked={frequency === "weekly"}
                onChange={(e) => setFrequency(e.target.value)}
                className="hidden"
              />
              <span className="w-4 h-4 rounded-full border-2 border-gray-700 flex items-center justify-center">
                {frequency === "weekly" && (
                  <span className="w-2 h-2 bg-gray-500 rounded-full" />
                )}
              </span>
              Weekly
            </label>

            {/* Yearly */}
            <label className="flex items-center gap-2 cursor-pointer text-gray-700">
              <input
                type="radio"
                name="frequency"
                value="yearly"
                checked={frequency === "yearly"}
                onChange={(e) => setFrequency(e.target.value)}
                className="hidden"
              />
              <span className="w-4 h-4 rounded-full border-2 border-gray-700 flex items-center justify-center">
                {frequency === "yearly" && (
                  <span className="w-2 h-2 bg-gray-500 rounded-full" />
                )}
              </span>
              Yearly
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-center sm:justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-1 btn_white"
          >
            Cancel
          </button>

          <button onClick={handleCreate} className="px-10 py-1 btn_gradient">
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalaryModal;
