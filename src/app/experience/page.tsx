import fs from "fs";
import path from "path";
import ExperienceViewer from "@/components/ExperienceViewer";

export default function ExperiencePage() {
  const filePath = path.join(process.cwd(), "src/content/experience.log");
  const raw = fs.readFileSync(filePath, "utf8");

  return <ExperienceViewer code={raw} filename="experience.log" />;
}
