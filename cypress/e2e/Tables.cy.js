describe('Tables',()=>{
    
    beforeEach('Login',()=>{

        cy.visit("https://demo.opencart.com/admin/index.php")
        
        // login 
        cy.get('#input-username').type('demo')
        cy.get('#input-password').type('demo')
        cy.get("button[type='submit']").click()
        
        // Close the alert window 
        cy.get('.btn-close').click() 

        // Customers main menu
        cy.get('#menu-customer>a').click()

        // Customer sub menu
        cy.get('#menu-customer>ul>li:first-child').click()

    })

    it('Check Number Rows & Columns',()=>{

        // Assert number of rows
        cy.get(".table>tbody>tr").should('have.length','10')

        // Assert number of columns
        cy.get(".table>thead>tr>td").should('have.length','7')
    })

    it('Check cell data from specific row & Column', ()=>{

        // Assert that the value of 5th rows and 3rd column = princytrainings4@gmail.com
        cy.get('.table>tbody>tr:nth-child(5)>td:nth-child(3)').contains('princytrainings4@gmail.com')

    })

    it('Read all the rows and columns data in the first page',()=>{

        cy.get('.table>tbody>tr').each(($row, index, $rows)=>{

            cy.wrap($row).within(()=>{

                cy.get('td').each( ($col, index, $cols)=>{

                    cy.log($col.text())
                } )
            })
        })

    })

    it('Pagination',()=>{

        // Find total number of pages
        cy.get("div[class='col-sm-6 text-end']").then( (e)=>{
            
            let myText = e.text() // Showing 1 to 10 of 11892 (1190 Pages)
            let totalPages = myText.substring( myText.indexOf("("+1, myText.indexOf("Pages"-2)))
            cy.log(`Total number of Pages ${totalPages}`)

        })

        // Read the data from no of pages
        let noOfPagesToRead = 5

        for(let p=1; p<=noOfPagesToRead; p++){
            if(noOfPagesToRead>1){
                cy.log(`Active page is ${p}`)

                cy.get(`ul[class='pagination']>li:nth-child(${p})`).click()
                cy.wait(3000)

                cy.get('.table>tbody>tr').each( ($row, index, $rows)=>{
                    cy.wrap($row).within( ()=>{
                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text())  // Email address in 3rd column
                        })
                    })
                })
            }
        }

    })
    


})