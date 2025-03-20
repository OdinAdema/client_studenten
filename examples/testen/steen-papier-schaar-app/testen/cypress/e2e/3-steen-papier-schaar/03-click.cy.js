const url = 'http://localhost:63342/ClientStudenten/examples/testen/steen-papier-schaar-app/app/index.html?_ijt=rk4hckv0sj2q8hf2a369j9db1s';

context('Click', () => {
    beforeEach(() => {
        cy.visit(url)
    })

    it('Click on tile should mark tile selected', () => {

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-steen')
            .shadow()
            .find('img')
            .click();

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-steen')
            .shadow()
            .find('img')
            .should('have.class', 'selected')

        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-schaar')
            .shadow()
            .find('img')
            .should('have.class', 'selected')

    })

});


