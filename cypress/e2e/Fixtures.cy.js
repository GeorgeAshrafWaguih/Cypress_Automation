

describe('MyTestSuite', ()=>{

    // Direct access
    it('FixturesDemoTest', ()=>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")

        cy.fixture('orangehrm.json').then((data)=>{
            
        cy.get("input[name='username']").type(data.username)
        cy.get("input[name='password']").type(data.password)
        cy.get("button[type='submit']").click()

        cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',data.expected)
    })
    })

    // Access through Hook - for multiple it blocks
    let userdata
    before(()=>{
        cy.fixture('orangehrm').then((data)=>{
            userdata = data

        })
    })
    
    it('FixturesDemoTest', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")
            
        cy.get("input[name='username']").type(userdata.username)
        cy.get("input[name='password']").type(userdata.password)
        cy.get("button[type='submit']").click()

        cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected)

    })
})