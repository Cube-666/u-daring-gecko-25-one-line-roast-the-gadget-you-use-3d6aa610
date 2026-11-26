// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (123 characters, 1 line)
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My phone's face unlock has never recognised me before coffee, " +
  "but it opens instantly for my cat, who has never paid a bill.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The gate: UTF-8 text of 1 to 200 characters, not only white space.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast line must be 1-200 non-blank characters, got ${ROAST.length}`);
}
if (ROAST.includes("\n")) {
  throw new Error("roast line must be a single line");
}

writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
console.log(`Wrote ${ROAST.length}-character roast to ${outDir}/entry.txt`);
