[![Build Status][build-shield]][build-url]
[![Contributors][contributors-shield]][contributors-url]
[![Apache 2.0 License][license-shield]][license-url]


<p align="center">
  <a href="https://github.com/eccosolutions/ecco-rjsf">
    <img src="https://raw.githubusercontent.com/rjsf-team/react-jsonschema-form/59a8206e148474bea854bbb004f624143fbcbac8/packages/core/logo.png" alt="Logo" width="180" height="120">
  </a>

  <h3 align="center">react-jsonschema-form</h3>

  <p align="center">
    A simple <a href="http://facebook.github.io/react/">React</a> component capable of using <a href="http://json-schema.org/">JSON Schema</a> to declaratively build and customize web forms.
    <br />
    <a href="https://react-jsonschema-form.readthedocs.io/en/latest/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://rjsf-team.github.io/react-jsonschema-form/">View Playground</a>
    ·
    <a href="https://github.com/eccosolutions/ecco-rjsf/issues">Report Bug</a>
    ·
    <a href="https://github.com/eccosolutions/ecco-rjsf/issues">Request Feature</a>
  </p>
</p>

[![playground animation](https://i.imgur.com/M8ZCES5.gif)](https://rjsf-team.github.io/react-jsonschema-form/)

## Development

Ensure you are using node ≥ 12 and npm ≥ 6.

To be able to publish to npm you must first log in to npm using the
command-line tool. Run `npm login` and follow the prompts. You only need to
do this once. This command stores an auth token in `~/.npmrc`. 

Commands:

 * `npm install` – Install dependencies.
 * `npm run build` – Build the project (ensure you always run `npm install` first).
 * `npm test` – Run automated tests (ensure you always run `npm install` and
   `npm run build` first).
 * `npm run lint` – Check source code with eslint.
 * `npm run cs-check` – Check source code is formatted according to Prettier rules.
 * `npm run cs-format` – Automatically reformat source code using Prettier.
 * `npm run lerna-publish` – Publish to npm (ensure you always run `npm install`
    and `npm run build` first).

To run a full build, check, and deploy to npm from scratch:
```bash
npm install &&
npm run build &&
npm test &&
npm run lint &&
npm run cs-check &&
npm run lerna-publish
```

## Supported Themes

- [Ant Design](https://github.com/eccosolutions/ecco-rjsf/tree/master/packages/antd)
- [Bootstrap 3](https://github.com/eccosolutions/ecco-rjsf/tree/master/packages/core)
- [Bootstrap 4](https://github.com/eccosolutions/ecco-rjsf/tree/master/packages/bootstrap-4)
- [Fluent UI](https://github.com/eccosolutions/ecco-rjsf/tree/master/packages/fluent-ui)
- [Material UI](https://github.com/eccosolutions/ecco-rjsf/tree/master/packages/material-ui)
- [Semantic UI](https://github.com/eccosolutions/ecco-rjsf/tree/master/packages/semantic-ui)

## Documentation
Read our [documentation](https://react-jsonschema-form.readthedocs.io/en/latest/) on Read the Docs.

## Live Playground
A [live playground](https://rjsf-team.github.io/react-jsonschema-form/) is hosted on gh-pages.

## Contributing
Read our [contributors' guide](https://react-jsonschema-form.readthedocs.io/en/latest/contributing/) to get started.

## Credits

Testing powered by BrowserStack<br>
<a target="_blank" href="https://www.browserstack.com/"><img width="200" src="https://user-images.githubusercontent.com/1689183/51487090-4ea04f80-1d57-11e9-9a91-79b7ef8d2013.png"></a>


[build-shield]: https://github.com/eccosolutions/ecco-rjsf/workflows/CI/badge.svg
[build-url]: https://github.com/eccosolutions/ecco-rjsf/actions
[contributors-shield]: https://img.shields.io/github/contributors/eccosolutions/ecco-rjsf.svg
[contributors-url]: https://github.com/eccosolutions/ecco-rjsf/graphs/contributors
[license-shield]: https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/apache-2.0/
