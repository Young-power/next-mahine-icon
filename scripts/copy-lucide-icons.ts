import fs from "fs";
import path from "path";

const SOURCE_DIR = path.join(process.cwd(), "lucide_icons");
const DEST_DIR = path.join(process.cwd(), "src/icons/raw");

// créer le dossier de destination s'il n'existe pas
fs.mkdirSync(DEST_DIR, { recursive: true });

// lire les fichiers source
const files: string[] = fs
  .readdirSync(SOURCE_DIR)
  .filter((file: string) => file.endsWith(".svg"));

for (const file of files) {
  const srcPath = path.join(SOURCE_DIR, file);
  const destPath = path.join(DEST_DIR, file);

  fs.copyFileSync(srcPath, destPath);
  console.log(`✔ copied ${file}`);
}

console.log(`🚀 ${files.length} icons copied successfully`);
