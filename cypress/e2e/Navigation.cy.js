// go()

describe('mysuite', ()=>{

    it('NavigationTest', ()=>{

        cy.visit('https://demo.opencart.com/')
        cy.title().should('eq','Your Store')  // homepage

        cy.get('#narbar-menu > ul > li:nth-child(7) > a').click()  // navigate to cameras page
        cy.get('#content>h2').should('have.text','Cameras')  

        cy.go('back')
        cy.title().should('eq','Your Store')  // homepage

        cy.go('forward')
        cy.get('#content>h2').should('have.text','Cameras')  // Cameras page

        cy.go(-1) // go back
        cy.title().should('eq','Your Store')  // homepage 

        cy.go(1) // go forward
        cy.get('#content>h2').should('have.text','Cameras')  // cameras page

        cy.reload()
        cy.get('#content>h2').should('have.text','Cameras')  // cameras page


    })
})