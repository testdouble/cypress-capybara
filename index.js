const escape = (value) => {
  return value ? value.replace(/"/g,'\\"') : value
}

const css = (locators, ...replacements) => {
  return {
    format: (options) => {
      let s = ''
      locators.forEach((locator, i) => {
        s += locator.replace(/\s+/g,'') + (escape(options[replacements[i]]) || '')
      })
      return s
    }
  }
}

const buildCommand = ({name, type, locatorTemplate}) => {
  return {
    name,
    command (locator, options = {}) {
      const selector = locatorTemplate.format({locator})
      return cy.get(selector, {
        log: false,
        timeout: options.wait
      }).__cypress_capybara_log(name, locator, selector)
    }
  }
}

module.exports = {
  commands: [
    {
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
    },
    buildCommand({
      name: 'findButton',
      type: 'finder',
      locatorTemplate: css`
        button:contains("${'locator'}"),
        button[id="${'locator'}"],
        button[title*="${'locator'}"],
        input[type=submit][title*="${'locator'}"],
        input[type=submit][value*="${'locator'}"],
        input[type=submit][id="${'locator'}"],
        input[type=reset][title*="${'locator'}"],
        input[type=reset][value*="${'locator'}"],
        input[type=reset][id="${'locator'}"],
        input[type=image][title*="${'locator'}"],
        input[type=image][value*="${'locator'}"],
        input[type=image][alt*="${'locator'}"],
        input[type=image][id="${'locator'}"],
        input[type=button][title*="${'locator'}"],
        input[type=button][value*="${'locator'}"],
        input[type=button][id="${'locator'}"]
      `
    })
  ]
}
