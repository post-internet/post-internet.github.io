module.exports = {
  input: './src/style.pcss',
  output: './style.css',
  map: { inline: false },
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
