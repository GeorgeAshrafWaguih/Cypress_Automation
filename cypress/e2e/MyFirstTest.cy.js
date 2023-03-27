describe('My First Test',() => {
    it('test1 - verify title - positive', () => {
        // steps
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
    })

    it('test2  - verify title - negative', () => {
        // steps
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
    })
    
})
