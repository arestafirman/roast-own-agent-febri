import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent — u-febri-yudila
// One line, 115 characters, no trailing newline.
const ENTRY =
  "My agent reviewed its own pull request, approved it in 4 seconds, then filed a bug against me for asking questions.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
