import { Gift } from "lucide-react";

export default function AllTicketsList({ data }) {
  const tickets = data?.tickets;
  return (
    <div className="w-fullmx-auto bg-white rounded-lg p-3 sm:p-5 shadow mb-10 mt-6">
      <h2 className="text-lg font-semibold mb-4">All Tickets</h2>

      <div className="space-y-3">
        {tickets?.length > 0 ? (
          tickets?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-[#ABABAB54] rounded-lg px-3 sm:px-4 py-3"
            >
              {/* Left */}
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-11 h-11 rounded-full bg-pink-100 flex items-center justify-center">
                  <Gift className="text-pink-500" size={22} />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold text-gray-900">
                    {item.user}{" "}
                    <span className="ml-4 text-xs font-normal bg-[#FF8C8C] text-white py-0.5 px-3 rounded-full">
                      {item.gift}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    {item.to} • {item.title} • {item.time}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="text-sm sm:text-md font-semibold text-gray-900 flex gap-3">
                <button
                  type="button"
                  className="btn_white py-1 px-5 rounded-md"
                >
                  View
                </button>
                <button
                  type="button"
                  className="bg-[#3383F3] text-white py-1 px-5 rounded-md"
                >
                  Response
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="border-t border-[#DFDFDF] hover:bg-gray-50 text-md">
            <p colSpan={9} className="p-3 pt-5 text-center">
              No ticket found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
