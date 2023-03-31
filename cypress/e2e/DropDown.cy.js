/// <reference types="Cypress"/>

describe('Dropdowns', ()=>{
    it.skip('Dropdown with select', ()=>{
       cy.visit("https://www.zoho.com/commerce/free-demo.html") 

       cy.get("#zcf_address_country").select("Finland").should('have.value','Finland')
    })


    it.skip('Dropdown without select', ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/") 
 
        cy.get("#select2-billing_country-container").click()
        cy.get('input.select2-search__field').type("Finland").type('{enter}')
        cy.get("#select2-billing_country-container").should('have.text','Finland')
     })

     it.skip('Dropdown with Autosuggestion', ()=>{

        cy.visit('https://www.wikipedia.org/')

        cy.get('input#searchInput').type('Cairo')

        cy.get('h3.suggestion-title').contains(' International Airport').click()

        cy.title().should('equal','Cairo International Airport - Wikipedia')
     })

     it('Dropdown Dynamic', ()=>{

        cy.visit('https://www.google.com/')

        cy.get('input.gLFyf').type('cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length','12')

        cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{
            if($el.text()=='cypress automation tutorial') {
                cy.wrap($el).click()
            }
        })

        cy.get('input.gLFyf').should('have.value','cypress automation tutorial')
     })
})