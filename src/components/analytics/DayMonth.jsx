import React from "react";

export default function DayMonth() {
  const dayMonth = ["Today", "Week", "Month", "Custom Range"];
  return (
    <div className="flex gap-4 mb-5">
      {dayMonth.map((item, index) => (
        <button
          className="py-1 px-4 rounded border border-[#CCCCCC] text-[#181717]"
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
