const fs = require('fs')
const pathFn = require('path')
const yaml = require('yamljs')
const defaults = require('./lib/defaults')
const parser = require('./lib/parser')

function getConfig(base) {
  const path = pathFn.join(base, 'config.yml')

  if (!fs.existsSync(path)) {
    return null
  }

  const config = yaml.load(path)

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
  config.base = base

  return config
}

module.exports = getConfig
module.exports.defaults = defaults
