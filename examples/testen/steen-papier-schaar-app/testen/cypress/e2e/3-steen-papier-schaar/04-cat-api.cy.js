const url = 'http://localhost:63342/ClientStudenten/examples/testen/steen-papier-schaar-app/app/index.html?_ijt=rk4hckv0sj2q8hf2a369j9db1s';

context('Click', () => {
    beforeEach(() => {
        cy.visit(url)
    })

    it('should show the overlay with cat image', () => {

        // cy.intercept('**/cat*').as('getCatImage')

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-steen')
            .shadow()
            .find('img')
            .click();

        // cy.wait('@getCatImage');

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('win-overlay')
            .shadow()
            .find('img')
            .should('be.visible')

        // cy.screenshot();
    });
});
