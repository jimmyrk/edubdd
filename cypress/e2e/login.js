import LoginPage from './login.page';
import HomePage from './home.page';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page', () => {
    LoginPage.visit();
    // cy.visit('http://zero.webappsecurity.com/login.html');
});

When('I submit login', () => {
    LoginPage.fillUsername('username');
    LoginPage.fillPassword('password');
    LoginPage.signIn();
    // cy.get('#user_login').type('username');
    // cy.get('#user_password').type('password');
    // cy.contains('Sign in').click();
});

Then('I should see homepage', () => {
    HomePage.verifyHomePage();
    // cy.get('#account_summary_tab > a').should('be.visible');
});

///////////////////////////////////

Given('I open homepage', () => {
    cy.visit('http://zero.webappsecurity.com/');
});

When('I fill the search box with invalid key search', () => {
    cy.get('#searchTerm').type('invalid{enter}');

});

Then('I should see text "No results were found for the query:"', () => {
    cy.get('h2').should('be.visible');
});