/* eslint-disable no-undef */
import FavoriteRestaurantSearchPresenter from '../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from '../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-view';

describe('Searching Restaurants', () => {
  let presenter;
  let favoriteRestaurants;
  let view;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestaurantSearchContainer = () => {
    view = new FavoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteRestaurants,
      view,
    });
  };

  beforeEach(() => {
    setRestaurantSearchContainer();
    constructPresenter();
  });

  describe('when query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchRestaurants('film a');

      expect(presenter.latestQuery).toEqual('film a');
    });

    it('should ask the model to search for liked restaurants', () => {
      searchRestaurants('film a');

      expect(favoriteRestaurants.searchRestaurants).toHaveBeenCalledWith('film a');
    });

    it('should show the restaurants found by Favorite restaurants', (done) => {
      document.getElementById('posts').addEventListener('posts:updated', () => {
        expect(document.querySelectorAll('.restaurant-item').length).toEqual(3);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('film a').and.returnValues([
        { id: 111, title: 'film abc' },
        { id: 222, title: 'ada juga film abcde' },
        { id: 333, title: 'ini juga boleh film a' },
      ]);

      searchRestaurants('film a');
    });

    it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
      document.getElementById('posts').addEventListener('posts:updated', () => {
        const restaurantTitles = document.querySelectorAll('.restaurant_title');
        // console.log(restaurantTitles);
        expect(restaurantTitles.item(0).textContent).toEqual('film abc');
        expect(restaurantTitles.item(1).textContent).toEqual('ada juga film abcde');
        expect(restaurantTitles.item(2).textContent).toEqual('ini juga boleh film a');

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('film a').and.returnValues([
        { id: 111, title: 'film abc' },
        { id: 222, title: 'ada juga film abcde' },
        { id: 333, title: 'ini juga boleh film a' },
      ]);

      searchRestaurants('film a');
    });

    it('should show - when the Restaurant returned does not contain a title', (done) => {
      document.getElementById('posts').addEventListener('posts:updated', () => {
        const restaurantTitles = document.querySelectorAll('.restaurant_title');
        expect(restaurantTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('film a').and.returnValues([
        { id: 444 },
      ]);

      searchRestaurants('film a');
    });
  });

  describe('when query is empty', () => {
    it('should capture the query as empty', () => {
      searchRestaurants(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurants('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });

    it('should show all favorite Restaurants', () => {
      searchRestaurants('    ');
      expect(favoriteRestaurants.getAllRestaurants)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite Restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('posts').addEventListener('posts:updated', () => {
        expect(document.querySelectorAll('.restaurant-item_not_found').length).toEqual(1);
        done();
      });
      favoriteRestaurants.searchRestaurants.withArgs('film a').and.returnValues([]);

      searchRestaurants('film a');
    });

    it('should not show any Restaurant', (done) => {
      document.getElementById('posts').addEventListener('posts:updated', () => {
        expect(document.querySelectorAll('restaurant-item').length).toEqual(0);
        done();
      });

      favoriteRestaurants.searchRestaurants.withArgs('film a').and.returnValues([]);

      searchRestaurants('film a');
    });
  });
});
