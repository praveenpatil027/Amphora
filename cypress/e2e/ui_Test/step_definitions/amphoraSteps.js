import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AmphoraPage from "../pages/amphoraPage";

const page = new AmphoraPage();

Given("I open the Amphora website", () => {
  cy.visit(Cypress.env("amphoraUrl"));
});

When("I click on all products under Products dropdown and Verify", () => {
  page.clickAllProductsAndVerify();
});

When("I signup for the newsletter", () => {
  page.signupNewsletter();
});

Then("I should see a confirmation message", () => {
  page.verifyMessage("Thank you for signing up for our newsletter.");
});
