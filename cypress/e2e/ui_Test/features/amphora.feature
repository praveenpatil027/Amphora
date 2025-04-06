Feature: Amphora Website Testing

  Scenario: Navigate to each product and verify the page
   Given I open the Amphora website
   When I click on all products under Products dropdown and Verify

  Scenario: Signup for the newsletter
   Given I open the Amphora website
   When I signup for the newsletter
   Then I should see a confirmation message
