class Login2
{

    txtUserName="input[placeholder='Username']"
    txtPassword="input[placeholder='Password']"
    btnSubmit="button[type='submit']"
    lblMsg=".oxd-topbar-header-breadcrumb>h6"


    setUserName(username)
    {
        cy.get(this.txtUserName).type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password)
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click()
    }

    verifyLogin()
    {
        cy.get(this.lblMsg).should('have.text','Dashboard')
    }
    
}

export default Login2