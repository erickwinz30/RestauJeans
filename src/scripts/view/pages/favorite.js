/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const view = new FavoriteRestaurantSearchView();
const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    // const restaurantsContainer = document.querySelector('#posts');

    // restaurants.forEach((restaurant) => {
    //   // eslint-disable-next-line no-undef
    //   restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    // });

    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
