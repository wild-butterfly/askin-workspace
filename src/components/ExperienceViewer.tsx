"use client";

type Props = {
  code: string;
  filename?: string;
};

export default function ExperienceViewer({
  code,
  filename = "experience.log",
}: Props) {
  const tagColors: Record<string, string> = {
    INIT: "#abb2bf",
    DEBUG: "#e06c75",
    LEARN: "#e5c07b",
    FIELD: "#98c379",
    CLIENT: "#61afef",
    OPS: "#c678dd",
    BUILD: "#d19a66",
    API: "#56b6c2",
    PAY: "#98c379",
    DEPLOY: "#61afef",
    SCALE: "#c678dd",
    OPTIMISE: "#e5c07b",
    PARALLEL: "#56b6c2",
    STACK: "#61afef",
    STATUS: "#98c379",
  };

  function paintTag(tag: string) {
    return {
      color: tagColors[tag] ?? "#9cdcfe",
      fontWeight: 600 as const,
    };
  }

  const lines = code.split(/\r?\n/);

  return (
    <div className="rounded-lg overflow-hidden border border-[#2d2d2d] shadow-lg">
      {/* header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] border-b border-[#2d2d2d]">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-500" />

        {/* ✅ dynamic filename */}
        <span className="ml-4 text-xs text-gray-400">{filename}</span>
      </div>

      <pre
        style={{
          margin: 0,
          background: "#1e1e1e",
          padding: "28px",
          fontSize: "14px",
          lineHeight: "1.7",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace',
          color: "#d4d4d4",
          whiteSpace: "pre-wrap",
        }}
      >
        {lines.map((line, i) => {
          const tagMatch = line.match(/^\[([A-Z]+)\]\s?(.*)$/);

          if (tagMatch) {
            const tag = tagMatch[1];
            const rest = tagMatch[2];

            return (
              <div key={i}>
                <span style={paintTag(tag)}>[{tag}]</span> {rest}
              </div>
            );
          }

          return <div key={i}>{line || "\u00A0"}</div>;
        })}
      </pre>
    </div>
  );
}
