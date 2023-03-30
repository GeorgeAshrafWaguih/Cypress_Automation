describe ("Check UI Elements", ()=>{
    it ('Radio Buttons Check', ()=>{
        
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        
        // check radio buttons for female and male are visible
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should('be.visible')

        // Selecting the radio button
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.selected')

        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.selected')
    })

    it("Checkboxes check", ()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // Check checkboxes are visibile
        cy.get("input#monday").should('be.visible')
        cy.get("input#tuesday").should('be.visible')
        cy.get("input#wednesday").should('be.visible')
        cy.get("input#thursday").should('be.visible')
        cy.get("input#friday").should('be.visible')
        cy.get("input#saturday").should('be.visible')
        cy.get("input#sunday").should('be.visible')

        // Selecting single checkbox
        cy.get("input#monday").check().should('be.checked')

        // Unselecting checkbox
        cy.get("input#monday").uncheck().should('not.be.checked')

        // Selecting all checkboxes at the same time 
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        // Unselecting all checkboxes at the same time
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        // Selecting first and last checkboxes 
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
    })
})