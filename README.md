# playwright-saucedemo-ts
Playwright example for UI automation on saucedemo.com


#How to install eslint
- `npm install eslint --save-dev`
- `npm i eslint-plugin-playwright --save-dev`
plugins
npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev

if dependency errors out like
```
npm ERR! Found: eslint@9.6.0
npm ERR! node_modules/eslint
npm ERR!   dev eslint@"^9.6.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer eslint@"^8.56.0" from @typescript-eslint/parser@7.15.0
npm ERR! node_modules/@typescript-eslint/parser
npm ERR!   dev @typescript-eslint/parser@"*" from the root project
npm ERR!   peer @typescript-eslint/parser@"^7.0.0" from @typescript-eslint/eslint-plugin@7.15.0
npm ERR!   node_modules/@typescript-eslint/eslint-plugin
npm ERR!     dev @typescript-eslint/eslint-plugin@"*" from the root project
```

downgrade eslint to 8.4 for an example
under package.json set the version to: `"eslint": "^8.56.0"` and run npm i
now rerun the plugin command above

- install ESlint plugin from Microsoft
- `touch .eslintrc` in root folder and copy the following
```
{
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint"
    ],
    "extends": [
      "plugin:playwright/playwright-test",
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended"
    ]
  }
```

running `npx eslint` will give you all the issues in your framework. You can also run for seperate folders like tests for example.