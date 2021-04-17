// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const tailwindcss = require("tailwindcss");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "MendozaRoofing",
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss]
      }
    }
  }
};
