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
    new FavoriteRestaurantShowPresenter({ view, favoriteMovies: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteMovies: FavoriteRestaurantIdb });
  },
};

export default Favorite;
