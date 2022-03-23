/// <reference types="cypress" />
import HomePage from '../../support/pages/HomePage';

//Test suite
describe("Add to cart scenario", () => {
    before(function () {
        cy.fixture('data_test.json').then(function (data) {
            globalThis.data = data
        })
    })

    //test case
    it("Found product items in cart", () => {
        cy.visit('https://www.powerbuy.co.th/th/')
        var objHome = new HomePage()
        objHome.header.changeLanguageTo(data.EN)
        var objResult = objHome.header.search(data.TV)
        objResult.filterMenu.filterScreenSize(data.size_44_55)
        var objProductDetail = objResult.chooseProduct(data.productName01)
        objProductDetail.addProductToCart()
        objProductDetail.showDangerMessageAndAddProductToCartAgain()
        objProductDetail.showSuccessMessage()
        cy.wait(5000)
        objProductDetail.header.shouldBeToShowNumberOfProductInMiniCart(1)
        objResult = objProductDetail.backToResultPage()
        objResult.filterMenu.removeToFilterScreenSize(data.size_44_55)
        objResult.filterMenu.filterScreenSize(data.size_56_65)
        objResult.chooseProduct(data.productName02)
        objProductDetail.addProductToCart()
        // objProductDetail.showDangerMessageAndAddProductToCartAgain()
        objProductDetail.showSuccessMessage()
        cy.wait(5000)
        objProductDetail.header.shouldBeToShowNumberOfProductInMiniCart(2)
        var objCartName = objProductDetail.header.goToCart()
        objCartName.shouldBeToShowProductInCart(data.productName01)
        objCartName.shouldBeToShowProductInCart(data.productName02)

    });

   
})