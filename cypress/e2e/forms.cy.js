describe('testing "forms" tab', () =>{
    beforeEach(()=> {
        cy.visit('/forms')
    })
    it("test subscribe form", ()=> {
        cy.getDataTest('forms-header').should('contain.text', 'Testing Forms')
    })
})