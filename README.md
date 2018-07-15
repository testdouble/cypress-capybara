# cypress-capybara

A _very_ abbreviated port of Capybara's finders & form methods, rewritten as
cypress commands.

## Installation

```
npm i -D cypress-capybara
```

Then, in your `cypress/support/commands.js` file, add:

```
import 'cypress-capybara/add-commands'
```

## Usage

Here are the commands cypress-capybara implements:

* `cy.findButton(locator, options)` (from
  [`find_button`](https://www.rubydoc.info/github/teamcapybara/capybara/master/Capybara/Node/Finders#find_button-instance_method))
