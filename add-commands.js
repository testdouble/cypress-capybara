require('./index').commands.forEach(function ({name, options = {}, command}) {
  Cypress.Commands.add(name, options, command)
})
