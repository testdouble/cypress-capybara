module.exports = {
  name: "__cypress_capybara_log",
  options: {type: 'utility', prevSubject: 'optional'},
  command ($el, commandName, locator, selector) {
    Cypress.log({
      name: commandName,
      $el,
      message: locator,
      consoleProps () {
        // Mirror implementation from Cypress: https://is.gd/cypress_log
        return {
          Command: commandName,
          Yielded: $el && $el.length > 0 ? Cypress.dom.getElements($el) : '--nothing--',
          Elements: $el ? $el.length : 0,
          Selector: selector,
          Locator: locator
        }
      }
    })
  }
}

