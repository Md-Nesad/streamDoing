import { ChevronLeft, Search } from "lucide-react";

export default function InBoxSidebar({
  users,
  selectedUser,
  onSelect,
  onClose,
}) {
  return (
    <div className="py-4 px-3 h-full">
      <div className="flex items-start">
        <ChevronLeft size={23} className="mt-0.5" />
        <h2 className="font-bold text-xl mb-2 hidden lg:block pl-1">Inbox</h2>
      </div>
      <div className="flex justify-between items-center mb-4 lg:hidden">
        <h2 className="font-semibold text-lg">Inbox</h2>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="relative">
        <input
          className="w-full border border-[#008CFF8A] rounded-md px-3 py-2 mb-4 text-sm pl-10"
          placeholder="Search . . ."
          type="text"
        />
        <Search size={16} className="absolute top-3 left-3 text-[#008CFF8A]" />
      </div>

      {users?.length > 0 ? (
        users?.map((user, index) => (
          <div
            key={index}
            onClick={() => onSelect(user)}
            className={`p-3 rounded cursor-pointer mb-2 border-b border-[#62626211]
          ${
            selectedUser.id === user.id ? "bg-[#2B2B2B0F]" : "hover:bg-gray-50"
          }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 ">
                <div className="bg-[#9F9F9F] w-10 h-10 flex justify-center items-center rounded-full text-white font-semibold">
                  JD
                </div>
                <div>
                  <p className="font-medium text-[#181717] text-sm">
                    {user.name}
                  </p>
                  <p className="text-xs text-[#181717] font-medium">
                    {user.issue}
                  </p>
                </div>
              </div>

              <div className="flex-col justify-center items-center">
                <time className="text-[11px] block mb-1">10:00 AM</time>
                <div className="bg-[#42AAFF] mx-auto w-4 h-4 flex justify-center items-center rounded-full text-white text-[8px]">
                  3
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-md mt-4">No conversation Found.</p>
      )}
    </div>
  );
}
