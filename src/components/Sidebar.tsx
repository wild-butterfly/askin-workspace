"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  VscMarkdown,
  VscJson,
  VscTerminal,
  VscSymbolFile,
  VscServer,
} from "react-icons/vsc";

const files = [
  {
    name: "READaboutME.md",
    path: "/",
    icon: <VscMarkdown className="text-[#519aba]" />,
  },
  {
    name: "skills.json",
    path: "/skills",
    icon: <VscJson className="text-[#d7ba7d]" />,
  },
  {
    name: "experience.log",
    path: "/experience",
    icon: <VscTerminal className="text-[#6a9955]" />,
  },

  {
    name: "production.tsx",
    path: "/production",
    icon: <VscServer className="text-cyan-400" />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        w-60
        bg-[#181818]
        border-r border-[#2d2d2d]
        text-[#c5c5c5]
        font-mono text-sm
        select-none
      "
    >
      {/* HEADER */}
      <div className="px-4 py-3 text-xs text-[#9da1a6] tracking-widest border-b border-[#2d2d2d]">
        EXPLORER
      </div>

      {/* FILES */}
      <div className="p-2 space-y-1">
        {files.map((file) => {
          const active = pathname === file.path;

          return (
            <Link
              key={file.path}
              href={file.path}
              className={`
                flex items-center gap-2
                px-3 py-1.5
                rounded
                transition-all duration-150

                ${
                  active
                    ? "bg-[#2a2d2e] text-white border-l-2 border-[#4FC1FF]"
                    : "hover:bg-[#232323] hover:text-white"
                }
              `}
            >
              {file.icon}
              <span>{file.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
