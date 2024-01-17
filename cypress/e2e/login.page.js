const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME = '#user_login';
const PASSWORD = '#user_password';
const SIGN_IN = 'Sign in';
// const HOME_PAGE = '#account_summary_tab > a';


class LoginPage {
    static visit() {
        cy.visit(URL);
    }

    static fillUsername(username) {
        cy.get(USERNAME).type(username);
    }

    static fillPassword(password) {
        cy.get(PASSWORD).type(password);
    }

    static signIn() {
        cy.contains(SIGN_IN).click();
    }

    // static verifyHomePage() {
    //     cy.get(HOME_PAGE).should('be.visible');
    // }
}

export default LoginPage;