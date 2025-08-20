// scripts/build-image-arrays.ts
import fs from "node:fs/promises";
import path from "node:path";

const ALLOWED: string[] = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"];
// If you load a JSON map, give it a type:
const MAP: Record<string, string> = {
  "aesthetic-wizardry-unlocking-the-chamber-of-secrets": "wonderful-world-2022",
};

async function listFolder(folder: string): Promise<string[]> {
  const dir = path.join(process.cwd(), "public", folder);
  const items = await fs.readdir(dir);

  const files = items.filter((f: string) =>
    ALLOWED.some((ext) => f.toLowerCase().endsWith(ext))
  );

  files.sort((a: string, b: string) => {
    const na = parseInt(a, 10),
      nb = parseInt(b, 10);
    if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });

  return files.map((f) => `${folder}/${f}`);
}

(async () => {
  // typing MAP makes link & folder strings here:
  for (const [link, folder] of Object.entries(MAP)) {
    const arr = await listFolder(folder);
    console.log(`// link: ${link}`);
    console.log(`// folder: ${folder}`);
    console.log(`imageArray: ${JSON.stringify(arr, null, 2)},\n`);
  }
})();
