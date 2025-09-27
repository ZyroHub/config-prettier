/** @type {import('prettier').Config} */
const config = {
  trailingComma: "none",
  semi: true,
  tabWidth: 4,
  useTabs: true,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: true,
  arrowParens: "avoid",
  endOfLine: "auto",
  printWidth: 120,

  importOrder: [
    "^@/core/?(.*)$",
    "^@/adapters/?(.*)$",
    "^@/modules/?(.*)$",
    "^@/services/?(.*)$",
    "^@/utils/?(.*)$",
    "^@/settings/?(.*)$",
    "^@/http/?(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderParserPlugins: ["typescript", "decorators-legacy"],

  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

export default config;
