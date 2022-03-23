# Introduce
The project is used to demo Automation Testing with Cypress using both xpath and Mochawesome reporter to test a scenario on [powerbuy.co.th](https://www.powerbuy.co.th/th/)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:
* Nodejs - [Download and install Nodejs](https://nodejs.org/en/)
* Visual Studio Code - [Download & Install Visual Studio Code](https://code.visualstudio.com/download)
* Cypress - Install via command line:
```
npm install --save-dev cypress
```
* Cypress xpath - Install via command line:
```
npm install --save-dev cypress-xpath
```
## Scenario
```
- Change language to EN
- Search by using the Keyword “TV”
- Filter TV with Screen Size Group (inches) “44 - 55 inches” screen size and add one item
to the cart from the return list
- Filter TV with “56 - 65 inches” screen size and add one item to the cart from the return list
- Check the cart on https://www.powerbuy.co.th/en/cart and validate results of items in the
cart that match with the items that were added in the previous steps or not.
```

## Run Test
Run via command line
```
npx cypress run --browser chrome --reporter cypress-mochawesome-reporter
```
or
```
npm run cy:test
```
## Report
Please access [this link](/cypress/report/index.html) to view report
