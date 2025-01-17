 import { isDesktopViewport } from "../utils/isDestopViewport.js"
 
 
export class Navigation {
     constructor (page) {
    this.page = page
   this.basketCounter = page.locator('[data-qa="product-button"]')
   this.checkoutLink =   page.getByRole('link', { name: 'Checkout' })
   this.mobileBurgerButton = page.locator('[data-qa="mobile-navigation"]')
 }

 getBasketCounter = async () => {
    // await this.basketCounter.waitFor()
     const text = await this.basketCounter.innerText
     return parseInt(text, 10)

}

//true if desktop
//false if mobile -> reverse false -> !false === true
goToCheckout = async() => {
  //if mobile viewport, first open the burger menu
  if (!isDesktopViewport(this.page)) {
  await this.mobileBurgerButton.waitFor()
  await this.mobileBurgerButton.click()
  }
   await this.checkoutLink.waitFor()
   await this.checkoutLink.click()
   await this.page.waitForURL("/basket")
 }
}




















