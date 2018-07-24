const { resolve } = require('path')

module.exports = function () {
  this.nuxt.options.build.createRoutes = () => {}
  this.addTemplate({
    fileName: 'router.js',
    src: resolve(`${this.options.srcDir}`, 'router.js')
  })
}
