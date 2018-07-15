const escape = (value) => {
  return value ? value.replace(/"/g,'\\"') : value
}

const css = (locators, ...values) => {
  let s = ''
  locators.forEach((locator, i) => {
    s += locator.replace(/\s+/g,'') + (escape(values[i]) || '')
  })
  return s
}

module.exports = {
  commands: [
    {name: 'findButton',
      command: (locator, options = {}) => {
        return cy.get(css`
          button:contains("${locator}"),
          button[id="${locator}"],
          button[title*="${locator}"],
          input[type=submit][title*="${locator}"],
          input[type=submit][value*="${locator}"],
          input[type=submit][id="${locator}"],
          input[type=reset][title*="${locator}"],
          input[type=reset][value*="${locator}"],
          input[type=reset][id="${locator}"],
          input[type=image][title*="${locator}"],
          input[type=image][value*="${locator}"],
          input[type=image][alt*="${locator}"],
          input[type=image][id="${locator}"],
          input[type=button][title*="${locator}"],
          input[type=button][value*="${locator}"],
          input[type=button][id="${locator}"]
        `, {
          log: false,
          timeout: options.wait
        }).then($el => {
          Cypress.log({
            name: 'findButton',
            displayName: 'Find Button',
            "$el": $el,
            message: locator,
            consoleProps () {
              // Mirror implementation from Cypress: https://github.com/cypress-io/cypress/blob/2b2b6d99a9f1bf232d9c7396b25390913d5f2b18/packages/driver/src/cy/commands/querying.coffee#L35-L47
              return {
                Command: 'findButton',
                Yielded: $el ? Cypress.dom.getElements($el) : '--nothing--',
                Elements: $el ? $el.length : 0,
                Selector: $el.selector
              }
            }
          })
        })
      }}

  ]
}
