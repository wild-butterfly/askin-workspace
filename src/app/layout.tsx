import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Terminal from "@/components/Terminal";
import Tabs from "@/components/Tabs";

export const metadata: Metadata = {
  metadataBase: new URL("https://askin-workspace.vercel.app"),

  title: {
    default: "Aşkın Fear | Full Stack Developer",
    template: "%s | Aşkın Fear",
  },

  description:
    "Full Stack Developer building production SaaS platforms with React, Next.js, Node.js, PostgreSQL and AWS. Portfolio styled as an interactive developer workspace.",

  keywords: [
    "Aşkın Fear",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Software Engineer",
    "Portfolio",
  ],

  verification: {
    google: "1lSqm5A9QtLIqrV8gtuyJavkcebRs0XVCILGTzDSzkI",
  },

  openGraph: {
    title: "Aşkın Fear | Full Stack Developer",
    description:
      "Interactive VS Code–styled developer portfolio built with Next.js and React.",
    url: "/",
    siteName: "Aşkın Fear Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aşkın Fear | Full Stack Developer",
    description:
      "Interactive developer workspace portfolio built with Next.js.",
  },

  robots: {
    index: true,
    follow: true,
  },
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
          <Sidebar />

          <div className="flex flex-col flex-1 bg-[#1e1e1e]">
            <div className="flex flex-col flex-1 border-l border-[#2d2d2d]">
              <Tabs />

              <main className="flex-1 overflow-auto p-10 bg-[#1b1b1b]">
                {children}
              </main>
            </div>

            <Terminal />
          </div>
        </div>
      </body>
    </html>
  );
}
