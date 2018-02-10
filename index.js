const fs = require('fs')
const pathFn = require('path')
const render = require('acyort-render')
const defaults = require('./lib/defaults')
const parser = require('./lib/parser')

class Config {
  constructor(base) {
    this.base = base
    this.path = pathFn.join(base, 'config.yml')
  }

  get value() {
    if (!fs.existsSync(this.path)) {
      return null
    }

    const config = render('yaml', { path: this.path })

    Object.keys(defaults).forEach((key) => {
      if (config[key] === undefined || config[key] === null) {
        config[key] = defaults[key]
      }
    })

    const parsed = parser(config.url)

    if (!parsed) {
      return null
    }

    if (parsed.root) {
      config.root = parsed.root
    }

    config.url = parsed.url
    config.base = this.base

    return config
  }
}

module.exports = Config
module.exports.defaults = defaults
