describe("Check the Notification Functioanlity", () => {
  it("Notification PL", () => {
    cy.visit("https://staging-env.procurementleague.com/login");
    cy.viewport(1280, 720);
    cy.get(4000);
    cy.get("[name='email']").type("xixabo5201@fenxz.com");
    cy.get("[name='password']").type("ABD786@abd");
    cy.wait(4000);
    cy.get(".mt-36 > .justify-between > .w-full").click();
    cy.get("#headlessui-popover-button-6 > .relative > .flex").click();
    cy.contains("a", "See All").click();
    cy.wait(8000);

    cy.get(".dropdown.icon").click();
    cy.get("div.divider.text").should("contain", "Default");
    cy.get('.notifi_items a[href="/discussions/psl-10-5"]').click();
    cy.contains("button", "back").click();
    cy.get(".dropdown.icon").click();
    cy.contains("span", "Liked By").click();
    cy.contains("span.text", "Answers").click({ force: true });
  });
});
