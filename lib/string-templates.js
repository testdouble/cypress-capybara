const escape = require('./escape')

module.exports = {
  css: (locators, ...replacements) => {
    return {
      format: (options) => {
        let s = ''
        locators.forEach((locator, i) => {
          s += locator.replace(/\s+/g, '') + (escape(options[replacements[i]]) || '')
        })
        return s
      }
    }
  }
}
