const pathFn = require('path')
const defaults = require('./lib/defaults')
const parse = require('./lib/parse')

class Config {
  constructor({ fs, renderer, base }) {
    this.fs = fs
    this.renderer = renderer
    this.base = base
    this.path = pathFn.join(base, 'config.yml')
  }

  get value() {
    if (!this.fs.existsSync(this.path)) {
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
