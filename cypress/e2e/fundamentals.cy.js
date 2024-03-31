describe.skip('Test exists in a describe block', () => {
  it('it blocks are single tests that go inside the describe block', () => {
    cy.visit('http://localhost:3000/fundamentals')
    cy.title().should('example', 'cypress')
  })
})

describe.only('Cypress Fundamentals Testing', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  it('Checks correct header text', () => {
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
  })
  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
    cy.getDataTest('accordion-item1').find('div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('be.visible')
    cy.getDataTest('accordion-item1').find('div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
  })
})