module.exports = {
  use: [
    'postcss-import',
    'postcss-nesting',
    'precss',
    'autoprefixer',
    'cssnano'
  ],
  cssnano: {
    filterPlugins: false
  }
}
