"use client";

import { usePathname, useRouter } from "next/navigation";
import { VscMarkdown, VscJson, VscTerminal, VscServer } from "react-icons/vsc";

export default function Tabs() {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    {
      name: "READaboutME.md",
      path: "/",
      icon: <VscMarkdown size={14} className="text-blue-400" />,
    },
    {
      name: "skills.json",
      path: "/skills",
      icon: <VscJson size={14} className="text-yellow-400" />,
    },
    {
      name: "experience.log",
      path: "/experience",
      icon: <VscTerminal size={14} className="text-green-400" />,
    },
    {
      name: "production.tsx",
      path: "/production",
      icon: <VscServer size={14} className="text-cyan-400" />,
    },
  ];

  return (
    <div className="flex items-end h-10 px-3 bg-[#252526] border-b border-[#2d2d2d]">
      {tabs.map((tab) => {
        const active = pathname === tab.path;

        return (
          <button
            key={tab.path}
            onClick={() => router.push(tab.path)}
            className={`
              flex items-center gap-2
              mr-1
              px-4
              h-full
              text-sm
              font-normal
              transition-colors

              outline-none focus:outline-none focus:ring-0 focus-visible:outline-none active:outline-none
              border-0

              ${
                active
                  ? "bg-[#1e1e1e] text-white"
                  : "text-[#9da1a6] hover:text-white hover:bg-[#2a2d2e]"
              }
            `}
          >
            {tab.icon}
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}
