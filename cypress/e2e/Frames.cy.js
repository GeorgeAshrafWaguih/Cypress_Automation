import 'cypress-iframe'
describe("Frames",()=>{

    it('Frames - approach 1', ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
        
        const iframe = cy.get('#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

        iframe.clear().type("Welcome! {cmd+a}")

        cy.get("button[aria-label='Bold']").click()
    })

    it('Frames - approach 2, Custom Command', ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        // Custom command saved in commands.js file to be used multiple times
        cy.getIframe('#mce_0_ifr').clear().type("Welcome! {cmd+a}")

        cy.get("button[aria-label='Bold']").click()
    })

    it('Frames - approach 3, Cypress-iFrame plugin', ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded('#mce_0_ifr') // load the frame using cypress-iframe plugin
        
        cy.iframe('#mce_0_ifr').clear().type("Welcome! {cmd+a}")

        cy.get("button[aria-label='Bold']").click()
    })
})