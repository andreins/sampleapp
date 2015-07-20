Badger-Env
==========

### Rails (w/ PostgreSQL) + Rspec + React + ES6 + ESLint + Webpack
[![Circle CI](https://circleci.com/gh/samwhite0/badger-env/tree/master.svg)](https://circleci.com/gh/samwhite0/badger-env/tree/master)

#### Info

Minimal project environment designed for use by Badger Academy.

Rails has its asset pipeline disabled in favor of compiling assets with [`webpack`](http://webpack.github.io/), and uses `postgres` as a database.

Front end components are built in React using ECMAScript 6 / JSX.

[Rspec](http://rspec.info/) for rails testing; [ESLint](http://eslint.org/) for ES6.

#### Getting Started
Install rails gems and initialise database. Check `config/database.yml` to ensure your settings are correct.
```
bundle install
bundle exec rake db:setup
```
Node modules
```
npm install
```
Build (webpack will run ESLint on all `js`/`jsx` files)
```
webpack --progress
```
Run (runs at `http://localhost:3000`)
```
rails server
```

#### Todo
- Front-end test framework (probably Chai+Mocha with React TestUtils)

**Please note: this README is a work in progress.**
