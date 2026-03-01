import fs from "fs";
import path from "path";

const RAW_DIR = path.join(process.cwd(), "src/icons/colorRaw");
const OUT_DIR = path.join(process.cwd(), "src/icons/colorComponents");

// Convertit un nom en PascalCase
function toPascalCase(name: string) {
  return name.replace(/(^\w|-\w)/g, m => m.replace("-", "").toUpperCase());
}

// Convertit style="..." en style={{ ... }} pour React et supprime enable-background
function fixStyle(svg: string) {
  return svg.replace(/style="([^"]*)"/g, (_, styleContent) => {
    const styles = styleContent
      .split(";")
      .filter(Boolean)
      .map((s: string) => {
        const [key, value] = s.split(":");
        if (!key || !value) return "";

        const camelKey = key
          .trim()
          .replace(/-([a-z])/g, (_, c) => c.toUpperCase());

        // Supprime enable-background s'il est présent
        if (camelKey === "enableBackground") return "";

        return `${camelKey}: "${value.trim()}"`;
      })
      .filter(Boolean)
      .join(", ");

    return styles ? `style={{ ${styles} }}` : "";
  });
}

// Nettoyage général du SVG pour React
function cleanSvg(svg: string) {
  return fixStyle(
    svg
      .replace(/<\?xml.*?\?>/g, "")
      .replace(/<!--.*?-->/g, "")
      .replace(/\n/g, "")
      .replace(/\s{2,}/g, " ")
      .replace(/stroke-width=/g, "strokeWidth=")
      .replace(/stroke-linecap=/g, "strokeLinecap=")
      .replace(/stroke-linejoin=/g, "strokeLinejoin=")
      .replace(/fill-rule=/g, "fillRule=")
      .replace(/clip-rule=/g, "clipRule=")
      .replace(/class=/g, "className=")
      .replace(/xmlns:xlink=/g, "xmlnsXlink=")
      .replace(/xml:space=/g, "xmlSpace=")
      .replace(/xlink:href=/g, "xlinkHref=")
      .replace(/enable-background="[^"]*"/g, "")
      // Supprime width et height existants pour éviter les doublons
      .replace(/\swidth="[^"]*"/g, "")
      .replace(/\sheight="[^"]*"/g, "")
  );
}

// Génération du composant React avec taille par défaut 30
function generateComponent(svg: string, componentName: string) {
  const content = cleanSvg(svg).replace(
    /<svg([^>]*)>/,
    `<svg$1 {...props}>`
  );

  return `import type { SVGProps } from "react";

export function ${componentName}({ width = 30, height = 30, ...props }: SVGProps<SVGSVGElement>) {
  return (
    ${content.replace(
      /<svg([^>]*)>/,
      `<svg$1 width={width} height={height} {...props}>`
    )}
  );
}
`;
}

// Création du dossier de sortie si besoin
fs.mkdirSync(OUT_DIR, { recursive: true });

// Lecture des fichiers SVG
const files = fs.readdirSync(RAW_DIR).filter(f => f.endsWith(".svg"));

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