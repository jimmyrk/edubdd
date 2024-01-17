const HOME_PAGE = '#account_summary_tab > a';

class HomePage {
    static verifyHomePage() {
        cy.get('#account_summary_tab > a').should('be.visible');
    }
}

export default HomePage;