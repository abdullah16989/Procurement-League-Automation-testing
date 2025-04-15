describe("Check the login functionality", () => {
    it("PL login Functionality", () => {
      
        cy.visit('https://staging-env.procurementleague.com/login');
        cy.viewport(1280, 720);
        cy.get(4000)
        cy.get("[name='email']").type("xixabo5201@fenxz.com");
        cy.get("[name='password']").type("ABD786@abd");
        cy.wait(4000)
        cy.get('.mt-36 > .justify-between > .w-full').click()
        cy.get('body').click()
        cy.get('.group.inline-block.nested-dropdown').click({ multiple: true })
        cy.wait(6000)
        cy.contains('a', 'Job Central').should('be.visible').click()
        cy.contains('button', 'select').click();
        cy.contains('li', 'India').click();
        



        cy.wait(8000)
        cy.get(".flex.false.items-center.w-full.gap-3").type("Purchasing Manager")
        cy.contains('button', 'Search').click();
        cy.get(8000)
        cy.contains('button', 'Apply Now').click();
        cy.get('#full-name').type('Khan Mehmood');
        cy.get('#email-address').should('have.value', 'xixabo5201@fenxz.com');

        cy.get('#phone').type('03217289498');
        cy.get('#address').type('Jallo Park Lahore');
        cy.get('#notice_period').type('10');
        cy.get('#shortPitch').type('SQA Engineer');
        cy.get('#resume').selectFile('cypress/fixtures/Abdullah SQA Resume.pdf', { force: true });
        cy.wait(6000)

        

        const filepath = "Abdullah SQA Resume.pdf"
        cy.get("input[type = 'file']").attachFile(filepath)
        cy.contains('button', 'SUBMIT').should('be.visible').click(); 
      
        cy.contains('a', 'Pricing').click({ force: true });
      
        cy.contains('a', 'Connection forum').should('be.visible').click()
        cy.get('input[placeholder="Search discussion by titles"]') .type('Abccc')
        cy.contains('button', 'Search').click();
      
        cy.contains('p', "What's Hot").should('be.visible').click();
        cy.contains('p', "What's New").should('be.visible').click();
        cy.contains('p', 'Un-Answered').should('be.visible').click();
        cy.contains('p', 'My Discussion').should('be.visible').click();
      
        // cy.contains('p', 'Expert Opinion').should('be.visible').click();
        // // cy.contains('p', 'Rfq').should('be.visible').click();
      
        cy.contains('p', 'Saved Discussion').should('be.visible').click();
        // cy.contains('p', 'All').should('be.visible').click();
      
        cy.contains('p', 'Strategic Sourcing').should('be.visible').click();
        cy.contains('p', 'Category Management').should('be.visible').click();
        cy.contains('p', 'Contracting').should('be.visible').click();
        cy.contains('p', 'Purchasing').should('be.visible').click();
        cy.contains('p', 'Payment & Help Desk').should('be.visible').click();
        cy.get('p.font-normal.Poppins.text-base.text-white').should('exist')
        cy.contains('p', 'CDMO').should('be.visible').click();  
        cy.contains('p', 'CRO').should('be.visible').click();
        cy.contains('p', 'Healthcare').should('be.visible').click();
      
        cy.contains('a', 'Start A Discussion').click({force: true});
        cy.get('textarea[placeholder="Type your Title"]').type("PSL 10")
        cy.get('.editor-class div[contenteditable="true"]').type("Starting Soon")
      
        cy.contains('p', 'Select Topic').click();
        cy.get('input[type="checkbox"][value="2"]').check();
        cy.get('button[aria-label="close"]').click();
      
        cy.contains('p', 'Tags').click();
        cy.get('input[type="checkbox"][value="4"]').check({ force: true });
        cy.get('button[aria-label="close"]').click();
      
        cy.contains('button', 'Post').click();
        


      });
    });
