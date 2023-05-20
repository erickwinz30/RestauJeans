/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
//   I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item_not_found');

  I.amOnPage('/');

  I.waitForElement('.restaurant_title a', 10);

  I.seeElement('.restaurant_title a');

  const firstRestaurant = locate('.restaurant_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 10);
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant_title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
