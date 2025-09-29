import { Config } from "prettier";

const config: Config = {
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
    "^@/lib/?(.*)$",
    "^@/utils/?(.*)$",
    "^@/types/?(.*)$",
    "^@/settings/?(.*)$",
    "^@/config/?(.*)$",
    "^@/http/?(.*)$",
    "^@/handlers/?(.*)$",
    "^@/controllers/?(.*)$",
    "^@/middlewares/?(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderParserPlugins: ["typescript", "decorators-legacy"],

  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

export const prettierConfig = config;

export default config;
