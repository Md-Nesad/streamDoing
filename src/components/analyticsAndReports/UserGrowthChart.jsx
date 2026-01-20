import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "A", value: 15 },
  { name: "B", value: 15 },
  { name: "C", value: 12 },
  { name: "D", value: 45 },
  { name: "E", value: 15 },
];

const COLORS = [
  "#FF6CFD", // purple
  "#FF8A8A", // red
  "#7CFF9E", // green
  "#8EC9FF", //large
  "#1E4FFF", // blue
];

function ThisMonthChart({ month }) {
  return (
    <div className="flex flex-col items-center">
      <PieChart width={260} height={260}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={110}
          innerRadius={0}
          dataKey="value"
          stroke="none"
        >
          {data.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

      <p className="mt-2 text-lg font-medium">{month}</p>
    </div>
  );
}

export default ThisMonthChart;
