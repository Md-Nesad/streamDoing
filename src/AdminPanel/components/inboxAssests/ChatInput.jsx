import { Image, Paperclip, Send, Smile } from "lucide-react";

export default function ChatInput({ canReply }) {
  return (
    <div className=" p-3 sticky bottom-0 bg-white">
      {canReply ? (
        <div className="flex gap-2">
          <button className="text-[#3B82F6] border border-[#3B82F6] bg-white px-3 rounded">
            <Paperclip size={18} />
          </button>
          <button className="text-[#3B82F6] border border-[#3B82F6] bg-white px-3 rounded">
            <Image size={18} />
          </button>
          <input
            className="flex-1 border rounded px-3 py-2 text-sm"
            placeholder="Type a message..."
          />
          <button className="text-[#3B82F6] border border-[#3B82F6] bg-white px-3 rounded">
            <Smile size={18} />
          </button>
          <button className="text-white border border-[#3B82F6] bg-[#3B82F6] px-3 rounded">
            <Send size={18} />
          </button>
        </div>
      ) : (
        <button className="w-full bg-red-500 text-white py-2 rounded">
          Take Access
        </button>
      )}
    </div>
  );
}
