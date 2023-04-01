describe('Alerts', ()=>{

    // Javascript Alert: It will have some text and an 'OK' button
    it('Js alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })
        // alert window is closed automatically by cypress

        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    // Javascript confirm Alert: It will have some text with 'OK' and 'Cancel' buttons
    it('Js confirmation alert - OK', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })

        // Ok is clicked automatically by cypress
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('Js Confirmation alert - Cancel',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click()

        // For closing the alert by using cancel and not OK
        cy.on('window:confirm', ()=>false)

        cy.get('#result').should('have.text','You clicked: Cancel')
    })


    // Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK'

    it('Js prompt alert - OK',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // the text to be added in the prompt before clicking on the alert
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Test')
        })

        cy.get("button[onclick='jsPrompt()']").click()

        cy.get('#result').should('have.text','You entered: Test')
    })

    // Authenticated Alert
    // approach 1: Pass username and Password in the url 
    it('Authenticated Alert - approach 1', ()=>{

        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{username:"admin",password:"admin"}})

        cy.get('div.example').should('contain.text','Congratulations')
    })

    // approach 2: inject username and password in url
    it('Authenticated Alert - approach 2', ()=>{

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        cy.get('div.example').should('contain.text','Congratulations')
    })

})