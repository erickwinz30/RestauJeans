import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content">
          <div class="latest">
          <h1 class="latest_label" tabindex="0">Your Liked Restaurant</h1>
            <div class="posts" id="posts">
            </div>
          </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      console.log(restaurant);
      const restaurantItem = createRestaurantItemTemplate(restaurant);
      restaurantContainer.innerHTML += restaurantItem;
    });
  },
};

export default Favorite;
