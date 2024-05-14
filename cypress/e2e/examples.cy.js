describe("Various examples", ()=> {
    const navigateAndCheck = (dataTest, expectedPath) => {
        cy.getDataTest(dataTest).click()
        cy.location("pathname").should("eq", expectedPath)
    }

    beforeEach(()=>{
        cy.visit("/examples")
    })

    it("Multi-page testing", ()=> {
        cy.location("host").should("eq", "localhost:3000")
        navigateAndCheck("nav-why-cypress", "/");
        navigateAndCheck("nav-overview", "/overview");
        navigateAndCheck("nav-fundamentals", "/fundamentals");
        navigateAndCheck("nav-forms", "/forms");
        navigateAndCheck("nav-examples", "/examples");
        navigateAndCheck("nav-component", "/component");
        navigateAndCheck("nav-best-practices", "/best-practices");
    })
    it.only('intercepts', () => {
        cy.intercept('POST', 'http://localhost:3000/examples', {
            fixture: 'example.json',
        }).as('post ALIAS')
        cy.getDataTest('post-button').click()
    })
    it.only('testing the grudge list', () => {
        cy.contains(/add some grudges/i)
        cy.get('post-button').should('exist')
    })
})