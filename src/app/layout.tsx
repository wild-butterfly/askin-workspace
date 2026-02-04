import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import Terminal from "@/components/Terminal";
import Tabs from "@/components/Tabs";

/*
  ✅ GLOBAL SEO CONFIG
  
*/

export const metadata: Metadata = {
  metadataBase: new URL("https://askin-workspace.vercel.app"),

  title: {
    default: "Aşkın Fear — Full Stack Developer",
    template: "%s | Aşkın Fear",
  },

  description:
    "Full Stack Developer building production-grade SaaS platforms with React, Next.js, Node.js, PostgreSQL and AWS. Creator of Clevermode & Honeycomb systems.",

  keywords: [
    "Aşkın Fear",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "SaaS Developer",
    "Melbourne Developer",
    "Software Engineer Portfolio",
  ],

  authors: [{ name: "Aşkın Fear" }],
  creator: "Aşkın Fear",
  category: "technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Aşkın Fear — Full Stack Developer",
    description:
      "Production-grade SaaS systems with React, Next.js, Node and AWS.",
    url: "/",
    siteName: "Aşkın Portfolio",
    locale: "en_AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aşkın Fear — Developer Portfolio",
    description: "Full-stack SaaS engineer. React • Next • Node • AWS",
  },

  icons: {
    icon: "/favicon.ico",
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
