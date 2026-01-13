export default function ChatHeader({
  user,
  accessStatus,
  onMenu,
  onDetails,
  onTakeAccess,
  onLeaveAccess,
}) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-[#E8E9EB]">
      <div className="flex items-center gap-2">
        <button onClick={onMenu} className="lg:hidden">
          ☰
        </button>
        <div className="flex items-center gap-3">
          <div className="bg-[#9F9F9F] w-10 h-10 flex justify-center items-center rounded-full text-white font-semibold">
            JD
          </div>
          <div>
            <p className="font-semibold text-sm">{user?.name}</p>
            <p className="text-xs text-[#3E78ED]">
              {user ? (
                `UID-${user?.id} • ${user?.issue}`
              ) : (
                <span className="text-gray-800 text-[15px]">
                  No User Selected
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={onDetails} className="lg:hidden text-sm text-blue-500">
          Info
        </button>

        {accessStatus === "TAKEN" ? (
          <button
            onClick={onLeaveAccess}
            className="bg-red-500 text-white font-medium px-3 py-2 rounded-md text-xs"
          >
            Leave Access
          </button>
        ) : (
          <button
            onClick={onTakeAccess}
            className="bg-red-500 text-white font-medium px-3 py-2 rounded-md text-xs"
          >
            Take Access
          </button>
        )}
      </div>
    </div>
  );
}
