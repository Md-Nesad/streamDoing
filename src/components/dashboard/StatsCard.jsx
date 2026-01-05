export default function StatsSection({ data }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 ${
        data?.length === 3 ? "lg:grid-cols-3" : "xl:grid-cols-4"
      } gap-5`}
    >
      {data?.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-[0_2px_6px_rgba(0,0,0,0.06)] rounded-md px-5 py-4 flex items-start justify-between border border-gray-100"
        >
          <div className="space-y-1">
            <p className="text-[#181717] font-medium text-md">{item.title}</p>
            <h2 className="text-2xl text-[#181717] font-bold">{item.value}</h2>
            {item.change && (
              <p className="text-green-600 text-sm">{item.change}</p>
            )}
          </div>

          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center opacity-45 ${item.iconBg}`}
          >
            <span className="text-xl text-white">
              <item.icon size={20} strokeWidth={2} />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
