const url = 'http://localhost:63342/ClientStudenten/examples/testen/steen-papier-schaar-app/app/index.html?_ijt=rk4hckv0sj2q8hf2a369j9db1s';


context('Title', () => {
    beforeEach(() => {
        cy.visit(url)
    })

    it('Page title should contain text "Steen papier schaar"', () => {
        cy.get('steenpapierschaar-app')
            .shadow()
            .find('[data-cy="page-title"]')
            .should('have.text', 'Steen papier schaar')
    })


    it('After DOM connected tile has img element', () => {
        cy.get('steenpapierschaar-app')
            .shadow()
            .find('#card-steen')
            .shadow()
            .find('img')
            .should('be.visible')
            .should('not.have.class', 'selected')
    })

});
