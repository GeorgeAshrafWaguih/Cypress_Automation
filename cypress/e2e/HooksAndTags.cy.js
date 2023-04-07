/* Hooks
// before
// after
// beforeEach
// afterEach */

/**Tags
 * skip
 * only
 */


describe('MyTestSuire', ()=>{

    before(()=>{
        cy.log('*****   Launch app   *****')
    })

    after(()=>{
        cy.log('*****   Closing app   *****')
    })

    beforeEach(()=>{

        cy.log('*****   Login   *****')
    })

    afterEach(()=>{

        cy.log('*****   Logout   *****')
    })

    it('search', ()=>{

        cy.log('*****   searching   *****')
    })

    it('advanced search',()=>{

        cy.log('*****   advanced searching   *****')
    })

    it('listing Products',()=>{
        
        cy.log('*****   Listing products   *****')
    })
})