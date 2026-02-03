"use client";

import {
  VscCloud,
  VscDatabase,
  VscGlobe,
  VscSymbolMethod,
  VscRocket,
} from "react-icons/vsc";

function Badge({ type }: { type: "live" | "github" }) {
  const styles =
    type === "live"
      ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
      : "bg-gray-500/10 text-gray-300 border-gray-600/40";

  return (
    <span className={`ml-auto text-xs px-2 py-0.5 rounded border ${styles}`}>
      {type === "live" ? "LIVE" : "GITHUB"}
    </span>
  );
}

function Card({
  icon,
  title,
  desc,
  link,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  link?: string;
  badge?: "live" | "github";
}) {
  const content = (
    <div
      className="
        p-6
        rounded-xl
        border border-[#2d2d2d]
        bg-[#1b1b1b]
        hover:bg-[#222]
        hover:border-[#3a3a3a]
        transition
        cursor-pointer
      "
    >
      <div className="flex items-center gap-3 mb-3 text-cyan-400">
        {icon}
        <h3 className="text-white font-medium">{title}</h3>

        {badge && <Badge type={badge} />}
      </div>

      <p className="text-sm text-[#bdbdbd] leading-relaxed">{desc}</p>
    </div>
  );

  if (!link) return content;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  );
}

export default function ProductionSystems() {
  return (
    <section className="space-y-14">
      {/* ===== Production ===== */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-semibold text-white">
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
          desc="Cloud-based testing & tagging management platform with authentication, billing and printer/device integrations. Serving 200+ users."
          link="https://www.clevermode.com.au/"
          badge="live"
        />

        <Card
          icon={<VscDatabase />}
          title="Honeycomb Workforce System"
          desc="Full-stack workforce scheduling and automation platform with assignments, reporting and operational analytics."
          link="https://github.com/wild-butterfly/honeycomb-dev-real"
          badge="github"
        />
      </div>

      {/* ===== Side ===== */}
      <div className="text-center pt-6">
        <h3 className="text-lg text-gray-400">Side Projects</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card
          icon={<VscGlobe />}
          title="Cocktail Finder"
          desc="Recipe search app using public APIs."
          link="https://github.com/wild-butterfly/cocktailfinder"
          badge="github"
        />

        <Card
          icon={<VscSymbolMethod />}
          title="GossipGirl API"
          desc="SQL schema + backend API practice project."
          link="https://github.com/wild-butterfly/gossipgirlAPI"
          badge="github"
        />

        <Card
          icon={<VscRocket />}
          title="Askin Workspace"
          desc="VS Code themed portfolio built with Next.js."
          link="https://github.com/wild-butterfly/askin-workspace"
          badge="github"
        />
      </div>
    </section>
  );
}
