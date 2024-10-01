#!/usr/bin/env node

/* eslint-disable no-console */

const { execSync } = require('child_process');

const args = process.argv.slice(2);
const cwd = process.cwd();

const commands = {
  lint: `npx eslint --report-unused-disable-directives --ext .js,.ts .`,
  fix: `npx eslint --fix --ext .js,.ts .`,
  format: `npx prettier --write "./**/*.{js,json,ts}"`,
  check: `npx eslint --print-config .eslintrc`,
  help: `
    Command: npx hplint [options] [...args]

    Calls without arguments will default to 'npx eslint [...args]'

    Options:
      --lint      Scans your project for rule violations
      --fix       Fixes all detected rule violations where possible
      --format    Prettifies your project's files
      --check     Displays current ESLint configurations
      --help      Shows help message
  `,
};

const runCommand = command => {
  try {
    execSync(command, { stdio: 'inherit', cwd });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (args.includes('--lint')) {
  runCommand(commands.lint);
} else if (args.includes('--help')) {
  console.log(commands.help);
} else if (args.includes('--fix')) {
  runCommand(commands.fix);
} else if (args.includes('--format')) {
  runCommand(commands.format);
} else if (args.includes('--check')) {
  runCommand(commands.check);
} else {
  runCommand(`npx eslint ${args.join(' ')}`);
}
