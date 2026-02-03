"use client";

import {
  VscCloud,
  VscDatabase,
  VscServer,
  VscTools,
  VscGlobe,
  VscSymbolMethod,
  VscRocket,
} from "react-icons/vsc";

function Card({
  icon,
  title,
  desc,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link?: string;
}) {
  const content = (
    <div
      className="
        p-6
        rounded-xl
        border border-[#2d2d2d]
        bg-[#1b1b1b]
        hover:bg-[#222]
        transition
        cursor-pointer
      "
    >
      <div className="flex items-center gap-3 mb-3 text-cyan-400">
        {icon}
        <h3 className="text-white font-medium">{title}</h3>
      </div>

      <p className="text-sm text-[#bdbdbd] leading-relaxed">{desc}</p>
    </div>
  );

  if (!link) return content;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline"
    >
      {content}
    </a>
  );
}

export default function ProductionSystems() {
  return (
    <section className="space-y-14">
      {/* ================= PRODUCTION ================= */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
          ⚡ Production Systems
        </h2>
        <p className="text-sm text-gray-400">
          Real products. Real users. Real deployments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          icon={<VscCloud />}
          title="Clevermode SaaS Platform"
          desc="Cloud-based testing & tagging management platform with authentication, billing, device & printer integrations. Serving 200+ active users."
          link="https://www.clevermode.com.au/"
        />

        <Card
          icon={<VscDatabase />}
          title="Honeycomb Workforce System"
          desc="Full-stack workforce scheduling and automation platform with assignments, reporting, and operational analytics."
          link="https://github.com/wild-butterfly/honeycomb-dev-real"
        />
      </div>

      {/* ================= MINI BUILDS ================= */}
      <div className="text-center space-y-2 pt-6">
        <h3 className="text-xl font-semibold text-purple-300">
          ✨ Side Projects & Experiments
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card
          icon={<VscGlobe />}
          title="Cocktail Finder"
          desc="API-based app to search cocktail recipes by ingredients using vanilla JavaScript and REST APIs."
          link="https://github.com/wild-butterfly/cocktailfinder"
        />

        <Card
          icon={<VscSymbolMethod />}
          title="GossipGirl Database API"
          desc="SQL project modelling characters with custom schema, queries, and backend logic."
          link="https://github.com/wild-butterfly/gossipgirlAPI"
        />

        <Card
          icon={<VscRocket />}
          title="Askin-workspace  Portfolio"
          desc="Interactive VS Code–styled portfolio built with Next.js + Tailwind."
          link="https://github.com/wild-butterfly/askin-workspace"
        />
      </div>
    </section>
  );
}
