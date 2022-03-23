class CartPage {
    lbProductName() {
        return cy.xpath('//a[starts-with(@id,"lnk-viewProduct")]/div[starts-with(@class,"MultipleLineClamp__ProductCutoffDot")]')
    }

    shouldBeToShowProductInCart(productName) {
        this.lbProductName().each(($el) => {
            const actualProductName = $el.text();
            if(actualProductName.includes(productName)) {
                cy.wrap($el).should('include.text', productName)
            }
        }) 
    }
}

export default CartPage;