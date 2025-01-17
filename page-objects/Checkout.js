import { expect }  from"@playwright/test"
import { timeout } from "../playwright.config"

export class Checkout {
    constructor(page) {
        this.page = page

        this.basketCard = page.locator('[data-qa="basket-card"]') 
        this.basketItemPrice = page.locator('[data-qa="basket-item-price"]')
        this.basketItemRemoveButton = page.locator('[data-qa="basket-card-remove-item"]')
        this.continueToCheckoutButton = page.locator('[data-qa="continue-to-checkout"]')
        
    }
    removeCheapestProduct = async () => {
     await this.basketCard.first().waitFor()
     const itemBeforeRemoval = await this.basketCard.count()
     await this.basketCard.first().waitFor()
     const allPriceTexts = await this.basketItemPrice.allInnerTexts()
     const justNumbers = allPriceTexts.map ((element) => {
     const withoutDollarSign = element.replace ("$", "")
     return parseInt (withoutDollarSign, 10) 

     })
     const smallestPrice = Math.min(...justNumbers)
     const smallestPriceIdx = justNumbers.indexOf(smallestPrice)
     const specificRemoveButton = this.basketItemRemoveButton.nth(smallestPriceIdx)
     await specificRemoveButton.waitFor()
     await specificRemoveButton.click()
     await expect (this.basketCard). toHaveCount(itemBeforeRemoval -1)
    //  await this.page.pause()
    }
    continueToCheckout = async () => {
    await this.continueToCheckoutButton.waitFor()
    await this.continueToCheckoutButton.click()
    await this.page.waitForURL(/\/login/, {timeout: 3000} )
    }
    
}