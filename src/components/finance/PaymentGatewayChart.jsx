import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useEffect, useLayoutEffect } from "react";

const paymentData = [
  { name: "Stripe", value: 25800 },
  { name: "PayPal", value: 19600 },
  { name: "Gpay", value: 26000 },
  { name: "Bank", value: 18000 },
];

export default function PaymentChart() {
  // 🔥 Remove TOP grid line after chart renders
  useLayoutEffect(() => {
    const hideGrids = () => {
      // Hide top horizontal grid
      const hLines = document.querySelectorAll(
        ".recharts-cartesian-grid-horizontal line"
      );
      if (hLines.length) hLines[hLines.length - 1].style.display = "none";

      // Hide right vertical grid
      const vLines = document.querySelectorAll(
        ".recharts-cartesian-grid-vertical line"
      );
      if (vLines.length) vLines[vLines.length - 1].style.display = "none";
    };

    // Run initially
    hideGrids();

    // Observe chart redraw
    const observer = new MutationObserver(() => hideGrids());

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] p-8 w-full">
        <h2 className="text-[28px] font-semibold text-[#1a1a1a]">
          Revenue vs Expenses
        </h2>

        <div className="mt-10" style={{ width: "100%", height: "300px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={paymentData}
              barCategoryGap="28%"
              margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
            >
              <CartesianGrid stroke="#e5e7eb" />

              <XAxis
                dataKey="name"
                tick={{ fill: "#6b7280", fontSize: 14 }}
                tickLine={false}
                axisLine={{ stroke: "#000", strokeWidth: 1 }}
              />

              <YAxis
                tick={{ fill: "#6b7280", fontSize: 13 }}
                axisLine={{ stroke: "#000", strokeWidth: 1 }}
                tickLine={false}
                domain={[6500, 27000]}
                ticks={[6500, 10000, 15000, 21000, 26000]} // 👈 extra grid value added
                padding={{ top: 10 }}
                tickFormatter={(val) => {
                  // Hide the 10000 label but keep grid line
                  if (val === 10000) return "";
                  return val;
                }}
              />

              <Tooltip cursor={false} />

              <Bar
                dataKey="value"
                fill="#7dd3fc"
                radius={[6, 6, 0, 0]}
                barSize={60}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
