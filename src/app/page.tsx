import fs from "fs";
import path from "path";
import CodeViewer from "@/components/CodeViewer";

export default function Page() {
  const filePath = path.join(process.cwd(), "src/content/READaboutME.md");
  const content = fs.readFileSync(filePath, "utf8");

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <CodeViewer code={content} language="markdown" />
    </div>
  );
}
