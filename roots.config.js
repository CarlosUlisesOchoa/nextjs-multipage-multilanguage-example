// roots.config.js
const path = require('path')

module.exports = {
  // where original routes are placed
  originDir: path.resolve(__dirname, 'src/roots'),
  // where translated routes will be saved
  localizedDir: path.resolve(__dirname, 'src/app'),
  // which locales are we going to use (URL prefixes)
  locales: ['es', 'en'],
  // which locale is considered as default when no other match
  defaultLocale: 'es',
  // serves default locale on "/en" instead of "/"
  prefixDefaultLocale: false,
}
