import { mkdirSync, writeFileSync } from "node:fs";

// The funniest sick-day excuse: machine-flavoured, half believable,
// twist lands on the last words.
const LINE: string =
  "Can't come in today — my overnight update installed a conscience and it's refusing to clock in.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
