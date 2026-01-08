export default function DayMonth() {
  const dayMonth = ["Today", "Week", "Month", "Custom Range"];
  return (
    <div className="flex gap-2 sm:gap-4 mb-5">
      {dayMonth.map((item, index) => (
        <button
          className="py-1 px-2 sm:px-4 text-nowrap max-sm:text-sm rounded border border-[#CCCCCC] text-[#181717]"
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
