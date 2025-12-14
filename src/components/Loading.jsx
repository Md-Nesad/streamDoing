import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* Spinner */}
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-6 border-transparent border-t-[#6DA5FF] border-r-[#F576D6] animate-spin"></div>
        <div className="absolute inset-2 rounded-full bg-white"></div>
      </div>

      {/* Text */}
      <p className="mt-4 text-lg font-semibold bg-linear-to-r from-[#6DA5FF] to-[#F576D6] bg-clip-text text-transparent">
        Loading...
      </p>
    </div>
  );
}
