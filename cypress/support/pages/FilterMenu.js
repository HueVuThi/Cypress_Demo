class FilterMenu {
    lbScreenSizeGroup() {
        return cy.xpath('//div[@title="Screen Size Group (inches)"]//div[starts-with(@class,"CardCollaspe__TitleAndBadge")]')
    }

    lbScreenSizeType() {
        return cy.xpath('//div[@title="Screen Size Group (inches)"]//div[starts-with(@class,"Padding-sc")]')
    }

    chkScreenSizeType() {
        return cy.xpath('//div[@title="Screen Size Group (inches)"]//div[@data-testid="btn-checkbox"]')
    }

    filterScreenSize(screenSize) {
        this.lbScreenSizeGroup().scrollIntoView()
        this.lbScreenSizeType().each(($el, index) => {
            const actualScreenSize = $el.text();
            if(actualScreenSize.includes(screenSize)) {
                this.chkScreenSizeType().eq(index).click();
            }
        })
    }

    removeToFilterScreenSize(screenSize) {
        this.lbScreenSizeGroup().scrollIntoView()
        this.lbScreenSizeType().each(($el, index) => {
            const actualScreenSize = $el.text();
            if(actualScreenSize.includes(screenSize)) {
                this.chkScreenSizeType().eq(index).click();
            }
        })
    }
}

export default FilterMenu