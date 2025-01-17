// import { expect, test } from "@playwright/test"
// import { ProductsPage } from "../page-objects/ProductsPage"
// test.skip("Product Page Add To Basket", async({page}) => {
//    await page.goto("/")
//   // await page.pause()

//  const addToBasketButton = page.locator('div').filter({ hasText: /^499\$Add to Basket$/ }).getByRole('button')
//  const basketCounter = page.locator('[data-qa="header-basket-count"]')

//   await addToBasketButton.waitFor()
//   await expect(addToBasketButton).toHaveText("Add to Basket")
//   await expect(basketCounter).toHaveText("0")
//   await addToBasketButton.click()

//   //const removeFromBasketButton = page.locator('div').filter({ hasText: /^Remove from Basket$/ }).first()
//  //await removeFromBasketButton.waitFor()
//  //await expect(removeFromBasketButtontButton).toHaveText("RemovefromBasket")
//    await expect(basketCounter).toHaveText("1")

//    const checkoutLink = page.getByRole('link', { name: 'Checkout' })
//    await checkoutLink.waitFor()
//    await checkoutLink.click()
//    await page.waitForURL("/basket")
//    //await page.pause()

//    // const productPage = new ProductsPage(page)
//    ProductsPage.visit()
//    ProductsPage.sortProductByCheapest()
//    ProductsPage.addItemToBasket(1)
//    Navigation.moveToCheckout()
//    basket.removeCheapestItem()

// })


