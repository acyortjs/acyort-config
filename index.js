const fs = require('fs')
const pathFn = require('path')
const Render = require('acyort-render')
const defaults = require('./lib/defaults')
const parse = require('./lib/parse')

class Config {
  constructor(base) {
    this.renderer = new Render()
    this.base = base
    this.path = pathFn.join(base, 'config.yml')
  }

  get value() {
    if (!fs.existsSync(this.path)) {
      return null
    }

    const config = this.renderer.render('yaml', { path: this.path })

    Object.keys(defaults).forEach((key) => {
      if (config[key] === undefined || config[key] === null) {
        config[key] = defaults[key]
      }
    })

    const parsed = parse(config.url)

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
