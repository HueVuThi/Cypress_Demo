import ResultsPage from "./ResultPage";
import CartPage from "./CartPage";

class Header {

    lnkEnlanguage() {
        return cy.xpath('//a[@id="lnk-setLanguageDesktop-en"]')
    }

    lnkThLanguage() {
        return cy.xpath('//a[@id="lnk-setLanguageDesktop-th"]')
    }

    txtSearchBox() {
        return cy.xpath('//input[@id="txt-searchBox-input"]')
    }

    btnSearch() {
        return cy.xpath('//button[@id="btn-searchBox-input"]')
    }

    lbNumberOfItemOnMiniCart() {
        return cy.xpath('//div[starts-with(@class,"MiniCart__CartQty")]/span')
    }

    lnkMiniCart() {
        return cy.xpath('//a[@id="btn-openMiniCart"]')
    }

    changeLanguageTo(language) {
        if(language === 'EN') {
            this.lnkEnlanguage().click()
        } else {
            this.lnkThLanguage().click()
        }
    }

    search(item) {
        this.txtSearchBox().first().type(item)
        this.btnSearch().first().click()
        return new ResultsPage()
    }

    shouldBeToShowNumberOfProductInMiniCart(number) {
        this.lbNumberOfItemOnMiniCart().last().should('have.text', number.toString())
    }

    goToCart() {
        this.lnkMiniCart().first().click()
        return new CartPage()
    }

}

export default Header