# acyort-config

[![Build Status](https://travis-ci.org/acyortjs/acyort-config.svg?branch=master)](https://travis-ci.org/acyortjs/acyort-config)
[![codecov](https://codecov.io/gh/acyortjs/acyort-config/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/acyort-config)

Config module for [AcyOrt](https://github.com/acyortjs/acyort)

## Install

```bash
$ npm i acyort-config -S
```

## Usage

```yml
# config.yml

title: AcyOrt
description: A Node.js blog tool powered by GitHub.
url: https://acyortjs.github.io/
theme:
per_page:
menu:
  categories: /category/
  tags: /tag/
default_category:
user: acyortjs
repository: acyortjs.github.io
scripts:
plugins:
  - acyort-rss
public_dir: /
authors:
timezone:
language:
line_numbers:
order:
thumbnail_mode:
category_dir:
tag_dir:
post_dir:
token:
```

```js
// npm i acyort-render -S

const fs = require('fs')
const Renderer = require('acyort-render')

const config = new Config({
  base: __dirname,
  renderer: new Renderer()
})

console.log(config.value)

/*
{ title: 'AcyOrt',
  description: 'A Node.js blog tool powered by GitHub.',
  url: 'https://acyortjs.github.io',
  theme: 'ccc45',
  per_page: 10,
  menu:
   { archives: '/archives/',
     categories: '/category/',
     tags: '/tag/' },
  default_category: 'uncategorized',
  user: 'acyortjs',
  repository: 'acyortjs.github.io',
  scripts: [],
  plugins: [ 'acyort-rss' ],
  public_dir: '/',
  authors: [],
  timezone: 'Asia/Shanghai',
  language: 'default',
  line_numbers: null,
  order: 'created',
  thumbnail_mode: 2,
  category_dir: 'category',
  tag_dir: 'tag',
  post_dir: 'post',
  token: null,
  root: '/',
  scripts_dir: 'scripts',
  base: '/Users/am0200/Documents/github/acyort-config/test' }
*/
```
