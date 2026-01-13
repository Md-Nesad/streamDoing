export default function ChatMessages({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto hide_scrollbar px-3 py-4 space-y-3">
      {messages?.length > 0 ? (
        messages?.map((msg, index) => (
          <div
            key={index}
            className={` flex ${
              msg.from === "user" ? "justify-start" : "justify-end"
            }`}
          >
            {msg.from === "user" ? (
              <div>
                <div className="flex items-center gap-3 mb-3 relative">
                  <div className="w-10 h-10 rounded-full bg-linear-to-l from-[#38B0F7] to-[#3B82F6] text-white flex justify-center items-center">
                    JD
                  </div>
                  <p className="border border-[#38B0F6] text-sm text-[#5788D8FC] py-2 px-3 rounded">
                    {msg.text}
                  </p>
                  <small className="absolute top-11 left-13 text-[10px] text-[#0FA2E9]">
                    10:00 AM
                  </small>
                </div>
              </div>
            ) : (
              <div className="relative">
                <p className="border bg-linear-to-r from-[#3B82F6] text-sm to-[#8CB5FF] text-white py-2 px-3 rounded">
                  {msg.text}
                </p>
                <small className="absolute top-11 left-0 text-[10px] text-[#0FA2E9]">
                  10:00 AM
                </small>
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-full">
          No Messages
        </div>
      )}
    </div>
  );
}
