<h3 align="center">
    ESLint config weclapp
</h3>

<p align="center">
  <a href="https://travis-ci.org/weclapp/eslint-config"><img
     alt="Build Status"
     src="https://img.shields.io/travis/weclapp/eslint-config.svg?style=popout-square"></a>
</p>

<br>
  
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
