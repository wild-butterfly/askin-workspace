"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  code: string;
  language?: string;
  filename?: string;
};

export default function CodeViewer({
  code,
  language = "markdown",
  filename = language,
}: Props) {
  return (
    <div className="rounded-lg overflow-hidden border border-[#2d2d2d] shadow-lg">
      {/* fake window header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] border-b border-[#2d2d2d]">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />

        <span className="ml-4 text-xs text-gray-400">{filename}</span>
      </div>

      <SyntaxHighlighter
        language={language}
        style={vs2015}
        customStyle={{
          margin: 0,
          background: "#1e1e1e",
          padding: "28px",
          fontSize: "14px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
