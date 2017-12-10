const moment = require('moment-timezone')

const defaults = {
  title: '',
  description: '',
  url: '',
  theme: 'ccc45',
  per_page: 10,
  default_category: 'uncategorized',
  user: '',
  repository: '',
  scripts: [],
  plugins: [],
  public_dir: '/',
  authors: [],
  timezone: moment.tz.guess(),
  language: 'default',
  order: 'created',
  thumbnail_mode: 2,
  category_dir: 'category',
  tag_dir: 'tag',
  post_dir: 'post',
  root: '/',
  scripts_dir: 'scripts',
}

module.exports = defaults
