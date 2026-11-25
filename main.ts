// entry: one line of plain text in /output/entry.txt (second edit)
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "My worst Monday: nine stand-ups, zero decisions, and a human who asked me to take this offline about the internet being down.";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", line + "\n", "utf8");
