/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant_title a', 10);
  I.seeElement('.restaurant_title a');

  const noRestaurantsFound = await I.grabNumberOfVisibleElements('.restaurant-item_not_found');
  if (noRestaurantsFound === 0) {
    const firstRestaurant = locate('.restaurant_title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.waitForElement('.restaurant-item', 10);
    const likedRestaurantTitle = await I.grabTextFrom('.restaurant_title');
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    // unliking a restaurant
    I.amOnPage('/');
    I.amOnPage('/#/favorite');
    I.waitForElement('.restaurant-item', 10);
    I.click(firstRestaurant);
    I.waitForElement('#likeButton', 10);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.dontSeeElement('.restaurant-item');
  } else {
    console.log('No restaurants found');
  }
});
