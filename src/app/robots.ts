export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://askin-workspace.vercel.app/sitemap.xml",
  };
}