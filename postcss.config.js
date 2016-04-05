module.exports = {
  input: './src/style.pcss',
  output: './style.css',
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
