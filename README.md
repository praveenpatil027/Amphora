# Amphora
# Project Name (Amphora Assignment)

Brief description of the project and its purpose.

## Features

- UI Test Automation using Cypress
- API Test Automation using Cypress
- BDD Support with Cucumber
- Environment-Specific Configurations
- HTML Test Reports using Mochawesome
- Screenshots and Video Recording on Test Failure


## Project Structure

cypress/ 
├── e2e/ 
│ ├── ui_Test/ 
│ │ ├── features/ # BDD Feature files 
│ │ ├── step_definitions/ # Step definitions 
│ │ └── pages/ # POM files 
│ └── api_Test/ # API tests 
├── fixtures/ # Static test data 
├── support/ # Reusable commands & configs 
├── reports/ # Test execution reports 
├── videos/ # Test run recordings 
├── screenshots/ # Failure screenshots

## Prerequisites

- Node.js (v16+ recommended)
- npm
- Cypress

## Installation

- git clone https://github.com/your-username/your-repo.git
- cd your-repo
- npm install

## Execution

- Single file = npx cypress run --spec "cypress/e2e/ui_Test/features/yourfile.feature"
- Run Cypress = npx cypress open
- Project Run = npm run test:report

## Reports

- cypress/reports/mochawesome.html


