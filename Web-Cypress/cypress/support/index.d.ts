/// <reference types="cypress" />
/// <reference types="cypress-grep" />

import { Promise } from "cypress/types/cy-bluebird";

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Validates all of the selectors in the Shopify Header for a Subscribed User.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.shopifyHeaderSubscribed(exclude);'
     */
    shopifyHeaderSubscribed(array: array): Chainable<any>;

    /**
     * Validates all of the selectors in the Shopify Header for an Unsubscribed User.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.shopifyHeaderUnsubscribed(exclude);'
     */
    shopifyHeaderUnsubscribed(array: array): Chainable<any>;

    /**
     * Validates all of the selectors in the Shopify Header for a Guest.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.shopifyHeaderGuest(exclude);'
     */
    shopifyHeaderGuest(array: array): Chainable<any>;

    /**
     * Validates all of the selectors in the Shopify Footer.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.shopifyFooter(exclude);'
     */
    shopifyFooter(array: array): Chainable<any>;

    /**
     * Validates all of the selectors in the Shopify Header for a Guest in Responsive view.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.responsiveShopifyHeaderGuest(exclude);'
     */
    responsiveShopifyHeaderGuest(array: array): Chainable<any>;

    /**
     * Validates all of the selectors in the Shopify Header for an Unsubscribed user in Responsive view.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.responsiveShopifyHeaderUnsubscribed(exclude);'
     */
    responsiveShopifyHeaderUnsubscribed(array: array): Chainable<any>;

    /**
     * Validates all of the selectors in the Shopify Header for a Subscribed user in Responsive view.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.responsiveShopifyHeaderSubscribed(exclude);'
     */
    responsiveShopifyHeaderSubscribed(array: array): Chainable<any>;

    /**
     * Validates all of the selectors in the Shopify Footer in Responsive view.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.responsiveShopifyFooter(exclude);'
     */
    responsiveShopifyFooter(array: array): Chainable<any>;

    /**
     * Validates all of the selectors in the App Header for a Guest.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.appHeaderGuest(exclude);'
     */
    appHeaderGuest(array: array): Chainable<any>;

    /**
     * Validates all of the selectors in the App Header for an Unsubscribed User.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.appHeaderUnsubscribed(exclude);'
     */
    appHeaderUnsubscribed(array: array): Chainable<any>;

    /**
     * Validates all of the selectors in the App Header for a Subscribed User.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.appHeaderSubscribed(exclude);'
     */
    appHeaderSubscribed(array: array): Chainable<any>;

    /**
     * Validates all of the selectors in the App Footer in Responsive View.
     *
     * Exclude usage:
     * Declare array with selectors to exclude as string
     * 'let exclude = ['appHeader.getFreeTrialButton'];'
     *
     * Call command with array in parameter
     * 'cy.responsiveAppFooter(exclude);'
     */
    responsiveAppFooter(array: array): Chainable<any>;

    /**
     * Login an Unsubscribed User.
     *
     * Email: pvolvetestautomation+[ENV]_001@gmail.com
     */
    loginUnsubscribedUser(): Chainable<any>;

    /**
     * Login a Subscribed User.
     *
     * Email: pvolvetestautomation+[ENV]_002@gmail.com
     */
    loginSubscribedUser(): Chainable<any>;

    /**
     * Login a Subscribed User.
     *
     * This Account Joins and leaves the Phase and Function series.
     *
     * Avoid using this account for anything but Phase and Function testing.
     *
     * Email: pvolvetestautomation+[ENV]_003@gmail.com
     */
    loginSubscribedUserPhaseFunction(): Chainable<any>;

    /**
     * Login an Unsubscribed User.
     *
     * This Account's password changes for verifying the change password
     * functionality.
     *
     * Avoid using this account for anything but the change password test.
     *
     * Email: pvolvetestautomation+[ENV]_004@gmail.com
     */
    loginUnsubscribedUserPassword(): Chainable<any>;

    /**
     * Login a Subscribed User.
     *
     * This Account Joins and leaves a random series.
     *
     * Avoid using this account for anything but series testing.
     *
     * Email: pvolvetestautomation+[ENV]_005@gmail.com
     */
    loginSubscribedUserSeries(): Chainable<any>;

    /**
     * Login a Subscribed User.
     *
     * This Account is in the FTU state.
     *
     * Do not use this account for anything but verifying the FTU
     * state of the My Plan page.
     *
     * Email: pvolvetestautomation+[ENV]_006@gmail.com
     */
    loginSubscribedUserFTU(): Chainable<any>;

    /**
     * Login a Subscribed User.
     *
     * This Account is in the Phase and Function series.
     * Avoid leaving the Phase and Function series on this account.
     *
     * Avoid using this account for anything but Phase and Function testing.
     *
     * Email: pvolvetestautomation+[ENV]_007@gmail.com
     */
    loginSubscribedUserPhaseFunctionSeries(): Chainable<any>;

    /**
     * Login a Subscribed Optum User.
     *
     * Avoid using this account for anything but Optum verification.
     *
     * Email: pvolvetestautomation+[ENV]_008@gmail.com
     */
    loginSubscribedOptumUser(): Chainable<any>;

    /**
     * Login a Subscribed User.
     *
     * This Account verifies video completion.
     *
     * Avoid using this account for anything but video completion.
     *
     * Email: pvolvetestautomation+[ENV]_009@gmail.com
     */
    loginSubscribedUserVideoComplete(): Chainable<any>;

    /**
     * Login a Recharge User.
     *
     * This Account verifies video completion.
     *
     * Avoid using this account for anything but recharge user functionalities.
     *
     * Email: automation.test@test.com
     */
    loginRechargeUser(): Chainable<any>;

    /**
     * Login a Recharge User and store auth token.
     *
     * This Account verifies video completion.
     *
     * Avoid using this account for anything but recharge user functionalities.
     *
     * Email: automation.test@test.com
     */
    loginRechargeUserAndStoreAuthToken(): Chainable<any>;

    /**
     * Login a Recharge User with multiple workouts completed and store auth token
     *
     * This Account is set to the series complete state.
     *
     * Avoid using this account for anything but recharge user functionalities.
     *
     * Note: Currently only set up for QA & Prod.
     *
     * Email:crodriguez+test1@sweatworks.net
     */
    loginRechargeUserSeveralWorkoutsCompletedAndStoreAuthToken(): Chainable<any>;

    /**
     * Assert the entered array of elements is visible.
     *
     * ex: cy.assertVisible(array);
     */
    assertVisible(array: array): Chainable<any>;

    /**
     * Assert the entered array of elements is not visible.
     *
     * ex: cy.assertNotVisible(array);
     */
    assertNotVisible(array: array): Chainable<any>;

    /**
     * Assert the entered array of elements exists.
     *
     * Avoid using this when possible.
     *
     * ex: cy.assertExist(array);
     */
    assertExist(array: array): Chainable<any>;

    /**
     * Assert the entered array of elements not exists.
     *
     * Avoid using this when possible.
     *
     * ex: cy.assertNotExist(array);
     */
    assertNotExist(array: array): Chainable<any>;

    /**
     * Assert the entered element has certain attribute.
     *
     * ex: element.assertAttribute(attributeName, attributeValue);
     */
    assertAttribute(
      element: any,
      attributeName: string,
      attributeValue: string,
    ): Chainable<any>;

    /**
     * Assert the entered element contains certain value value in its attribtute.
     *
     * ex: element.assertAttributeContains(attributeName, attributeValue);
     */
    assertAttributeContains(
      element: any,
      attributeName: string,
      attributeValue: string,
    ): Chainable<any>;

    /**
     * Assert the entered element has certain css.
     *
     * ex: element.assertCss(cssName, cssValue);
     */
    assertCss(element: any, cssName: string, cssValue: string): Chainable<any>;

    /**
     * Assert the entered element is enabled.
     *
     * ex: element.assertIsEnabled(true);
     */
    assertIsEnabled(element: any, expectedInteration: any): Chainable<any>;

    /**
     * Assert the entered element content contains expectedText.
     *
     * ex: element.assertTextContains(element, expectedText);
     */
    assertTextContains(element: any, expectedText: any): Chainable<any>;

    /**
     * Assert the entered element content does not contain expectedText.
     *
     * ex: element.assertTextNotContains(element, expectedText);
     */
    assertTextNotContains(element: any, expectedText: any): Chainable<any>;

    /**
     * Assert the entered element content is not equals to expectedText
     *
     * ex: element.assertTextNotEquals(expectedText);
     */
    assertTextNotEquals(element: any, expectedText: any): Chainable<any>;

    /**
     * Assert the entered element content is equals to expectedText
     *
     * ex: element.assertTextEquals(expectedText);
     */
    assertTextEquals(element: any, expectedText: any): Chainable<any>;

    /**
     * Assert element text matches pattern
     *
     * ex: cy.assertTextMatchesPattern(expectedPattern);
     */
    assertTextMatchesPattern(
      element: any,
      expectedPattern: any,
    ): Chainable<any>;

    /**
     * Assert the current url
     *
     * ex: cy.assertUrl(expectedUrl);
     */
    assertUrl(expectedUrl: any): Chainable<any>;

    /**
     * Assert current url matches pattern
     *
     * ex: cy.assertUrlPattern(assertUrlPattern);
     */
    assertUrlPattern(expectedUrl: any): Chainable<any>;

    /**
     * Assert the entered element has certain property.
     *
     * ex: element.assertProperty(propertyName, propertyValue);
     */
    assertProperty(
      element: any,
      propertyName: string,
      propertyValue: string,
    ): Chainable<any>;

    /**
     * Assert video rearches target seconds
     *
     * ex: cy.assertVideoReachedSeconds(element, 2.5);
     */
    assertVideoReachedSeconds(videoElement: any, targetSeconds): Chainable<any>;

    /**
     * Retrieves text from element
     *
     * ex: cy.getTextFromElement(element);
     */
    getTextFromElement(element: any): Chainable<any>;

    /**
     * Waits for an app side page to finish loading.
     *
     * Time usage:
     * Declare the desired timeout time for the function in ms.
     * Default timeout time is 5000.
     *
     * ex: cy.waitForAppPageLoad(time);
     */
    waitForAppPageLoad(time: any): Chainable<any>;

    /**
     * Waits for a shopify side page to finish loading.
     *
     * Time usage:
     * Declare the desired timeout time for the function in ms.
     * Default timeout time is 5000.
     *
     * ex: cy.waitForShopifyPageLoad(time);
     */
    waitForShopifyPageLoad(time: any): Chainable<any>;

    /**
     * Navigates to an entered video and waits for it to complete.
     *
     * ex: cy.videoComplete('ankle-and-foot-modifications-MOD1021-S4')
     *
     * Can handle an array of inputted videos
     * it will complete each video in order of them entered
     *
     * Note: must call this command from an app side page.
     */
    videoComplete(videos: array): Chainable<any>;

    /**
     * Sends the network request for the entered workout_ID to be completed
     *   on the SubscribedUserVideoComplete account
     *   (pvolvetestautomation+[env]_009@gmail.com)
     *
     * ex: cy.videoCompleteV2('6dyJd7SYga5Ef13yAus9dZ')
     *
     * Can handle an array of inputted videos
     * it will complete each video in order of them entered
     *
     * Note: workout_ID is different from the SKU, the easiest way to obtain a
     *   workout_ID is to watch a video on the site and look into the video_events
     *   network requests and search the payload for the workout_id.
     */
    videoCompleteV2(workout_ID: array): Chainable<any>;

    /**
     * Send post request using bearer token and body
     * ex: cy.sendPost("https://server.com/path", "asbc", {param: value}, 200, (response) => {validation});
     */
    sendPost(
      path,
      token,
      expectedStatusCode,
      body = {},
      validateResponse = null,
    ): Chainable<any>;

    /**
     * Send post request using bearer token and body
     * ex: cy.sendPut("https://server.com/path", "asbc", {param: value}, 200, (response) => {validation});
     */
    sendPut(
      path,
      token,
      expectedStatusCode,
      body = {},
      validateResponse = null,
    ): Chainable<any>;

    /**
     * Send post request using bearer token and body
     * ex: cy.sendGet("https://server.com/path", "asbc", 200, (response) => {validation});
     */
    Cypres;
    sendGet(
      path,
      token,
      expectedStatusCode,
      validateResponse = null,
    ): Chainable<any>;

    /**
     * Remove Workouts from favorites post request using bearer token
     * ex: cy.removeFromFavorites("1233882");
     */
    removeFromFavorites(...workoutIds): Chainable<any>;

    /**
     * Add Workouts to favorites post request using bearer token
     * Users needs to store token when logging in
     * ex: cy.addToFavorites("1233882");
     */
    addToFavorites(...workoutIds): Chainable<any>;

    /**
     * Remove user from Series post request using bearer token
     * ex: cy.leaveFromSeries("1233882");
     */
    leaveFromSeries(seriesId): Chainable<any>;

    /**
     * Enroll user to Series post request using bearer token
     * ex: cy.enrollToSeries("1233882");
     */
    enrollToSeries(...workoutIds): Chainable<any>;

    /**
     * Start Workouts Session from get request using bearer token
     * Users needs to store token when logging in
     * ex: cy.startWorkoutSession("1233882");
     */
    startWorkoutSession(workoutId): Chainable<any>;

    /**
     * End Workout Session from get request using bearer token
     * Users needs to store token when logging in
     * ex: cy.endWorkoutSession("1233882", "session123", 100);
     */
    endWorkoutSession(workoutId): Chainable<any>;

    /**
     * Set useful allure environment variables
     * ex: cy.setAllureEnvironmentVariables();
     */
    setAllureEnvironmentVariables(): Chainable<any>;

    /**
     * Set useful allure environment variables
     * ex: cy.setMetadataToAllureReport(allureMetadataManager);
     */
    setMetadataToAllureReport(allureMetadataManager): Chainable<any>;

    /**
     * Cancel LVS reservation
     * Users needs to store token when logging in
     * ex: cy.cancelLvsReservation("23123");
     */
    cancelLvsReservation(reservationId): Chainable<any>;

    /**
     * Picks day in calendar in live page
     * Users needs to store token when logging in
     * ex: cy.pickNextDayInLvsCalendar(4)
     * max day should less than the 28, 29, 30, 31 days depending on month
     */
    pickNextDayInLvsCalendar(daysToMoveFromCurrentDate): Chainable<any>;

    /**
     * Retrieves workouts using pagination.
     * Users needs to store token when logging in
     * ex: cy.getWorkouts(0, 50)
     */
    getWorkouts(pageNumber, resultsPerPage): Promise<any>;

    /**
     * Complete Workout Session from get request using bearer token
     * Users needs to store token when logging in
     * ex: cy.completeWorkoutSession({workoutId: "1233", videoDuration: 1000});
     *
     */
    completeWorkoutSession(workout): Promise<any>;

    /**
     * Retrieves workouts history
     * Users needs to store token when logging in
     * ex: cy.getWorkoutsHistory({is_completed: true);
     *
     */
    getWorkoutsHistory(queryParams): Promise<any>;

    /**
     * Retrieves workouts stats
     * Users needs to store token when logging in
     * ex: cy.getWorkoutsStats();
     */
    getWorkoutsHistory(queryParams): Promise<any>;

    /**
     * Retrieves Series post request using bearer token
     * Users needs to store token when logging in
     * ex: cy.getAllSeries();
     */
    getAllSeries(queryParams): Promise<any>;

    /**
     * Set cookie to bypass shopify password page
     * ex: cy.setShopifyCookie();
     */
    setShopifyCookie(): Chainable<any>;

    /**
     * Asserts item's name, type and quantity
     * Users needs to store token when logging in
     * ex: cy.assertShopifyDataCartContainsItem("Name", "Bundle", "1")
     */
    assertShopifyDataCartContainsItem(
      expectedItemName,
      expectedItemType,
      expectedItemQuantity,
    ): Chainable<any>;

    /**
     * Asserts attribute value in data cart
     * ex: cy.assertShopifyDataCartAttribute("items_subtotal_price", 313123)
     */
    assertShopifyDataCartAttribute(
      attributeName,
      expectedValue,
    ): Chainable<any>;

    /**
     * Adds Free Streaming Membership to cart and validate it's present in both cart and data cart
     * ex: cy.addStreamingMembershipSevenDaysFreeToCartAndValidateIt()
     */
    addStreamingMembershipSevenDaysFreeToCartAndValidateIt(): Chainable<any>;

    /**
     * Adds TTB to cart with afterpay and validate it's present in checkout page
     * ex: cy.addTotalTranformationBundleToCartWithAfterPayAndValidateItem()
     */
    addTotalTranformationBundleToCartWithAfterPayAndValidateItem(): Chainable<any>;

    /**
     * Adds Multiple Streaming Membership Seven Days Free to cart and validate it
     * ex: cy.addMultipleStreamingMembershipSevenDaysFreeToCartAndValidateIt()
     */
    addMultipleStreamingMembershipSevenDaysFreeToCartAndValidateIt(): Chainable<any>;

    /**
     * Opens Product from main page
     * It's expected to be on collections page
     * ex: cy.openProduct("P.ball")
     */
    openProduct(productName): Chainable<any>;

    /**
     * Opens Product from main page
     * It's expected to be on product detail or TTB product Streaming Membership produc
     * ex: cy.validateProductSectionLoads()
     */
    validateProductSectionLoads(): Chainable<any>;

    /**
     * Adds 'Free trial classes' to the shopping cart
     */
    addFreeTrialToCart(): Chainable<any>;

    /**
     * Adds  Streaming Membership Seven Days Free to cart with one bundle product in the cart already and validate it
     * ex: cy.addStreamingMembershipSevenDaysFreeToCartWithBundleInCartAndValidateIt()
     */
    addStreamingMembershipSevenDaysFreeToCartWithBundleInCartAndValidateIt(): Chainable<any>;

    /**
     * Adds  bundle product to cart with one Streaming Membership Seven Days Free in the cart already and validate it
     * ex: cy.addBundleToCartWithStreamingMembershipSevenDaysFreeInCartAndValidateIt()
     */
    addBundleToCartWithStreamingMembershipSevenDaysFreeInCartAndValidateIt(): Chainable<any>;

    /**
     * Decrement item in mini cart by provided index of the items array
     * It's expected the mini cart contains at least one item
     * ex: cy.decrementItemInMiniCart(0)
     */
    decrementItemInMiniCart(itemIndex: number): Chainable<any>;

    /**
     * Increment item in mini cart by provided index of the items array
     * It's expected the mini cart contains at least one item
     * ex: cy.incrementItemInMiniCart(0)
     */
    incrementItemInMiniCart(itemIndex: number): Chainable<any>;

    /**
     * Assert bundle is not increasing
     * It's expected the mini cart open
     * ex: assertBundleIsNotIncreasing(0, "Total Transformation Bundle")
     */
    assertBundleIsNotIncreasing(itemIndex: number): Chainable<any>;

    /**
     * Assert trial is not increasing
     * It's expected the mini cart open
     * ex: assertTrialIsNotIncreasing(0, "Total Transformation Bundle")
     */
    assertTrialIsNotIncreasing(itemIndex: number): Chainable<any>;

    /**
     * Assert elements has certain length
     *
     * ex: cy.assertElementsLength(3);
     */
    assertElementsLength(elements: array, expectedItems): Chainable<any>;

    /**
     * Add upsell item
     * It's expected the mini cart contains at least one item
     * ex: cy.addUpsellItemToMiniCart(itemName, 2, 3)
     */
    addUpsellItemToMiniCart(
      itemName: string,
      expectedItemsInCar: number,
      remainingItemsInCarousel: number,
    ): Chainable<any>;

    /**
     * Add upsell item by index
     * It's expected the mini cart contains at least one item
     * ex: cy.addUpsellItemByIndexToMiniCart(itemIndex, 3, 3)
     */
    addUpsellItemByIndexToMiniCart(
      itemIndex: string,
      expectedItemsInCar: numbert,
      remainingItemsInCarousel: number,
    ): Chainable<any>;

    /*
     * Remove item in mini cart
     * It's expected the mini cart contains at least one item
     * ex: cy.removeItemInMiniCart(0, 0, 0)
     */
    removeItemInMiniCart(
      itemIndex: number,
      expectedItemsAfterRemovingInCart: number,
      expectedTotalAfterRemovingInDataCart: number,
    ): Chainable<any>;

    /*
     * Assert item not longer present in mini cart
     * ex: cy.assertItemIsNotPresentInMiniCart("P.ball", 0)
     */
    assertItemIsNotPresentInMiniCart(
      itemName: string,
      expectedItemsInCart: number,
    ): Chainable<any>;

    /**
     * Adds  Bundle with Amzon Activation Code to cart and validate it
     * ex: cy.add12MonthDigitalMembershipWithAmazonActivationCodeAndValidateIt(bundleName)
     */
    add12MonthDigitalMembershipWithAmazonActivationCodeAndValidateIt(
      bundleName: string,
    ): Chainable<any>;

    /**
     * Adds  Bundle with Amzon Activation Code to cart With TTB in cart and validate it
     * should not proceed if TTB is already in cart
     * ex: cy.addTTBToCartWithAmazonActivationCode()
     */
    addTTBToCartWithAmazonActivationCode(): Chainable<any>;

    /**
     * Goes to Amazon Activation Code page, set the discount code and activate it
     * ex: cy.setDiscountCodeAndActivateIt()
     */
    setDiscountCodeAndActivateIt(): Chainable<any>;

    /**
     * Open Total Transformation Bundle from main page
     * It's expected to be on collections page
     * ex: cy.openTotalTransformationBundle(")
     */
    openTotalTransformationBundle(): Chainable<any>;

    /**
     * Opens Signature Bundle from main page
     * It's expected to be on collections page
     * ex: cy.openSignatureBundle()
     */
    openSignatureBundle(): Chainable<any>;

    /**
     * Opens A La Carte Product from main page
     * It's expected to be on collections page
     * ex: cy.openALaCartProduct("P.ball")
     */
    openALaCartProduct(productName): Chainable<any>;

    /**
     * Add La Carte Product to cart from main page
     *
     * ex: cy.addALaCartProductToCart("P.band")
     */
    addALaCartProductToCart(productName): Chainable<any>;

    /**
     * Add Bundle to cart from main page
     *
     * ex: cy.addBundleToCart()
     */
    addBundleToCart(productName): Chainable<any>;

    /**
     * Add Bundle to cart from main page
     *
     * ex: cy.addBundleToCart("Signature Bundle")
     */
    addBundleToCart(productName): Chainable<any>;

    /**
     * Add Total Transformation Bundle to cart from main page
     *
     * ex: cy.addTotalTransformationBundleToCart()
     */
    addTotalTransformationBundleToCart(): Chainable<any>;

    /**
     * Add Signature Bundle to cart from main page
     *
     * ex: cy.addSignatureBundleToCart()
     */
    addSignatureBundleToCart(): Chainable<any>;

    /*
     * Adds  Bundle with Amzon Activation Code to cart with a streaming membership in cart and validate it
     * ex: cy.addDigitalMembershipWithTrialInCart()
     */
    addDigitalMembershipWithTrialInCart(): Chainable<any>;
  }
}
