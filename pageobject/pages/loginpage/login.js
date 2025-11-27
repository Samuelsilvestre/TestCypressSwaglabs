

import { elementsHtml as el } from '../loginpage/elementshtml'
// Class para as configu
class Login {

    // metodo privado para o login 
    #loginConfig() {
        
        cy.visit(Cypress.env('URL'))
        cy.get(el.username).type(Cypress.env('USERNAME'))
        cy.get(el.password).type(Cypress.env('PASSWORD'))
        cy.get(el.loginButton).click()
    }
    
    //Metodo de acesso a pagina
    access() {
        this.#loginConfig()
    }
}

export default new Login()