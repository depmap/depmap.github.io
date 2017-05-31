const pug = require('@depmap/pug-loader')
const styl = require('@depmap/stylus-loader')

module.exports = {
  path: 'src/**/*',
  output: './',
  load: { pug, styl },
  browsersync: {
    server: './',
    files: './'
  }
}
