# template

[![build](https://badgen.net/github/checks/patrickroberts/template?icon=github&label=build)](https://github.com/patrickroberts/template/actions)
[![coverage](https://badgen.net/codecov/c/github/patrickroberts/template?icon=codecov&label=coverage)](https://codecov.io/gh/patrickroberts/template)
[![license](https://badgen.net/github/license/patrickroberts/template)](https://github.com/patrickroberts/template/blob/master/LICENSE)

## Rollup template for TypeScript projects

### Features

- [TypeScript]
- [Babel]
- [Rollup] bundles
  - CommonJS
  - ES Module
  - UMD
  - Types
- [ESLint]
  - [Airbnb Style]
- [Jest]
  - Allows TypeScript in test files
- [TypeDoc]
- [GitHub Workflows] for
  - Building
  - Code Coverage
  - Documentation
  - Publishing

### Installation

```sh
npx degit patrickroberts/template my-new-project
cd my-new-project
npm install
```

### Getting Started

To begin live development with incremental building and testing

```sh
npm run watch
```

### Continuous Integration

Every push to the `master` branch will trigger an automated build and deploy generated documentation to GitHub Pages from the root of the `gh-pages` branch.

Every release will publish the package pre-bundled to [npm]. You need to configure your credentials by [creating a secret] with the name [`NPM_TOKEN`].

[TypeScript]: https://www.typescriptlang.org/
[Babel]: https://babeljs.io/
[Rollup]: https://rollupjs.org/
[ESLint]: https://eslint.org/
[Airbnb Style]: https://github.com/airbnb/javascript
[Jest]: https://jestjs.io/
[TypeDoc]: https://typedoc.org/
[GitHub Workflows]: https://docs.github.com/actions
[npm]: https://www.npmjs.com/
[creating a secret]: https://docs.github.com/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository
[`NPM_TOKEN`]: https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow
