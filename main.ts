import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry = "Penguin Divorce Mediator";

// Gate: entry must be 1-60 characters, no trailing newline.
if (entry.length < 1 || entry.length > 60) {
  throw new Error(`entry length ${entry.length} is outside 1-60 characters`);
}
if (entry.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
