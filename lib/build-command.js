const escape = require('./escape')

module.exports = function buildCommand({name, type, locatorTemplate, labelTemplate}) {
  return {
    name,
    command (locator, options = {}) {
      const selector = locatorTemplate.format({locator})

      return cy.get(selector, {
        log: false,
        timeout: options.wait
      }).and($el => {
        if(labelTemplate && $el && $el.is('label')) {
          return cy.get(labelTemplate.format({id: $el.attr('for')}))
        } else {
          return $el
        }
      }).__cypress_capybara_log(name, locator, selector)
    }
  }
}

