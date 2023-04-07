import 'cypress-file-upload'

describe('File Uploads',()=>{

    it('Single File Upload',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('sample.pdf')
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example']>h3").should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('sample.pdf')

    })

    it('File Upload - Rename',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'sample.pdf',fileName:'myFile.pdf'})
        cy.get('#file-submit').click()
        cy.wait(5000)
        cy.get("div[class='example']>h3").should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('myFile.pdf')

    })

    it('File Upload - Drag and drop',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('.dz-success-mark.dz-clickable').attachFile('sample.pdf',{subjectType:'drag-n-drop'})
        cy.wait(5000)
        cy.get('#drag-drop-upload > div > div.dz-details > div > span').contains('sample.pdf')
    })

    it('Multiple Files Upload',()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['sample.pdf','sample2.pdf'])
        cy.wait(5000)
        cy.get('#fileList>li').should('have.length','2')
        cy.get('#fileList>li:first-child').should('contain.text','sample.pdf')
        cy.get('#fileList>li:last-child').should('contain.text','sample2.pdf')

    })

    it('File Upload - Shadow Dom',()=>{

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('sample.pdf')
        cy.wait(5000)
        cy.get('.smart-item-name', {includeShadowDom:true}).contains('sample.pdf')
    })
})