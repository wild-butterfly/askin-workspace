import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Terminal from "@/components/Terminal";
import Tabs from "@/components/Tabs";

export const metadata: Metadata = {
  title: "Aşkın Fear | Full Stack Developer",
  description:
    "Full Stack Developer building production SaaS platforms with React, Next.js, Node, PostgreSQL and AWS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
          font-mono
          text-[#d4d4d4]
          bg-[#1e1e1e]
          antialiased
        "
      >
        <div className="flex min-h-screen">
          {/* LEFT SIDEBAR */}
          <Sidebar />

          {/* RIGHT SIDE */}
          <div className="flex flex-col flex-1 bg-[#1e1e1e]">
            {/* EDITOR */}
            <div className="flex flex-col flex-1 border-l border-[#2d2d2d]">
              <Tabs />

              <main
                className="
                  flex-1
                  overflow-auto
                  p-10
                  bg-[#1b1b1b]
                "
              >
                {children}
              </main>
            </div>

            {/* TERMINAL */}
            <Terminal />
          </div>
        </div>
      </body>
    </html>
  );
}
