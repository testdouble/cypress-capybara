require('./index').commands.forEach(function ({name, command}) {
  Cypress.Commands.add(name, command)
})
