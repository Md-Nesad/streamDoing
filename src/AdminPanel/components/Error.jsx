import { AlertTriangle } from "lucide-react";

export default function Error({ error }) {
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center min-h-[62vh]">
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="w-9 h-9 text-red-500" />
        </div>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-red-600">
          Oops! Something went wrong
        </h2>

        {/* Message */}
        <p className="mt-2 text-gray-600 max-w-md">
          {error === "Request failed (403)"
            ? "You are not authorized to access this page. Please login."
            : error}
        </p>
      </div>
    </div>
  );
}
