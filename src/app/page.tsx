export const runtime = "nodejs";

import fs from "fs";
import path from "path";
import CodeViewer from "@/components/CodeViewer";

export default function Page() {
  const filePath = path.join(process.cwd(), "src/content/READaboutME.md");
  const raw = fs.readFileSync(filePath, "utf8");

  return (
    <div className="max-w-4xl mx-auto mt-12 space-y-16">
      <CodeViewer code={raw} language="markdown" filename="READaboutME.md" />
    </div>
  );
}
