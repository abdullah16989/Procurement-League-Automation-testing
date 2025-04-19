describe("RFQ page Functionality", () => {
    it("Check the RFQ Page Functionality", () => {
      cy.visit("https://staging-env.procurementleague.com/login");
      cy.viewport(1280, 720);
      cy.get(4000);
      cy.get("[name='email']").type("xixabo5201@fenxz.com");
      cy.get("[name='password']").type("ABD786@abd");
      cy.wait(4000);
      cy.get(".mt-36 > .justify-between > .w-full").click();
      cy.get("body").click();
      cy.visit("https://staging-env.procurementleague.com/discussions");
      cy.get("[name='email']").type("xixabo5201@fenxz.com");
      cy.get("[name='password']").type("ABD786@abd");
      cy.wait(4000);
      cy.get(":nth-child(1) > :nth-child(5) > .text-white").click();
      cy.contains("p", "Expert Opinion").click();
      cy.contains("p", "Rfq").click();
      cy.get('input[placeholder="Search by title"]').type("Same");
  
      cy.visit(
        "https://staging-env.sourcinggenie.io/auto-login/L1RiQ0Vhd0JVRFB0KzFmdkJCL2RPbGxZNlQxb2lnZEVxR0UzRUhFaVMwaWtZc3M5WHhzLzQ3bXl2MktIUjVrYw==/buyer/1"
      );
  
      cy.visit("https://staging-env.procurementleague.com/rfqs", () => {});
  
      cy.contains("p", "Last 24 Hours").click();
      cy.contains("p", "Last 7 Days").click();
      cy.contains("p", "This month").click();
      cy.contains("p", "Last month").click();
      cy.contains("button", "select").click();
      cy.contains("li", "Bankruptcy Law").click();
  
      cy.contains("button", "select").click();
  
      cy.contains("li", "Aerospace & Defense").click();
      cy.contains("button", "Submit Quotation").click();
      cy.contains('button', 'Existing User').click();
      
  
      
      cy.visit(
      
        "https://staging-env.sourcinggenie.io/login"
      );
  
      cy.visit("https://staging-env.procurementleague.com/rfqs", () => {});
      cy.contains("button", "Submit Quotation").click();
      cy.contains("button", "New User").click();
  
    });
   
  });
  