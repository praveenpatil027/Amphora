import { tabs } from "../../../support/tabs";
import { generateTestUser } from "../../../support/utils/testDataGenerator";

class AmphoraPage {
  //Method to click on the every product and Verify
  clickAllProductsAndVerify() {
    cy.get("nav a").contains("Products").trigger("mouseover", { force: true });

    Object.keys(tabs.Products).forEach((tab) => {
      const tabName = tabs.Products[tab];
      cy.contains(tab).click({ force: true });
      cy.url().should("include", tabName);
      cy.go("back");
      cy.get("nav a")
        .contains("Products")
        .trigger("mouseover", { force: true });
    });
  }

  //Method to Click on the Resources--> Newsletter sign-up and SignUp
  signupNewsletter() {
    cy.get("nav").contains("Resources").trigger("mouseover", { force: true });
    cy.contains("Newsletter sign-up").click({ force: true });
    cy.url().should("include", tabs.Resources["Newsletter sign-up"]);

    const user = generateTestUser();
    cy.get('input[type="email"]').type(user.email);
    cy.get('input[name="contact[first_name]"]').type(user.firstName);
    cy.get('input[name="contact[last_name]"]').type(user.lastName);

    cy.get("button").contains("Sign Up").click({ force: true });
  }

  //Method to verify the succes message
  verifyMessage(message) {
    cy.get(".fs-notifier > span").contains(message).should("be.visible");
  }
}

export default AmphoraPage;
