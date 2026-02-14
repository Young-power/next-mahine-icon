import fs from "fs";
import path from "path";

const COMPONENTS_DIR = path.join(
  process.cwd(),
  "src/icons/components"
);

const INDEX_FILE = path.join(
  process.cwd(),
  "src/index.ts"
);

const files = fs
  .readdirSync(COMPONENTS_DIR)
  .filter((file: string) => file.endsWith(".tsx"));

const exportLines = files
  .map(file => {
    const name = path.basename(file, ".tsx");
    return `export { ${name} } from "./icons/components/${name}";`;
  })
  .sort()
  .join("\n");

fs.writeFileSync(
  INDEX_FILE,
  `${exportLines}\n`,
  "utf8"
);

console.log("✔ index.ts generated");
