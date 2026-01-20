import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";

export default function UserGrowthTrend() {
  const chartData = [
    { name: "Jan", revenue: 1000 },
    { name: "Feb", revenue: 6000 },
    { name: "Mar", revenue: 12000 },
    { name: "Apr", revenue: 11000 },
    { name: "May", revenue: 10000 },
    { name: "Jun", revenue: 13000 },
    { name: "Jul", revenue: 18000 },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: 400,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        borderRadius: 10,
        padding: 20,
        marginBottom: 25,
      }}
    >
      <h2 className="text-xl mb-3 font-semibold text-[#1a1a1a]">
        User Growth Trend
      </h2>

      <LineChart
        data={chartData}
        margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
        width="100%"
        height={300}
        responsive
      >
        {/* Extra top space line manually */}
        <ReferenceLine y={20000} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine y={16000} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine y={12000} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine y={8000} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine y={4000} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x="Aug" stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x="Jan" stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x="Feb" stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x={"Mar"} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x={"Apr"} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x={"May"} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x={"Jun"} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x={"Jul"} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x={"Sep"} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x={"Oct"} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x={"Nov"} stroke="#e5e7eb" strokeDasharray="0" />
        <ReferenceLine x={"Dec"} stroke="#e5e7eb" strokeDasharray="0" />

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
          domain={[0, 21000]}
          ticks={[0, 4000, 8000, 12000, 16000, 20000]}
          axisLine={{ stroke: "#000", strokeWidth: 1 }}
          tickLine={false}
        />

        {/* Hover tooltip */}
        <Tooltip cursor={false} contentStyle={{ borderRadius: "5px" }} />

        {/* Smooth line */}
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#22c55e"
          strokeWidth={2}
          dot={{ r: 3, fill: "white", stroke: "#22c55e", strokeWidth: 2 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </div>
  );
}
