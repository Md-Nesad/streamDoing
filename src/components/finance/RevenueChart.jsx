import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
} from "recharts";

const data = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 1000 },
  { name: "Mar", value: 3200 },
  { name: "Apr", value: 3600 },
  { name: "May", value: 3500 },
  { name: "Jun", value: 4000 },
  { name: "Aug", value: 7200 },
];

export default function RevenueChart() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-8 w-full">
        <h2 className="text-[28px] font-semibold text-[#1a1a1a]">
          Revenue vs Expenses
        </h2>

        <div className="mt-10 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 10, left: -15, bottom: 5 }}
            >
              {/* Grid */}
              {/* Extra top space line manually */}
              <ReferenceLine y={8000} stroke="#e5e7eb" strokeDasharray="0" />

              <ReferenceLine y={6000} stroke="#e5e7eb" strokeDasharray="0" />

              <ReferenceLine y={4000} stroke="#e5e7eb" strokeDasharray="0" />

              <ReferenceLine y={2000} stroke="#e5e7eb" strokeDasharray="0" />

              <ReferenceLine x="Aug" stroke="#e5e7eb" strokeDasharray="0" />

              <ReferenceLine x="Feb" stroke="#e5e7eb" strokeDasharray="0" />

              <ReferenceLine x={"Mar"} stroke="#e5e7eb" strokeDasharray="0" />

              <ReferenceLine x={"Apr"} stroke="#e5e7eb" strokeDasharray="0" />

              <ReferenceLine x={"May"} stroke="#e5e7eb" strokeDasharray="0" />

              <ReferenceLine x={"Jun"} stroke="#e5e7eb" strokeDasharray="0" />

              {/* X Axis */}
              <XAxis
                dataKey="name"
                tick={{ fill: "#6b7280", fontSize: 14, dy: 8 }}
                axisLine={{ stroke: "#000", strokeWidth: 1 }}
                tickLine={false}
                type="category"
                padding={{ left: 0, right: 30 }}
              />

              {/* Y Axis */}
              <YAxis
                tick={{ fill: "#6b7280", fontSize: 13 }}
                domain={[0, 9000]}
                ticks={[0, 2000, 4000, 6000, 8000]}
                axisLine={{ stroke: "#000", strokeWidth: 1 }}
                tickLine={false}
              />

              {/* Hover tooltip */}
              <Tooltip cursor={false} contentStyle={{ borderRadius: "5px" }} />

              {/* Smooth line */}
              <Line
                type="monotone"
                dataKey="value"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ r: 3, fill: "white", strokeWidth: 2, stroke: "#22c55e" }}
                activeDot={{ r: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
