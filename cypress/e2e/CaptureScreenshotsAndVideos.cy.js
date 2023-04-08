describe('mysuite', ()=>{

    it('Capture Screenshots & Videos', ()=>{

        cy.visit('https://demo.opencart.com/')

        // cy.screenshot('homepage')
        // cy.wait(5000)
        // cy.get("#logo").screenshot('logo')

        // Capture screenshot automatically & video on failure
        cy.get("a[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=33']").click()
        cy.get('#content>h2').should('have.text','Tablets') // failed assertions
        
    })
})