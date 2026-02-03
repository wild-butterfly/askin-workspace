import fs from "fs";
import path from "path";
import CodeViewer from "@/components/CodeViewer";
import ProductionSystems from "@/components/sections/ProductionSystems";

export default function Page() {
  const filePath = path.join(process.cwd(), "src/content/READAboutME.md");
  const content = fs.readFileSync(filePath, "utf8");

  return (
    <div className="max-w-4xl mx-auto mt-12 space-y-16">
      {/* README viewer */}
      <CodeViewer code={content} language="markdown" />
    </div>
  );
}
