import Login from '../../pageobject/pages/loginpage/login'
import Shopping from '../../pageobject/pages/shoppingpage/shopping'

describe('Teste do carrinho', () => {

    beforeEach(() => {
        Login.access()
    })
    
    it('Verificando a adicão de items ao carrinho', () => {
        //Shopping().validTest()
        Shopping.validTest()
    })
})