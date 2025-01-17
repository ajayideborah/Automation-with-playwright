import { expect } from "@playwright/test"
import { Navigation } from "./Navigation"
import { isDesktopViewport } from "../utils/isDestopViewport.js"

export class ProductsPage {
 constructor (page) {
    this.page = page

    this.addButtons = page.locator('[data-qa="product-button"]')
    this.sortDropdown =page.locator('[data-qa="sort-dropdown"]')
    this.productTitle =page.locator('[data-qa="product-title"]') 
    }


     visit = async () => {
       await this.page.goto("/")   
 }
 

    addProductToBasket = async (index) => {
      const specificAddButton = this.addButtons.nth(index)
      await specificAddButton.waitFor()
      await expect(specificAddButton).toHaveText("Add to Basket")
       const navigation = new Navigation(this.page)
       // should only run on destop viewport
       let basketCountBeforeAdding 
       if (isDesktopViewport(this.page)) {
        const basketCountBeforeAdding = await navigation.getBasketCounter()
       }
      await  specificAddButton.click() 
      await expect(specificAddButton).toHaveText("Remove from Basket")
      // should only run on destop viewport
      if (isDesktopViewport(this.page)) {
      const basketCountAfterAdding = await navigation.getBasketCounter()
      //expect(basketCountAfterAdding).toBeGreaterThan(basketCountBeforeAdding)
      }
    }
    sortByCheapest = async() => {
     await this.sortDropdown.waitFor()
     await this.productTitle.first().waitFor()
     const productTitleBeforeSorting = await this.productTitle.allInnerTexts()
     await this.sortDropdown.selectOption("price-asc")
     const productTitleAfterSorting = await this.productTitle.allInnerTexts()
     expect (productTitleAfterSorting).not. toEqual(productTitleBeforeSorting)
    //await this.page.pause()
    }
}