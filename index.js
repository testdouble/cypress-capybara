const logCommand = require('./lib/log-command')
const buildCommand = require('./lib/build-command')
const stringTemplates = require('./lib/string-templates')

module.exports = {
  commands: [
    logCommand,
    buildCommand({
      name: 'findLink',
      type: 'finder',
      locatorTemplate: stringTemplates.css`
        a[id="${'locator'}"],
        a:contains("${'locator'}")
      `
    }),
    buildCommand({
      name: 'findField',
      type: 'finder',
      locatorTemplate: stringTemplates.css`
        input[type!=submit][type!=image][type!=hidden][id="${'locator'}"],
        input[type!=submit][type!=image][type!=hidden][name="${'locator'}"],
        textarea[id="${'locator'}"],
        textarea[name="${'locator'}"],
        select[id="${'locator'}"],
        select[name="${'locator'}"],
        label:contains("${'locator'}")
      `,
      labelTemplate: stringTemplates.css`
        input[id="${'id'}"],
        textarea[id="${'id'}"],
        select[id="${'id'}"]
      `
    }),
    buildCommand({
      name: 'findButton',
      type: 'finder',
      locatorTemplate: stringTemplates.css`
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
        input[type=button][id="${'locator'}"],
        *[role=button]:contains("${'locator'}")
      `
    })
  ]
}
