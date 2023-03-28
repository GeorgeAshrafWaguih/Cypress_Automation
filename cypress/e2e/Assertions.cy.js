describe ("Assertions demo", ()=>{
    it("Implicit assertions", () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        // should   and 
        // cy.url().should('include','orangehrmlive.com')
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')
        
        /*cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')*/

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
        .and('not.contain','greyhrm')
        
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        // Check the logo is visible
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist') // check logo exist

        //check that no of links=5
        cy.xpath('//a').should('have.length','5') 

        // type Admin in username field
        cy.get(".oxd-input[name='username']").type("Admin") 
        
        //Check that Admin is the value in the username field
        cy.get(".oxd-input[name='username']").should('have.value','Admin') 
    })

    it("Explicit assertions", () => {
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        // type Admin in username field
        cy.get(".oxd-input[name='username']").type("Admin") 
        
        // type admin123 in the password field
        cy.get(".oxd-input[name='password']").type("admin123")

        // Click on login button
        cy.get(".oxd-button[type='submit']").click()

        // custom function to check the username is displayed after login
        let expName='nitya Collings'

        cy.get(".oxd-userdropdown-name").then( (x)=> {
            let actName = x.text()
            
            // BDD
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            // TDD
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        })
    })
})