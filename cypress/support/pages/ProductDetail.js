import Header from "./Header";
import ResultsPage from "./ResultPage";

class ProductDetail {
    constructor() {
        this.header = new Header();
    }

    btnAddToCart() {
        return cy.xpath('//button[starts-with(@id,"btn-addCart")]')
    }

    lbDangerMessage() {
        return cy.xpath('//div[@type="danger" and contains(@class,"Notification__CustomAlert")]')
    }

    lbSuccessMessage() {
        return cy.xpath('//div[@type="success" and contains(@class,"Notification__CustomAlert")]')
    }

    addProductToCart() {
        this.btnAddToCart().last().click()
    }

    showDangerMessageAndAddProductToCartAgain() {
        cy.on('fail', (e, runnable) => {
            console.log('error', e)
            console.log('runnable', runnable)
      
            // we can simply return false to avoid failing the test on uncaught error
            // return false
            // but a better strategy is to make sure the error is expected
            if (e.name === 'AssertionError' &&
              e.message.includes('Expected to find element: //div[@type="danger" and contains(@class,"Notification__CustomAlert")], but never found it.')) {
              // we expected this error, so let's ignore it
              // and let the test continue
              return false
            }

          })
        this.lbDangerMessage().then(() => {
            this.addProductToCart()
        })
    }

    showSuccessMessage() {
        this.lbSuccessMessage().should('be.visible')
    }

    backToResultPage() {
        cy.go('back')
        return new ResultsPage()
    }
}

export default ProductDetail;