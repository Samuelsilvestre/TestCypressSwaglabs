import { elementsHtml as el } from './elements'

//class que realiza automação no carrinho

class Shopping {


    
    #addToCart() {

        cy.get(el.bikeLightButton).click()
        cy.get(el.backpackButton).click()

    }

    validTest() {
        this.#addToCart()

        cy.get(el.cartBadge)
          .should('be.visible')
          .and('have.text', '2')
        cy.screenshot('adicionando produto ao carrinho')  

    }
}

export default new  Shopping()