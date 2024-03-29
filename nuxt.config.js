const { resolve } = require('path')

module.exports = {
  srcDir: 'client/',
  head: {
    title: 'Nuxt + Meteor',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1.0, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes' },
      { name: 'og:locale', content: 'pt_BR' },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'robots', content: 'index,follow,noodp' },
      { name: 'description', content: 'A simple example use Nuxt in SPA mode + Meteor' },
      { name: 'country', content: 'Brazil' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'mobile-web-app-capable', content: 'yes' }
    ]
  },
  modules: [
    '@nuxtjs/router'
  ],
  generate: {
    routes: [
      '/',
      '/tasks',
      '/about'
    ]
  },
  build: {
    extend (config) {
      config.resolve.alias = {
        'server': resolve(__dirname, './server'),
        '~': resolve(__dirname, './client'),
        '~~': resolve(__dirname, './'),
        '@': resolve(__dirname, './client'),
        '@@': resolve(__dirname, './'),
        'assets': resolve(__dirname, './client/assets'),
        'static': resolve(__dirname, './client/static')
      }
      config.externals = function (context, request, callback) {
        var match = request.match(/^meteor\/(.+)$/)
        var pack = match && match[1]
        var locator = pack && 'Package["' + pack + '"]'
        return locator ? callback(null, locator) : callback()
      }
    }
  },
  loading: {
    color: 'yellow',
    height: '3px'
  }
};
