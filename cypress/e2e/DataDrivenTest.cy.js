describe("MyTestSuite",()=>{

    it('DataDrivenTest',()=>{

        cy.fixture("orangehrm2").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")


            data.forEach((userdata)=>{
                cy.get("input[name='username']").type(userdata.username)
                cy.get("input[name='password']").type(userdata.password)
                cy.get("button[type='submit']").click()        
                
                if(userdata.username=='Admin'&&userdata.password=='admin123'){
                    // For valid credentials
                    cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected)

                    cy.get('.oxd-userdropdown-tab').click()
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()    // Logout

                }
                else(
                    // For invalid credentials
                    cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text','Invalid credentials')
                )
            })
        })
    })
})