/**
 * Automated Testing
 */
describe("Render the Calculator", () => {
    it("Renders Correctly", () => {
        cy.visit("/")
        cy.get("#container").should("exist")
    })

    it("Input Number Correctly", () => {
        cy.visit("/")
        cy.contains("2").click('center')
        cy.contains("+").click('center')
        cy.contains("2").click('center')
        cy.contains("x").click('center')
        cy.contains("2").click('center')
        cy.get("button[name='=']").click('center')
        cy.contains("(").click('center')
        cy.contains("2").click('center')
        cy.contains("+").click('center')
        cy.contains("2").click('center')
        cy.contains(")").click('center')
        cy.contains("2").click('center')
        cy.get("button[name='=']").click('center')
        cy.contains("C").click('center')
        cy.get("button[name='cans']").click('center')
    })

    it("Checking Brackets", () => {
        cy.visit("/")
        cy.contains(")").click('center')
        cy.contains("(").click('center')
        cy.contains(")").click('center')
        cy.contains("x").click('center')
        cy.contains("+").click('center')
        cy.contains("2").click('center')
        cy.contains("x").click('center')
        cy.contains(")").click('center')
        cy.contains("3").click('center')
        cy.contains(")").click('center')
        cy.get("button[name='=']").click('center')
        cy.get("button[name='C']").click('center')
        cy.get("button[name='cans']").click('center')
    })
})