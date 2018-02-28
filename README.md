# acyort-config

[![Build Status](https://travis-ci.org/acyortjs/acyort-config.svg?branch=master)](https://travis-ci.org/acyortjs/acyort-config)
[![codecov](https://codecov.io/gh/acyortjs/acyort-config/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/acyort-config)

Configs for [AcyOrt](https://github.com/acyortjs/acyort)

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
category_dir:
tag_dir:
post_dir:
token:
```

```js
const getConfig = require('acyort-config')
const { defaults } = require('acyort-config')

const config = getConfig(__dirname)

console.log(defaults)
console.log(config)
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
  language: 'en',
  line_numbers: true,
  order: 'created',
  category_dir: 'category',
  tag_dir: 'tag',
  post_dir: 'post',
  token: null,
  root: '/',
  scripts_dir: 'scripts',
  base: '/Users/am0200/Documents/github/acyort-config/test' }
*/
```
