#!/usr/bin/env node
import { execSync } from "child_process";
import { resolve, dirname, join } from "path";
import { fileURLToPath, pathToFileURL } from "url";
import { homedir } from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const { run } = await import(pathToFileURL(join(homedir(), ".claude/skills/release-cdn/release-cdn.mjs")).href);

run({
  root,
  artifacts: {
    plugin: {
      versionKey: "version",
      cdnFileName: "360-view.min.js",
      build(version) {
        execSync("npm run build:bundle", { stdio: "inherit", cwd: root });
        return resolve(root, "dist/360-view.min.js");
      },
    },
  },
  updateFiles: ["README.md"],
});
