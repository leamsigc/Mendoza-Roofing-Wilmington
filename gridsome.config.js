// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]
if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')))
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "MendozaRoofing",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
         plugins: postcssPlugins,
      }
    }
  }
};
