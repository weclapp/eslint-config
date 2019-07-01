<h3 align="center">
    ESLint config weclapp
</h3>

<p align="center">
  <a href="https://travis-ci.org/weclapp/eslint-config"><img
     alt="Build Status"
     src="https://img.shields.io/travis/weclapp/eslint-config.svg?style=popout-square"></a>
  <img alt="Current version"
     src="https://img.shields.io/github/tag/weclapp/eslint-config.svg?color=3498DB&label=version&style=flat-square">
</p>

<br>

This rule-set enforces basic coding paradigms such as best-pracises / formatting and includes rules with focus of detecting errors. 
It's maintained by [weclapp](https://github.com/weclapp) / [weclapp.com](https://www.weclapp.com/de/).
### Installation
```shell
$ npm install @weclapp/eslint-config
```

### Usage
The weclapp eslint-rules override parts of eslint's `eslint:recommend`.
```js
{
    "extends": "weclapp",
    "rules": {
        // Your custom, project-specific rules
    }
}
```
