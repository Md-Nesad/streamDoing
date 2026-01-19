export default function TopPerformanceLoading({ length }) {
  return (
    <div className="bg-white p-3 sm:p-6 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-gray-200 mt-5">
      {/* <h2 className="text-xl font-semibold mb-5">Top Performing Agency</h2> */}

      <div className="space-y-4">
        {[...Array(Number(length))]?.map((_, index) => (
          <div
            key={index}
            className="flex flex-col max-sm:gap-5 sm:flex-row sm:items-center sm:justify-between bg-[#F1F3F6] rounded-xl px-3 sm:px-5 py-4 border border-gray-200 animate-pulse"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-300" />

              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-300 rounded" />
                <div className="h-3 w-20 bg-gray-300 rounded" />
              </div>
            </div>

            {/* Right */}
            <div className="flex gap-3 sm:gap-10">
              <div className="h-4 w-20 bg-gray-300 rounded mt-1" />

              <div className="space-y-2">
                <div className="h-3 w-16 bg-gray-300 rounded" />
                <div className="h-4 w-14 bg-gray-300 rounded" />
              </div>

              <div className="space-y-2">
                <div className="h-3 w-16 bg-gray-300 rounded" />
                <div className="h-4 w-14 bg-gray-300 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
