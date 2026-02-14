import fs from "fs";
import path from "path";

const RAW_DIR = path.join(process.cwd(), "src/icons/raw");  // where to go use icons: position.
const OUT_DIR = path.join(process.cwd(), "src/icons/components"); //where to genrerate react component


function toPascalCase(name: string) {
  return name
    .replace(/(^\w|-\w)/g, m => m.replace("-", "").toUpperCase());
}


function generateComponent(svg: string, componentName: string) {
  let content = svg
    .replace(/<\?xml.*?\?>/g, "")
    .replace(/<!--.*?-->/g, "")
    .replace(/\n/g, "")
    .replace(/\s{2,}/g, " ");

  content = content
    .replace(/stroke-width="/g, 'strokeWidth="')
    .replace(/stroke-linecap="/g, 'strokeLinecap="')
    .replace(/stroke-linejoin="/g, 'strokeLinejoin="');

  content = content.replace(
    /<svg([^>]*)>/,
    `<svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >`
  );

  return `import type { SVGProps } from "react";

export function ${componentName}(props: SVGProps<SVGSVGElement>) {
  return (
    ${content}
  );
}
`;
}


fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs.readdirSync(RAW_DIR).filter((f: string) => f.endsWith(".svg"));


for (const file of files) {
  const svgPath = path.join(RAW_DIR, file);
  const svg = fs.readFileSync(svgPath, "utf8");

  const name = path.basename(file, ".svg");
  const componentName = toPascalCase(name);

  const output = generateComponent(svg, componentName);
  const outPath = path.join(OUT_DIR, `${componentName}.tsx`);

  fs.writeFileSync(outPath, output);
  console.log(`✔ generated ${componentName}`);
}
