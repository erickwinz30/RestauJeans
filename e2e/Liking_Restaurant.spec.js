/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one movie', async ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item_not_found');

  I.amOnPage('/');

  I.waitForElement('.restaurant_title a', 10);

  I.seeElement('.restaurant_title a');

  const firstFilm = locate('.restaurant_title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.waitForElement('.like', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedFilmTitle = await I.grabTextFrom('.restaurant_title');
  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

// Scenario('showing empty liked restaurants', ({ I }) => {
//   I.seeElement('#query');
//   I.see('Tidak ada film untuk ditampilkan', '.restaurant-item_not_found');
// });
