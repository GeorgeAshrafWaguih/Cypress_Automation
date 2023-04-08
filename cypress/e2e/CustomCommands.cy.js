// Click on link using label
// over writing existing contains() command
// re-usuable custom command

describe('Custom Commands',()=>{

    it('handling links', ()=>{

        cy.visit('https://demo.nopcommerce.com/')
        
        // // Direct approach
        // cy.get('.product-title>a[href="/apple-macbook-pro-13-inch"]').click()
        // cy.get('.product-name>h1').should('have.text','Apple MacBook Pro 13-inch')

        // using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get('.product-name>h1').should('have.text','Apple MacBook Pro 13-inch')
    })

    it('overwriting existing command', ()=>{

        cy.visit('https://demo.nopcommerce.com/')

        // using custom command
        cy.clickLink("APPLE MACBOOK PRO 13-inch")
        cy.get('.product-name>h1').should('have.text','Apple MacBook Pro 13-inch')
    })

    it.only('Login command',()=>{
        
        cy.visit('https://demo.nopcommerce.com/')

        // Login link
        cy.clickLink("Log in")
        cy.loginapp("test@gmail.com","test123")

        cy.get('.ico-account').should('have.text','My account')
        
    })
})