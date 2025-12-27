import { Users, Clock, Gift } from "lucide-react";

export default function MetricsCard({ data }) {
  const metrics = data?.data;
  return (
    <div className="w-full bg-white p-3 sm:p-6 pb-10 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-100 my-5">
      <h3 className="mt-1 mb-5 font-semibold text-[#181717] text-xl">
        User Engagement Metrics
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="flex items-center gap-6 bg-[#CBB1FF1C] p-5 rounded-xl shadow-sm">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-t from-[#409DEE] to-[#852588] opacity-50">
            <Users className="text-white" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Daily Active Users</p>
            <h3 className="text-xl font-semibold text-[#837DFF]">
              {metrics?.dailyActiveUsers}
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-center gap-6 bg-[#CBB1FF1C] p-5 rounded-xl shadow-sm">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-t from-[#409DEE] to-[#257B88] opacity-50">
            <Clock className="text-white" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Avg. Session Duration</p>
            <h3 className="text-xl font-semibold text-[#837DFF]">
              {metrics?.avgDuration}
            </h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center gap-6 bg-[#CBB1FF1C] p-5 rounded-xl shadow-sm">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-t from-[#EE40E8] to-[#88256C] opacity-50">
            <Gift className="text-white" size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Gift Interactions</p>
            <h3 className="text-xl font-semibold text-[#EE4096]">
              {metrics?.totalGifts}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
