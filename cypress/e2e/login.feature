Feature: Login to Application

    As a valid user
    I want to login into Application

    Scenario: Valid login
        Given I open login page
        When I submit login
        Then I should see homepage

    Scenario: Invalid search key
        Given I open homepage
        When I fill the search box with invalid key search
        Then I should see text "No results were found for the query:"



# Feature: Search feature
#     As a valid user
#     I search invalid key

#     Scenario: invalid search key
#         Given I open homepage
#         When I fill the search box with invalid key search
#         Then I should see text "No results were found for the query"
