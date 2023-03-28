describe('XpathLocators', () =>{
    it('find no of categories displayed', () => {
        cy.visit("https://www.amazon.com/")

        cy.xpath("//div[@id='gw-card-layout']/div").should('have.length',9)
        // Assert that 9 elements/categories are displayed
    })

    it('chained Xpath', () => {
        cy.visit("https://www.amazon.com/")

        cy.xpath("//div[@id='gw-card-layout']").xpath("./div").should('have.length',9)
        
    })
})