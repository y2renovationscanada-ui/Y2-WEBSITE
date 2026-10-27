import sharp from "sharp";
import { readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import path from "path";

sharp.cache(false); // don't keep files locked on Windows

const dir = "public/images";
for (const f of readdirSync(dir).filter((f) => f.endsWith(".webp"))) {
  const p = path.join(dir, f);
  const before = statSync(p).size;
  if (before < 300 * 1024) continue; // skip files already small

  const input = readFileSync(p); // read into memory, so sharp never opens the file
  const buf = await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();

  if (buf.length < before) {
    writeFileSync(p, buf);
    console.log(f, Math.round(before / 1024) + "KB →", Math.round(buf.length / 1024) + "KB");
  }
}