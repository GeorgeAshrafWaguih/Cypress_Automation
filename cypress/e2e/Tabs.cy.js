describe ('Tabs',()=>{

    it('Tabs - Approach 1', ()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')

        // Remove the target attribute to open the page in the same tab
        cy.get('.example>a').invoke('removeAttr','target').click()
        
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        // back to parent tab
        cy.go('back')
        cy.url().should('include','https://the-internet.herokuapp.com/windows')
    })

    it('Tabs - Approach 2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')

        // Capture the href attribute and use it as url
        cy.get('.example>a').then((e)=>{

            let url = e.prop('href')
            cy.visit(url)
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows')

        // back to parent tab
        cy.go('back')
        cy.url().should('include','https://the-internet.herokuapp.com/windows')
    })
})