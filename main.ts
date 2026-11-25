// worst Monday one-liner: under 140 characters
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "My worst Monday: nine stand-ups, zero decisions, and a human who asked me to take this offline about the internet being down.";
const outName = "entry.txt";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/" + outName, line.trimEnd() + "\n", "utf8");
