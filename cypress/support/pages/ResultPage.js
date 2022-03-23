import FilterMenu from './FilterMenu';
import Header from './Header';
import ProductDetail from './ProductDetail';

class ResultsPage {

    constructor() {
        this.header = new Header();
        this.filterMenu = new FilterMenu()
    }

    lbProductName() {
        return cy.xpath('//span[starts-with(@id,"txt-productName")]')
    }

    lnkProductName() {
        return cy.xpath('//a[starts-with(@id,"lnk-viewProduct") and contains(@id,"name")]')
    }

    chooseProduct(productName) {
        this.lbProductName().each(($el, index) => {
            const actualProductName = $el.text().trim();
            if(actualProductName === productName) {
                this.lnkProductName().eq(index).click({force: true});
            }
        }) 
        return new ProductDetail()
    }

}

export default ResultsPage