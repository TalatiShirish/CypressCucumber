const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const LOGINBUTTON = "input[name='submit']"
const URL = "http://zero.webappsecurity.com/login.html"

 class LoginPage {
    static visit() {
        cy.visit(URL);
    }
    static fillUsername(name) {
        cy.get(USERNAME).type(name);
    }
    static fillPassword(name) {
        cy.get(PASSWORD).type(name);
    }
    static clickLogiinButton() {
        cy.get(LOGINBUTTON).click();
    }
    static shouldSeeErrorMessage(){
        cy.get('.alert').should("be.visible");
    }
}

export default LoginPage