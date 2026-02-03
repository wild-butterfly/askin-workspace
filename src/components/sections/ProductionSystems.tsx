"use client";

import { Wrench, Cloud, Database, Zap } from "lucide-react";

export default function ProductionSystems() {
  return (
    <section className="py-24">
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2
          className="
            text-4xl font-bold
            bg-linear-to-r from-cyan-400 to-purple-500
            bg-clip-text text-transparent
          "
        >
          ⚡ Production Systems
        </h2>

        <p className="text-gray-400 mt-3 text-sm">
          Real products. Real users. Real deployments.
        </p>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCard
          icon={<Cloud size={20} />}
          title="Clevermode SaaS Platform"
          desc="Cloud-based testing & tagging management platform with authentication, billing, device & printer integrations. Serving 200+ active users."
        />

        <ProjectCard
          icon={<Database size={20} />}
          title="Honeycomb Workforce System"
          desc="Full-stack workforce scheduling and automation platform with assignments, reporting, and operational analytics."
        />

        <ProjectCard
          icon={<Zap size={20} />}
          title="AWS Infrastructure"
          desc="Deployed on EC2, S3, CloudFront & Route 53 with secure production hosting, CI/CD and scalable architecture."
        />

        <ProjectCard
          icon={<Wrench size={20} />}
          title="Full Stack Engineering"
          desc="React, TypeScript, Node.js, PostgreSQL & Firebase stack delivering end-to-end features from database to UI."
        />
      </div>
    </section>
  );
}

/* ========================= */
/*  CARD COMPONENT */
/* ========================= */

function ProjectCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        group
        p-6
        rounded-xl
        bg-[#1b1b1b]
        border border-[#2d2d2d]

        transition-all duration-300

        hover:border-cyan-400/40
        hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
        hover:-translate-y-1
      "
    >
      <div className="flex items-center gap-3 mb-3 text-cyan-400">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}
