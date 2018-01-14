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
  category_dir: 'categories',
  tag_dir: 'tags',
  post_dir: 'posts',
  root: '/',
  scripts_dir: 'scripts',
  i18n_dir: 'i18n',
  source_dir: 'source',
  layout_dir: 'layout',
}

module.exports = defaults
