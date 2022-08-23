Feature: Deal

    Feature Description as a user I want to be able to add deals from the deals board.
    Scenario: Add new deal
        Given that Im logged in the pipedrive CRM
        When I click over the +Deal button
        And I fill the data for a new deal
        And click on save
        And click on the item added
        Then the data shown should be the same as inputted

    @defect001
    Scenario Outline: Validate error message when tryes to add a new deal without a mandatory field
        Given that Im logged in the pipedrive CRM
        When I click over the +Deal button
        And I fill the data for a new deal except <field_to_clear>
        And click on save
        Then a message of error should be presented for <field_to_clear> field
        Examples:
            | field_to_clear   |
            | "Contact person" |
            | "Organization"   |
            | "Title"          |