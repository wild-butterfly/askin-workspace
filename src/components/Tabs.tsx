"use client";

import { usePathname, useRouter } from "next/navigation";
import { VscMarkdown, VscJson, VscTerminal } from "react-icons/vsc";

export default function Tabs() {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    {
      name: "README.md",
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
  ];

  return (
    <div
      className="
        flex items-end
        h-10
        px-3
        bg-[#252526]
        border-b border-[#2d2d2d]
      "
    >
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
              transition-all

              ${
                active
                  ? `
                    bg-[#1e1e1e]
                    text-white
                    border-t-2 border-[#3a3d41]
                    rounded-t-sm
                    mb-[-1px]
                  `
                  : `
                    text-[#9da1a6]
                    hover:text-white
                    hover:bg-[#2a2d2e]
                  `
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
