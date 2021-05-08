import VendooLoginPage from "../integration/page_objects/vendoo_login_page"

const vendooLoginPage = new VendooLoginPage()

describe('Login Form app Vendoo', function() {
    it('Complete user login', function() {
        vendooLoginPage.navigate('http://localhost:3000')
        vendooLoginPage.enterEmail('test30005@test.com')
        vendooLoginPage.enterPassword('123456')
        vendooLoginPage.clickLogin()
        cy.url().should('eq', 'http://localhost:3000/inventory')
    })

    it('Validate correct error message for incorrect passwords', function() {
        vendooLoginPage.navigate('http://localhost:3000')
        vendooLoginPage.enterEmail('test30005@test.com')
        vendooLoginPage.enterPassword('1234567')
        vendooLoginPage.clickLogin()
        cy.get('[style="color: red;"]').should('have.text', 'FORM ERROR: The password is invalid or the user does not have a password.')
    })
})