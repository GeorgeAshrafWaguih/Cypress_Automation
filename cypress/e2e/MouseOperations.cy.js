import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("Mouse Operations", ()=>{

    it('MouseHover', ()=>{

        cy.visit('https://demo.opencart.com/')
        
        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('not.be.visible')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get('#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a').should('be.visible')

    })


    it('Right Click',()=>{

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        // Approach 1
        // cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')  //contextmenu = mouse right click 
        // cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').should('be.visible')
        

        // Approach 2
        cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        cy.get('.context-menu-item.context-menu-icon.context-menu-icon-copy').should('be.visible')
    })

    it('Double click', ()=>{

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult') // switch to the iframe

        // // Approach 1 - using trigger method
        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        // cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')

        // Approach 2 - dblclick()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
    })

    it('Drag and Drop using Plugin', ()=>{

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').drag('#box106')

    })

    it.only('Scrolling Page', ()=>{

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        // Scroll down to Egypt flag
        cy.get("img[src='flags-normal/flag-of-Egypt.png']").scrollIntoView({duration:2000}).should('be.visible')
        
        // Scroll up to Algeria flag
        cy.get("img[src='flags-normal/flag-of-Algeria.png']").scrollIntoView({duration:2000}).should('be.visible')

        // Scroll to footer section 
        cy.get('#footer').scrollIntoView({duration:2000}).should('be.visible')
    })
})