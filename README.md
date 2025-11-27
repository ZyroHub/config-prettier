<div align="center">
    <img src="https://i.imgur.com/KVVR2dM.png">
</div>

## ZyroHub - Prettier Config

<p>Default Prettier configuration for the ZyroHub ecosystem, ensuring a consistent code style across all modules.</p>

## Table of Contents

- [ZyroHub - Prettier Config](#zyrohub---prettier-config)
- [Table of Contents](#table-of-contents)
- [Getting Started](#getting-started)
- [Basic Usage](#basic-usage)
  - [Extending Prettier Configuration](#extending-prettier-configuration)

## Getting Started

To install the prettier config, use one of the following package managers:

[NPM Repository](https://www.npmjs.com/package/@zyrohub/config-prettier)

```bash
# npm
npm install --save-dev @zyrohub/config-prettier
# yarn
yarn add -D @zyrohub/config-prettier
# pnpm
pnpm add -D @zyrohub/config-prettier
# bun
bun add -d @zyrohub/config-prettier
```

## Basic Usage

### Extending Prettier Configuration

```javascript
import { prettierConfig } from "@zyrohub/config-prettier";

export default {
  ...prettierConfig,

  // Add your custom Prettier options here
};
```
