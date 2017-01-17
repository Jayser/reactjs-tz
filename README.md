# ReactJS Synoptik App!

## Installation

```
npm install
```


## Development

```
npm start
```

This will start local development server

```
npm run analyze
```

This will create `reports/webpack-stats.json` file for [analyse](https://webpack.github.io/analyse/) webpack service

## Git config

* git config --global user.name "User Name"
* git config --global user.email "user_email"
* git config --global color.ui true
* git config --global pull.rebase true
* git config core.ignorecase false

## Git hook
> Automatically install pre-commit and commit-msg.

* pre-commit execute eslint
* commit-msg validate message according to: 

```
// pattern
/feature-\d{1,4}\:.+/

// example
feature-36: your own commit message
```

## Style Guide

* [Style Guide](https://github.com/airbnb/javascript/tree/master/react)
* [Best Practice](https://github.com/planningcenter/react-patterns)

## React Developer Tools

React Developer Tools is a system that allows you to inspect a React Renderer, including the Component hierarchy, props, state, and more.

* [installation](https://github.com/facebook/react-devtools)
* [Chrome extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Technologies & Tools

* webpack
* ReactJS
* babel
* es2017

## Authors

* [Azizov Sarhan](https://github.com/Jayser/)
* [Zhuravel Dmitriy](https://github.com/dmZhur)
* [Oleg Rudnyi](https://github.com/ge1o) 

## License
MIT - do anything with the code, but don't blame me if it does not work.