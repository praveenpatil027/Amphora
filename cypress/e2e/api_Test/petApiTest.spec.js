import { generateTestId } from "../../support/utils/testDataGenerator";

describe("Pet API CRUD Operations", () => {
  let petId;
  const randomId = generateTestId();
  const url = Cypress.env("petApiUrl");

  it("Create a unique pet and add appropriate assertions", () => {
    cy.fixture("petData").then((Dog) => {
      Dog.id = randomId;
      Dog.name = "MyDog";
      Dog.status = "For Sale";

      cy.request("POST", `${url}/pet`, Dog).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(Dog.name);
        petId = response.body.id;
      });
    });
  });

  it("Update the newly created pet and add appropriate assertions", () => {
    cy.fixture("petData").then((updatedDog) => {
      updatedDog.id = randomId;
      updatedDog.name = "UpdatedMyDog";
      updatedDog.status = "Sold";

      cy.request("PUT", `${url}/pet`, updatedDog).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(updatedDog.name);
        expect(response.body.status).to.eq(updatedDog.status);
      });
    });
  });

  it("Read the newly created pet and add appropriate assertions ", () => {
    cy.request("GET", `${url}/pet/${petId}`, { timeout: 20000 }).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(petId);
        expect(response.body.name).to.eq("UpdatedMyDog");
      },
    );
  });

  it("Delete the newly created pet and add appropriate assertions", () => {
    cy.request("DELETE", `${url}/pet/${petId}`, { timeout: 20000 }).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq(petId.toString());
      },
    );
  });
});
