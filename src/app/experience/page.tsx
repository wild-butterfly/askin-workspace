import fs from "fs";
import path from "path";
import CodeViewer from "@/components/CodeViewer";

export default function ExperiencePage() {
  const filePath = path.join(process.cwd(), "src/content/experience.log");

  const raw = fs.readFileSync(filePath, "utf8");

  return <CodeViewer code={raw} language="bash" />;
}
