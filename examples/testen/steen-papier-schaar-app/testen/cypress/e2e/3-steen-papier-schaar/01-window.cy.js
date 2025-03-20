const url = 'http://localhost:63342/ClientStudenten/examples/testen/steen-papier-schaar-app/app/index.html?_ijt=rk4hckv0sj2q8hf2a369j9db1s';

context('Window', () => {
  beforeEach(() => {
    cy.visit(url)
  })

  it('cy.window() - get the global window object', () => {
    cy.window().should('have.property', 'top')
  })

  it('cy.document() - get the document object', () => {
    // https://on.cypress.io/document
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
  })

  it('cy.title() - get the title', () => {
    // https://on.cypress.io/title
    cy.title().should('include', 'Steen Papier Schaar');
  })
})


