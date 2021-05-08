class VendooLoginPage {

    navigate(url) {
        cy.visit(url)
    }

    enterEmail(email) {
        cy.get('#email').type(email)
    }

    enterPassword(password) {
        cy.get('#password').type(password)
    }

    clickLogin() {
        cy.get('button').click()
    }
}
export default VendooLoginPage