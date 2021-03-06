var webpack = require('webpack')
var BrowserSync = require('browser-sync-webpack-plugin')
var precss = require('precss')
var autoprefixer = require('autoprefixer')
var atImport = require('postcss-import')
var nesting = require('postcss-nesting')

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.pcss$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url?limit=100000'
      }
    ]
  },
  postcss: function () {
    return [atImport, nesting, precss, autoprefixer]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new BrowserSync({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['./'] },
      files: [ "./index.html", "./style.css" ]
    })
  ]
}
