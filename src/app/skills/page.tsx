import fs from "fs";
import path from "path";
import CodeViewer from "@/components/CodeViewer";

export default function SkillsPage() {
  const filePath = path.join(process.cwd(), "src/data/skills.json");
  const raw = fs.readFileSync(filePath, "utf8");

  return <CodeViewer code={raw} language="json" />;
}
