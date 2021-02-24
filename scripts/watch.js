#!/usr/bin/env node
process.env.FORCE_COLOR = 3;

const shell = require("shelljs");
const tools = require("./tools.js");

const argv = require("yargs")
  // Set up --help documentation.
  // You can view these by running `npm run watch -- --help`.
  .usage("Usage: npm watch -- [options]")
  .example([
    ["npm run watch", "(compile all components)"],
    ["npm run watch -- pfe-card", "(compile one component)"],
    ["npm run watch -- pfe-card pfe-band", "(compile multiple components)"],
    ["npm run watch -- --build", "(compile assets before running watch)"],
    ["npm run watch -- --storybook", "(watch storybook instance)"]
  ])
  .options({
    build: {
      default: false,
      alias: "nb",
      describe: "do not build the component(s) prior to running tests",
      type: "boolean"
    },
    storybook: {
      default: false,
      alias: "s",
      describe: "watch the storybook instance",
      type: "boolean"
    }
  }).argv;

// Arguments with no prefix are added to the `argv._` array.
const components = argv._.length > 0 ? tools.validateElementNames(argv._) : [];

// Build out the lerna command for watch
const watch = tools.lernaRun("watch", components);

// Set up the commands to be run in parallel
let parallel = [watch, "start"];
if (argv.storybook) parallel = ["storybook"].concat(parallel);

// Run the watch task for each component in parallel, include dependencies
shell.exec(
  `./node_modules/.bin/npm-run-all${
    argv.build ? ` --serial "build ${components.join(" ")}"` : ""
  } --parallel ${
    parallel.map(cmd => `"${cmd}"`).join(" ")
  }`, code => process.exit(code));