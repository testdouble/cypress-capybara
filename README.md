# cypress-capybara

[![CircleCI](https://circleci.com/gh/testdouble/cypress-capybara/tree/master.svg?style=svg)](https://circleci.com/gh/testdouble/cypress-capybara/tree/master)

An abbreviated port of [Capybara](https://github.com/teamcapybara/capybara)'s
finder methods, reimplemented as custom [Cypress](https://cypress.io) commands.

## Installation

```
npm install -D cypress-capybara
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

* `cy.findLink(locator, options)` (see:
  [`find_link`](https://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/Node/Finders#find_link-instance_method))
* `cy.findField(locator, options)` (see:
  [`find_field`](https://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/Node/Finders#find_field-instance_method))
* `cy.findButton(locator, options)` (see:
  [`find_button`](https://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/Node/Finders#find_button-instance_method))

To see these in action, check out the library's [test
file](cypress/integration/capybara.spec.js).

## Why haven't you implemented `x` method from Capybara::DSL?

The library will only port functions which can be reasonably deemed as
worthwhile apart from the features provided by Cypress's built-in API–which is
pretty robust, out of the box! Not only do many commands roughly mirror those in
Capybara (e.g.  `cy.get()` is essentially the same as `find()` or `all()`,
whereas `visit` is even named the same thing in both libraries), but the
chaining style used for Cypress enables a lot of the sort of operations that
required separate methods, options, and blocks in Capybara.

Want to fill in a field? Just do `findField('Some Label').type('some text')`.
If this library were to implement `fillIn('Some Label', {with: 'some text'})`,
it would simply be redundant and, more importantly, it would prevent users from
using the chaining API to do something like an intermediary `filter()` operation
between finding matching fields and then invoking `type()`.


