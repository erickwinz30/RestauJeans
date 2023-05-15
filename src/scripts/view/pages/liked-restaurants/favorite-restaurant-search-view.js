import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
        <div class="content">
        <input id="query" type="text">
        <h2 class="content_heading">Your Liked Restaurant</h2>
          <div id="restaurants" class="restaurants">
          </div>
        </div>
      </div>
      `;
  }

  // eslint-disable-next-line class-methods-use-this
  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  showFavoriteRestaurants(restaurants = []) {
    let html;

    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  // eslint-disable-next-line class-methods-use-this
  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item_not_found">Tidak ada film untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
