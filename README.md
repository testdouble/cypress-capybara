# cypress-capybara

An abbreviated port of [Capybara](https://github.com/teamcapybara/capybara)'s
finder methods, reimplemented as custom [Cypress](https://cypress.io) commands.

## Installation

```
npm i -D cypress-capybara
```

Then, in your `cypress/support/commands.js` file, add:

```
import 'cypress-capybara/add-commands'
```

## Usage

Here are the commands cypress-capybara implements. As with Capybara proper, they
specify pretty liberal search functions, allowing locators to specify
interactive elements by label, display text, name, id, value, title, and so on
(depending on the element type).

* `cy.findButton(locator, options)` (from
  [`find_button`](https://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/Node/Finders#find_button-instance_method))
* `cy.findField(locator, options)` (from
  [`find_field`](https://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/Node/Finders#find_field-instance_method))

## Why haven't you implemented `x` method from Capybara::DSL?

The library will only port functions which can be deemed as separately
worthwhile from Cypress's built-in API, which is pretty robust, already! Not
only do many commands roughly mirror Capybara (e.g. `cy.get()` is essentially
the same as `find()` or `all()`, whereas `visit` is even named the same thing in
both libraries), but the chaining style used for Cypress enables a lot of the
sort of operations that required separate methods, options, and blocks in
Capybara.

Want to fill in a field? Just do `findField('Some Label').type('some text')`.
For this library to implement `fillIn('Some Label', {with: 'some text'})`
would be redundant and, more importantly, prevent users from using the chaining
API to do something like an intermediary `filter()` operation before calling
`type()`.


