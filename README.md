# Gatsby

## Overview

Gatsby is a static site generator built with React, TypeScript and GraphQL. See [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter) for more info.

**Folder structure**

```
src
 |- assets
 |- components
 |- data
 |- hooks
 |- images
 |- pages
 |- partials
static # files that will be copied without processing
.node-version
gatsby-config.js # global configuration
tsconfig.json
types.d.ts
```

## Quick start

In the root directory run `yarn` command to install dependencies. Start development server with `yarn develop` or `yarn dev`

## IDE config

To get all the benefits from TypeScript, Prettier and Styled Components (Emotion) it is recommended to use Visual Studio Code editor with ESLint enabled.

Install these extensions:

- `vscode-styled-components` - will enable syntax highlighting for Styled Components
- `Prettier - Code formatter` - enables code formatting when saving files

  - Add these configs to your Settings file (JSON)

    ```
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    ```

  - This repo holds default configs for Prettier in `.prettierrc.json`
