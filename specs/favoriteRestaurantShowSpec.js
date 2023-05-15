/* eslint-disable no-undef */
import FavoriteRestaurantSearchView from '../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/view/pages/liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite Restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no Restaurants have been liked', () => {
    it('should render the information that no restaurants have been liked', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      const presenter = new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      const restaurants = [];
      presenter._displayRestaurants(restaurants);

      expect(document.querySelectorAll('.restaurant-item_not_found').length).toEqual(1);
    });

    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      // eslint-disable-next-line no-new
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });
  });

  describe('When favorite Restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb, false);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11,
          title: 'A',
          vote_average: 3,
          overview: 'Sebuah film A',
        },
        {
          id: 22,
          title: 'B',
          vote_average: 4,
          overview: 'Sebuah film B',
        },
      ]);

      // eslint-disable-next-line no-new
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
