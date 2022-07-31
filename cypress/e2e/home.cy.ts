describe('Home page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000');
  })

  it('should show the correct text in h1 tag', () => {
    cy.get('[data-test="hero-heading"]').contains('Testing Next.js Applications with Cypress')
  })

  it.only('should list the correct features',()=>{
    cy.get('dt').eq(0).contains('4 Courses')
    cy.get('dt').eq(1).contains('25+ Lessons')
    cy.get('dt').eq(2).contains('Free and Open Source')
  })
})