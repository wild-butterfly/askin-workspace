"use client";

export default function Terminal() {
  return (
    <div
      className="
        h-56
        bg-[#181818]          /* VSCode panel bg */
        border-t border-[#2d2d2d]
        font-mono text-[13px]
        text-gray-300
        flex flex-col
      "
    >
      {/* HEADER (TERMINAL BAR) */}
      <div
        className="
          h-8
          px-3
          flex items-center
          text-xs
          text-[#9da1a6]
          bg-[#202020]
          border-b border-[#2d2d2d]
        "
      >
        TERMINAL
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-auto p-3 space-y-1">
        <p>
          <span className="text-green-400">PS</span> C:\Users\askin\workspace{" "}
          <span className="text-blue-400">npm run dev</span>
        </p>

        <p className="text-gray-400">✓ Starting...</p>
        <p className="text-gray-400">✓ Compiled in 35ms</p>
        <p className="text-gray-400">GET / 200 in 22ms</p>

        <p className="mt-3">
          <span className="text-green-400">&gt;</span>
        </p>
      </div>
    </div>
  );
}
