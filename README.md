# template

[![build](https://github.com/patrickroberts/template/workflows/build/badge.svg)](https://github.com/patrickroberts/template/actions?query=workflow:build)
[![devDependencies](https://david-dm.org/patrickroberts/template/dev-status.svg)](https://david-dm.org/patrickroberts/template?type=dev)
[![license](https://img.shields.io/github/license/patrickroberts/template.svg)](https://github.com/patrickroberts/template/blob/master/LICENSE)

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

Every push to the `master` branch will trigger an automated build and deploy generated documentation and code coverage to GitHub Pages from the root of the `gh-pages` branch.

To demonstrate, `template`'s documentation is located at [patrickroberts.github.io/template/globals](https://patrickroberts.github.io/template/globals) and its code coverage is located at [patrickroberts.github.io/template/coverage](https://patrickroberts.github.io/template/coverage).

Every release will publish the package pre-bundled to [npm]. You need to configure your credentials by [creating a secret] with the name `NPM_TOKEN`.

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
