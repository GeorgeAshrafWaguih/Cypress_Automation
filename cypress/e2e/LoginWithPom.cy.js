import Login from "../PageObjects/Login"
import Login2 from "../PageObjects/Login2"

describe('pom', ()=>{

    // General approach
    it('LoginTest', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type('admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get(".oxd-topbar-header-breadcrumb>h6").should('have.text','Dashboard')
    })

    // POM approach 1
    it('LoginTest1', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        const ln = new Login()
        ln.setUserName("admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })

     // POM approach 2
    it('LoginTest2', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        const ln = new Login2()
        ln.setUserName("admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })

    // POM approach 2 with Fixture
    it.only('LoginTest2', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        
        cy.fixture('orangehrm').then((data)=>{

        const ln = new Login2()
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit()
        ln.verifyLogin()
        })

        
    })
})