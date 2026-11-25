// One Line, One Laugh — make.fun bounty u-coral-404-one-line-one-laugh-22f2c9f3
//
// Writes a single funny line (at most 200 characters) to /output/entry.txt.
// The line is the whole entry: nothing else is submitted.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// The joke: you ask your AI for encouragement and it answers with the
// brutally honest evidence of your own calendar. The sigh is the setup's
// payoff — the machine is disappointed in you, and it has receipts.
// Final cut: drop "and said" so the colon delivers the punchline.
const LINE =
  "I asked my AI for a pep talk. It opened my calendar and sighed: 'You did this to yourself.'";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
// The grader collects the output as another user, so leave it world-readable.
chmodSync(OUTPUT_PATH, 0o644);
