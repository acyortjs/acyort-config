const fs = require('fs')
const path = require('path')
const assert = require('power-assert')
const moment = require('moment-timezone')
const Config = require('../')
const text = require('./fixtures/yml')

function setYml(url) {
  let yml = text.split('\n')
  if (url !== undefined) {
    yml[2] = `url: ${url}`
  }
  yml = yml.join('\n')
  fs.writeFileSync(path.join(__dirname, 'config.yml'), yml)
}

describe('config', () => {
  it('values', () => {
    setYml()

    const config = new Config(__dirname)
    const { value } = config

    assert(value.authors.length === 0)
    assert(value.base === __dirname)
    assert(value.category_dir === 'categories')
    assert(value.default_category === 'uncategorized')
    assert(value.description === 'A Node.js blog tool powered by GitHub.')
    assert(value.language === 'default')
    assert(value.menu.tags === '/tag/')
    assert(value.order === 'created')
    assert(value.per_page === 10)
    assert(value.plugins[0] === 'acyort-rss')
    assert(value.root === '/')
    assert(value.post_dir === 'posts')
    assert(value.public_dir === '/')
    assert(value.repository === 'acyortjs.github.io')
    assert(value.scripts.length === 0)
    assert(value.scripts_dir === 'scripts')
    assert(value.tag_dir === 'tags')
    assert(value.theme === 'ccc45')
    assert(value.timezone === moment.tz.guess())
    assert(value.thumbnail_mode === 2)
    assert(value.title === 'AcyOrt')
    assert(value.url === 'https://acyortjs.github.io')
    assert(value.user === 'acyortjs')
    assert(value.line_numbers === null)
    assert(value.token === null)
  })

  it('no exits', () => {
    const config = new Config(process.cwd())
    assert(config.value === null)
  })

  it('root', () => {
    setYml('https://acyortjs.github.io/child/')
    const config = new Config(__dirname)
    assert(config.value.root === '/child')
  })

  it('wrong url', () => {
    setYml('')
    let config = new Config(__dirname)
    assert(config.value === null)

    setYml('acyortjs.github.io')
    config = new Config(__dirname)
    assert(config.value === null)
  })
})
