# Hersy Packages ESLint config v0.1.0

Provides the ESLint + Babel + Prettier + Typescript configurations used by Hersy's published NPM packages as an extensible shared config.

## Installation

### Set your GITHUB_TOKEN environment variable

To install this (and any other GitHub) packages, you'll first need to set the **GITHUB_TOKEN** environment variable.
To do this you'll first need to create a GitHub Token (classic), you can do so on the "Developer options" section of your GitHub settings page.
For more instructions, read [GitHub's documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

Once set, add your access token to your preferred terminal's user profile file.

On Windows, WindowsPowerShell is recommended, locate or create your user profile file, usually saved on **%USERPROFILE%/Documents/WindowsPowerShell/Microsoft.Powershell_profile.ps1**, and add this line:

```powershell
$Env:GITHUB_TOKEN="<Your Token>"
```

On MacOS, locate or create your default terminal's user profile file.

For **bash** terminals it can be found at **~/.bashrc**
For **zsh** terminals it can be found at **~/.zshrc**

Then add this line:

```bash
export GITHUB_TOKEN="<Your Token>"
```

### Resolve to GitHub Package Registry

Locate or create your NPM configuration file, usually saved on **./.npmrc** , it should contain the following:

```npmrc
registry=https://registry.npmjs.org/ # or https://registry.yarnpkg.com/
@hersy:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Install the package

Now you can run either:

```bash
npm install --save @hersy/eslint-config-package
```

or

```bash
yarn add -D @hersy/eslint-config-package
```

### Update your ESLint configuration file

Add `"extends": "@hersy/eslint-config-package"` to `.eslintrc`

Or `extends: '@hersy/eslint-config-package'` to `eslint.config.js`

### Update your Babel configuration file

Add `"extends": "@hersy/eslint-config-package/babel.config"` to `.babelrc`

Or `extends: '@hersy/eslint-config-package'` to `eslint.config.js`

'@hersy/eslint-config-package/babel.config'` to `babel.config.js`

### Update your Prettier configuration file

Add `"@hersy/eslint-config-package/prettier.config"` to `.prettierrc`

Or `extends: '@hersy/eslint-config-package'` to `eslint.config.js`

'@hersy/eslint-config-package/prettier.config'` to `prettier.config.js`

### Update your Typescript configuration file

Add `"extends": "@hersy/eslint-config-package/tsconfig.base"` to `tsconfig.json`

### Update your project's scripts

Add the following to your `package.json`'s scripts:

```json
  "scripts": {
    "lint": "hplint --lint",
    "lint-fix": "hplint --fix",
    "format": "hplint --format",
    "eslint-check": "hplint --check",
  },
```

And you're all set!

## Usage

To see all manually runnable functions, run:

```bash
npx hplint --help
```

## Configure code editor for automatic fixing and formatting

Using [VSCode](https://code.visualstudio.com/) is very much encouraged, since no other editors have yet been tested.

Make sure the [ESLint Extension for VSCode](vscode:extension/dbaeumer.vscode-eslint) is both installed and enabled on your workspace.

Add the following to your project's `.vscode/settings.json`, or your user's `~/.vscode/settings.json`:

```json
  {
    "eslint.format.enable": true,
    "eslint.validate": ["javascript", "typescript"],
    "eslint.lintTask.enable": true,
    "eslint.lintTask.options": ". --ext .js,.ts",
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.tabSize": 2,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit"
    },
  },
```

You can fine-tune these settings based on personal preference. For more details on the available settings and options, refer to [ESLint Extension for VSCode's Documentation](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint#settings-options).

### Restart ESLint server

  - Open the "Help" Tab on your VSCode window and select "Show All Commands". This will display and focus on a global comand searchbar.
  - Search for the command titled `ESLint: Restart ESLint Server`.
  - The searchbar will showcase command suggestions for auto-complete as you input your search.
  - Once `ESLint: Restart ESLint Server` shows up as a suggestion, pick it to run it.

And you're all set!
