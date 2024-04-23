describe('testing "forms" tab', () =>{
    beforeEach(()=> {
        cy.visit('/forms')
    })
    it("subscribe form - invalid email", ()=> {
        cy.contains(/forms/i)
        cy.contains(/Testing Forms/i)
        cy.getDataTest('subscribe-field').find('input').as('subscribeInput')
        cy.get('@subscribeInput').type('words')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: words!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: words!/i).should('not.exist')

        cy.get('@subscribeInput').click()
        cy.contains(/fail/i)
    })
    it("successful subscription", () => {
        cy.getDataTest('subscribe-field').find('input').type('test@test.com')
        cy.contains(/Successfully subbed: test@test.com/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: test@test.com/i).should('exist')
    })
    it('empty email', ()=>{
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail/i).should('exist')
    })
})