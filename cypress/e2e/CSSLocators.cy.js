describe ('CSSLocators', ()=>{
  
    it("csslocators", ()=>{
        cy.visit("https://www.amazon.com/")

        cy.get("#twotabsearchtextbox").type("T-shirts")  // used id to locate element 

        cy.get("input[value='Go']").click()  // locate the submit button

        cy.get("span[class='a-color-state a-text-bold']").contains("T-shirts") // Assertion for results

    })
})
