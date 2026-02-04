export const runtime = "nodejs";

import fs from "fs";
import path from "path";
import CodeViewer from "@/components/CodeViewer";

export default function Page() {
  const filePath = path.join(process.cwd(), "src/content/READaboutME.md");
  const raw = fs.readFileSync(filePath, "utf8");

  return (
    <CodeViewer code={raw} language="markdown" filename="READaboutME.md" />
  );
}
