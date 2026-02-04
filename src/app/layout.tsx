import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Terminal from "@/components/Terminal";
import Tabs from "@/components/Tabs";

export const metadata: Metadata = {
  metadataBase: new URL("https://askin-workspace.vercel.app"),

  /* ============================= */
  /* 🔥 TITLE  */
  /* ============================= */
  title: {
    default:
      "Aşkın Fear (Askin Fear) | Full Stack Developer | React • Next.js • Node • Melbourne",
    template: "%s | Aşkın Fear",
  },

  /* ============================= */
  /* 🔥 DESCRIPTION  */
  /* ============================= */
  description:
    "Aşkın Fear (Askin Fear) is a Melbourne-based Full Stack Developer building production SaaS platforms with React, Next.js, Node.js, PostgreSQL and AWS. Interactive developer workspace portfolio.",

  /* ============================= */
  /* 🔥 KEYWORDS (ASCII + local SEO) */
  /* ============================= */
  keywords: [
    "Aşkın Fear",
    "Askin Fear",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Software Engineer Australia",
    "Melbourne Developer",
    "Portfolio",
  ],

  /* ============================= */
  /* 🔥 Google verification */
  /* ============================= */
  verification: {
    google: "4DQRbjwBKGPg5koDBypu700uVVN2m41MNWJ187rbIM8",
  },

  /* ============================= */
  /* 🔥 CANONICAL */
  /* ============================= */
  alternates: {
    canonical: "/",
  },

  /* ============================= */
  /* 🔥 AUTHOR (Google seviyor) */
  /* ============================= */
  authors: [{ name: "Aşkın Fear", url: "https://askin-workspace.vercel.app" }],
  creator: "Aşkın Fear",

  /* ============================= */
  /* 🔥 OPEN GRAPH (LinkedIn/Twitter preview) */
  /* ============================= */
  openGraph: {
    title: "Aşkın Fear (Askin Fear) | Full Stack Developer",
    description:
      "Melbourne-based Full Stack Developer building SaaS products with React, Next.js and AWS.",
    url: "/",
    siteName: "Aşkın Fear Portfolio",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aşkın Fear Portfolio",
      },
    ],
  },

  /* ============================= */
  /* 🔥 TWITTER */
  /* ============================= */
  twitter: {
    card: "summary_large_image",
    title: "Aşkın Fear (Askin Fear) | Full Stack Developer",
    description:
      "Interactive developer workspace portfolio built with Next.js and React.",
    creator: "@askinfear",
  },

  /* ============================= */
  /* 🔥 ROBOTS */
  /* ============================= */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
        {/* 🔥 Invisible H1 = SEO BOOST */}
        <h1 className="sr-only">
          Aşkın Fear (Askin Fear) – Full Stack Developer Portfolio Melbourne
        </h1>

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
